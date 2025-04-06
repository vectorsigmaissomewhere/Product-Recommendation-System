from django.contrib import admin
from recommend.models import Product

# Admin class for Product model 
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'price', 'created_at') # fields to display in the list 
    search_fields = ('name', 'category') # fields to search in the admin 
    list_filter = ('category', 'created_at') # fiellds to filter by in the admin
    ordering = ('created_at', ) # ordering by crreation date, newest first 

# register the models and their respective admin classes 
admin.site.register(Product, ProductAdmin)