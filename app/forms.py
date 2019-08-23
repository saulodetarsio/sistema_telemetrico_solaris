from django import forms
from app.models import UserProfileInfo
from django.contrib.auth.models import User
from django.contrib.auth import authenticate


"""
	Formulário que auxilia a funcionalidade de login de usuários no sistema.
"""
class UserLoginForm(forms.Form):
	#campo usuario
	usuario = 	forms.CharField(help_text="Usuario", widget=forms.TextInput(attrs={'placeholder':'Usuário',
	'class':'form-control'}), error_messages={'required': 'Campo Usuário precisa ser preenchido'})

	#campo senha
	senha = forms.CharField(help_text="Senha", widget=forms.PasswordInput(attrs={'placeholder':'Senha',
	'class':'form-control'}), error_messages={'required': 'Campo Senha precisa ser preenchido'})

	#Função que é disparada para verificar se o usuário informou dados válidos de login.
	def verificar_acesso(self):
		#campo usuario
		usuario = self.cleaned_data['usuario']

		#campo senha
		senha = self.cleaned_data['senha']

		#Verificar autenticidade do usuário
		#Vai na base de dados e verifica o acesso
		user_object = authenticate(username=usuario, password=senha)

		#Se não há um objeto que foi retornado pelo método de autenticidade
		#adiciona o erro na página de login
		if user_object is None:
			self.add_error(None, 'Usuario e senha não conferem')

		return user_object

"""
	Formulário que auxilia a funcionalidade de adicionar usuários no sistema.
"""
class UserCreateForm(forms.ModelForm):
	
	#campo de primeiro nome do usuário
	primeiro_nome = 	forms.CharField(widget=forms.TextInput(attrs={'placeholder':'Nome',
	'class':'form-control'}))

	usuario = forms.CharField(widget=forms.TextInput(attrs={'placeholder':'Nickname',
	'class':'form-control'}))

	senha1 = forms.CharField(widget=forms.PasswordInput(attrs={'placeholder':'Senha',
	'class':'form-control'}))

	senha2 = forms.CharField(widget=forms.PasswordInput(attrs={'placeholder':'Confirme sua senha',
	'class':'form-control'}))

	class Meta():
		model = User
		fields = ['username', 'password', 'first_name']



class AdicionarBoiaForm(forms.Form):
	latitude = 	forms.CharField(help_text="Informe a latitude", widget=forms.TextInput(attrs={'placeholder':'Digite a latitude aqui',
	'class':'form-control'}))
	longitude = forms.CharField(help_text="Informe a longitude", widget=forms.TextInput(attrs={'placeholder':'Digite a longitude aqui',
	'class':'form-control'}))


