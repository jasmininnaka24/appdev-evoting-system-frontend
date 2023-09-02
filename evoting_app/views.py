from django.shortcuts import render

# Create your views here.
def home(request):
  return render(request, 'home.html')

def mainad(request):
  return render(request, 'mainad.html')

def mainvtr(request):
  return render(request, 'mainvtr.html')

def adminprf(request):
  return render(request, 'adminprf.html')

def voterprf(request):
  return render(request, 'voterprf.html')

def profilesetup(request):
  return render(request, 'profilesetup.html')

def profilesetup(request):
  return render(request, 'profilesetup.html')

def changepad(request):
  return render(request, 'changepad.html')

def changepadvtr(request):
  return render(request, 'changepadvtr.html')

def castedvotes(request):
  return render(request, 'castedvotes.html')

def candprf(request):
  return render(request, 'candsprf.html')

def dashboardad(request):
  return render(request, 'dashboardad.html')

def dashboardvtr(request):
  return render(request, 'dashboardvtr.html')

def castvote(request):
  return render(request, 'castvote.html')

def admindashboard(request):
  return render(request, 'admindashboard.html')