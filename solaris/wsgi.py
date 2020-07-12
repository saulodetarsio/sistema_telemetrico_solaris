import os
import sys

from django.core.wsgi import get_wsgi_application

sys.path.append('/var/www/sistema_telemetrico_solaris')
sys.path.append('/var/www/sistema_telemetrico_solaris/dir_dependenciaslib/python3.7/site-packages')


os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'solaris.settings')

application = get_wsgi_application()