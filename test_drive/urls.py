from django.urls import path
from test_site import views

urlpatterns = [
    path('', views.index),
]
