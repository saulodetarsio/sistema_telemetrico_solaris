from app.forms import UserLoginForm, UserCreateForm, AdicionarBoiaForm
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponseRedirect, HttpResponse
from django.contrib.auth.decorators import login_required
from app.models import Boia
from django.urls import reverse
from django.http import JsonResponse
from django.shortcuts import render
import json


boias = []

def register(request):
    if request.method == 'POST':
        user_form = UserCreateForm(data=request.POST)

        if user_form.is_valid():
            user = user_form.save()
            user.set_password(user.password)
            user.save()
            registered = True
        else:
            print(user_form.errors)
    else:
        user_form = UserCreateForm()
    return render(request,'app/cadastro.html',
                          {'user_form':user_form})
    
"""
    Método que trata a ação de login inicializada pelo usuário do software. Trata-se de uma requisião web,
    logo o "request" como parâmetro da função. O método testa se o usuário que está realizando a requisição ja está 
    autenticado. Se sim, o usuário será redirecionado para a página principal, a página de medidas. Se não estiver autenticado
    e estiver realizando a ação de login, método POST, os valores de usuario e senha informadas no forumlários são capturadas e 
    as ações para verificação de autenticação são inicializadas. Se o usuário está precisando apenas carregar a página de login,
   método GET, um formulário é instanciado e a página de login é carregada.  
"""
def user_login(request):

    #usuário está autenticado e quer acessar a página de login;
    #O usuário será redirecionado para a página index.;
    #A página de login só pode ser acessada se o usuário não estiver  autenticado no sistema ou 
    #se ele fizer o logout no sistema.
    if request.user.is_authenticated:
        return HttpResponseRedirect(reverse('app:index'))

    #Usuário não está autenticado e solicita seus dados para a realização do acesso
    if request.method == 'POST':

        #referente ao campo de usuario presente no formulário HTML
        username = request.POST.get('usuario')

        #referente ao campo de senha presente no formulário HTML
        password = request.POST.get('senha')

        #Inicialização de valores do objeto UserLoginForm
        form_login = UserLoginForm(data=request.POST)

        #Verificar se os dados informados no formúlário de login são válidos.
        valid = form_login.is_valid()
        
        if not valid:
            #Usuário informou dados que não definem um acesso no sistema
            #usuario e senha errados
            #continua na página de login e as mensagem de erros são impressas na tela
            return render(request, 'app/login.html', {'form_login': form_login})
        else:
            #Testa se os dados informados pelo usuário correspondem a um acesso válido
            user = form_login.verificar_acesso()

            #Se os dados forem válidos e o usuário é ativo no sistema, o usuário é autenticado no sistema e 
            #é redirecionado para a página de medidas.
            if user is not None:
                if user.is_active:
                    #Autenticando usuário
                    login(request, user)
                    #redirecionamento
                    return HttpResponseRedirect(reverse('app:index'))
            else:
                #Acesso não é válido e a página de login juntamentente à mensagens de erros 
                #são renderizadas para o usuário
                return render(request, 'app/login.html', {'form_login': form_login})
    else:
        form_login = UserLoginForm()
        return render(request, 'app/login.html', {'form_login': form_login})


"""
    Método reponsável por fazer a relação entre a ação 'index' e sua respectiva página HTML.
"""
@login_required
def index(request):
    #O arquivo HTML index.html
    return render(request,'app/index.html')


"""
    Método que realiza o logout do usuário. Após a operação de logout, o usuário
    é direcionado para a página de login do software
"""
@login_required
def user_logout(request):
    #Logout do usuário
    logout(request)
    #Redirecionamento
    return HttpResponseRedirect(reverse('app:user_login'))


"""
    Método reponsável por fazer a relação entre ação 'mapa' e sua respectiva página HTML.
"""
@login_required
def mapa(request):
    #O arquivo HTML mapa.html
    return render(request,'app/mapa.html')


""""
    Método responsável por guardar as informações de uma boia que foi adicionada pelo usuário com permissão para tal.
    As informações da boia são guardadas dentro de um vetor que será utilizado na página de mapa. Nessa página, esse vetor
    será utilizado para capturar as informações das boias armazenadas e renderizá-las no mapa.
"""
@login_required
def adicionar_boias(request):
    #Instancia o formulário da página que faz a adição de boias
    form_add_boia = AdicionarBoiaForm()

    #Testa se a requisição consiste na adição de dados
    if request.method == "POST":
        #Captura o valor do parâmetro latitude presente na requisição
        latitude = request.POST.get('latitude')
        #Captura o valor do parâmetro longitude presente na requisição
        longitude = request.POST.get('longitude')

        #Instancia um objeto do tipo Boia e inicializa seus valores 
        #com referência a latitude e longitude capturadas anteriormente
        b = Boia()
        b.latitude = latitude
        b.longitude = longitude

        #Adiciona o objeto criado no vetor de boias presente nesta camada do software
        boias.append(b)

        #redirecionamento para a própria página de adição de boias
        return HttpResponseRedirect(reverse('app:adicionar_boias'))

    #em caso de requisição da página de adição de boias, ou seja, método GET
    return render(request,'app/adicionar_boias.html', {'form_add_boia': form_add_boia, 'boias' : boias})


"""
    Método que retorna todas as boias presentes no vetor boias. Os dados presentes
    neste vetor serão retornados para a página que está solicitando tais dados, que é a 
    página de visualização da geolocalização da embarcação.
"""
@login_required
def get_boias(request):
    a = [] # um vetor auxiliar
    #Loop para capturar todos os elementos presentes no vetor

    for b in boias:
        latitude = b.latitude  #latitude
        longitude = b.longitude #longitude
    
        a.append([latitude, longitude]) # um par ordenado do tipo [latitude, longitude]

    #Retornando os dados para a página de geolocalização da embarcação
    return HttpResponse(json.dumps(a), content_type='application/json')

"""
    Método responsável por remover todas as boias que estão salvas no vetor boias.
    O vetor terá todos os elemento removidos caso o usuário clique no botão de remover
    boias presente na tela que adiciona as boias que definem o circuito da prova.
"""
@login_required
def delete_boias(request):
    #limpando o vetor com o método clear
    boias.clear()
    #Instancia o formuĺário para adição de novas boias
    form_add_boia = AdicionarBoiaForm()
    #Retorna para a página de adição de boias
    #como o vetor não apresenta elemento, nenhuma informação de boias aparecerá após o clique do botão de remoção
    return render(request, 'app/adicionar_boias.html', {'form_add_boia': form_add_boia, 'boias' : []})
       
