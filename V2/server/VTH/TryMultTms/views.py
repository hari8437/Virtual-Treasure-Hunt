from django.shortcuts import render
from django.http import HttpResponse


count = 0

def index(request): # Render Page & Validation
  if(request.method == 'POST'):
    #key = request.POST.get('key')
    global count
    print('\nCount: ', count) # TODO: Remove tmp Line
    count+=1
    if(count > 10):
      return render(request, 'index.html', {'res':'Well Done!!'}) # TODO: Go to Next Page
    return render(request, 'index.html', {'res':'Wrong Password, Try Again'})
  
  return render(request, 'index.html')
