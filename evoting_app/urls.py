from django.urls import path
from . import views
	
urlpatterns = [
	path('', views.home, name="home"),
	path('mainad/', views.mainad, name="mainad"),
	path('mainvtr/', views.mainvtr, name="mainvtr"),
	path('adminprf/', views.adminprf, name="adminprf"),
	path('voterprf/', views.voterprf, name="voterprf"),
	path('profilesetup/', views.profilesetup, name="profilesetup"),
	path('changepad/', views.changepad, name="changepad"),
	path('changepadvtr/', views.changepadvtr, name="changepadvtr"),
	path('castedvotes/', views.castedvotes, name="castedvotes"),
	path('candprf/', views.candprf, name="candprf"),
	path('dashboardad/', views.dashboardad, name="dashboardad"),
	path('dashboardvtr/', views.dashboardvtr, name="dashboardvtr"),
	path('castvote/', views.castvote, name="castvote"),
	path('admindashboard/', views.admindashboard, name="admindashboard"),
]