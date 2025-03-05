
from django.conf import settings

from django.shortcuts import render
from django.core.mail import send_mail


# Create your views here.
def index(request):
    if request.method == "POST":
        fname = request.POST["fname"]
        lname = request.POST["lname"]
        email = request.POST["email"]
        phone = request.POST["phone"]
        feedback = request.POST["feedback"]
        
        #send an email
        send_mail(
            f"From: {fname} {lname}, Mobile: {phone}", #subject
            feedback, #message
            email, #from email
            ['aighalo@algomau.ca'], #To Email
        )
        return render(request,'index.html',{'fname':fname})
    else:   
        return render(request,'index.html',{})