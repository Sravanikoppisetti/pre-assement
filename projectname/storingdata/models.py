from django.db import models

class Employee(models.Model):
    Employee_id=models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=200)
    role = models.CharField(max_length=200)
    gender = models.CharField(max_length=10)
    
    def __str__(self):
        return self.name