from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=100)
    product_image = models.URLField()
    description = models.TextField()
    category = models.CharField(max_length=100)
    price = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)