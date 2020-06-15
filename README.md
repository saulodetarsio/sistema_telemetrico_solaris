# Um sistema telemétrico para um embarcação movida a energia solar


## Pre-requisitos
- Sistema Operacional Linux;
- Python 3.7;
- Git;
- Servidor mosquitto;
- Servidor redis;
- Servidor apache2

## Instalando os pré-requisitos necessários no sistema operacional

1. Abra o terminal e execute o seguinte comando:
    * sudo apt update 

2. Instale o python 3.7 com o seguinte comando:
    * sudo apt-get install python3.7

    * sudo apt-get install python3-setuptools

3. Verifique se python3 foi instalado corretamente com o seguinte comando:
    * python --version
    
4. Instale o git na máquina com o seguinte comando:
    *  	sudo apt install git

5. Verifique a versão do git instalado na máquina com o seguinte comando:
    * git --version

6. Execute o seguinte comando para instalar o apache2:
    * sudo apt install apache2 libapache2-mod-wsgi-py3

7. Verifique o status do servidor apache com o seguinte comando:
    * sudo systemctl status apache2

8. Execute o seguinte comando para  instalar o servidor redis:
    * sudo apt install redis-server

9. Verifique o status do servidor redis com o seguinte comando:
    * sudo systemctl status redis-server

10. Execute o seguinte comando para instalar o servidor mosquitto:
	* sudo apt install  mosquitto mosquitto-clients

11. Verifique o status do servidor mosquitto com o seguinte comando:
    * sudo systemctl status mosquitto

12. Instale o git na máquina com o seguinte comando:
    * sudo apt-get install git   
 
## Baixando e configurando a aplicação

1. Em um diretório de sua preferência, baixe o projeto do repositório remoto com o seguinte comando:
	* git clone https://github.com/saulodetarsio/sistema_telemetrico_solaris.git

2. Com o comando pip, instale a seguinte dependência:
	* pip3 install virtualenv

3. Com o terminal ativado, navegue até a pasta raiz da aplicação e execute o comando para criar a estrutura
de pastas e arquivos de dependências:
	* python3 -m venv dir_dependencias

4. Ative o ambiente virtual para a aplicação instalar e utilizar as dependências:
	* source dir_dependencias/bin/activate

5. Instale todas as dependências presentes no arquivo dependencias.txt localizado na pasta raiz do projeto.
	* pip3 install -r dependencias.txt
 

## Configurando o servidor apache para servir a aplicação

 * Abra o terminal e navegue até a pasta onde está contida a pasta 
 'sistema_telemetrico_solaris' e execute o comando para trocar a permissão:
 
    * sudo chown -R $USER:$USER base/sistema_telemetrico_solaris
	* sudo chmod -R 777 base/sistema_telemetrico_solaris

onde 'base' é o diretório onde se encontra a aplicação:
   * exemplo: '/var/www/'
   
 * Dentro da pasta /etc/apache2/sites-avaialable, crie um arquivo chamado "solaris.com.conf" 
 com o seguinte comando:
	* sudo nano solaris.com.conf
	
* Copie e cole o seguinte conteúdo para o "arquivo solaris.com.conf". Logo após, 
salve e feche o arquivo.

```xhtml
<VirtualHost *:80> 
 ServerName solaris.com 
 ServerAlias solaris.com

 WSGIScriptAlias / /var/www/sistema_telemetrico_solaris/solaris/wsgi.py 
 
 WSGIDaemonProcess solaris.com python-path=/var/www/sistema_telemetrico_solaris/solaris:/var/www/sistema_telemetrico_solaris/dir_dependencias/lib/python3.7/site-packages

 WSGIProcessGroup solaris.com 
	
 <Directory /var/www/sistema_telemetrico_solaris/solaris>
     <Files wsgi.py>
     	Require all granted
    </Files>
 </Directory>


 Alias /static/ /var/www/sistema_telemetrico_solaris/static/
 
 <Directory /var/www/sistema_telemetrico_solaris/static> 
  Require all granted 
 </Directory>

 ErrorLog /var/www/sistema_telemetrico_solaris/error.log

 RewriteEngine on
 RewriteCond %{HTTP:UPGRADE} ^WebSocket$ [NC,OR]
 RewriteCond %{HTTP:CONNECTION} ^Upgrade$ [NC]
 RewriteRule .* ws://127.0.0.1:8001%{REQUEST_URI} [P,QSA,L]
 
</VirtualHost> 
```

* No diretório '/etc/apache2/sites-avaialable', ative as configurações que você 
acabou de criar no arquivo "solaris.com.conf" com o seguinte comando:
	* sudo a2ensite solaris.com.conf

* Desative as configurações padrões com o seguinte comando:
	* sudo a2dissite 000-default.conf

* Execute o seguinte comando:
    * sudo a2enmod rewrite

* Reinicie o servidor o apache com o seguinte comando:
	* sudo systemctl restart apache2

* Verifique o status do servidor apache com o seguinte comando: 
	sudo systemctl status apache2

* Acionar os seguintes comandos para habilitar módulos para comunicação 
via websocket:
	* sudo a2enmod proxya2enmod proxy
	* sudo a2enmod proxy_http
	* sudo a2enmod proxy_wstunnel

* Reinicie o servidor o apache com o seguinte comando:
	* sudo systemctl restart apache2

* Verifique o status do servidor apache com o seguinte comando: 
	sudo systemctl status apache2

## Executando a aplicação

1. Abra o terminal na pasta raiz da aplicação e execute o seguinte comando: 
	* daphne -b 127.0.0.1 -p 8001 bismarck_solaris.asgi:application
	
2. Execute o servidor mosquitto com o seguinte comando no terminal:
	- mosquitto

3. Abra outro terminal e inicie o servidor redis, digitando o comando:
	- redis_server

4. Abra o terminal na pasta base/sistema_telemetrico_solaris/teste_mqtt e digite o seguinte comando:
	python3 transmissao_dados.py

5. Execute o navegador de sua preferência e informe a seguinte url para acessar a página de login da aplicação
	solaris.com/app

6. Para logar, informe os seguintes dados de acesso:
	* Usuário: usuario
	* Senha: solaris_iff
