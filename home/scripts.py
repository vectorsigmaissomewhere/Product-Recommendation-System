import django 
import os 

os.environ['DJANGO_SETTINGS_MODULE'] = 'home.settings'
django.setup()
import pandas as pd 

import csv 
csv_file_path = 'flipkart_com-ecommerce_sample.csv'
from recommend.models import * 


with open(csv_file_path, mode='r', encoding='utf-8') as file:
    reader = csv.DictReader(file)

    for row in reader:
        try:
            product_name = row['product_name']
            product_image = eval(row['image'])[0] # first image from list
            description = row['description']
            category = row['product_category_tree'].split('>>')[0].strip('[]"') # extract 
            price = row['retail_price']

            print(
                product_name,
                product_image,
                description,
                category,
                price,
            )
            # time.sleep()

            # create or update product 
            Product.objects.update_or_create(
                name = product_name, 
                defaults = {
                    'product_image': product_image, 
                    'description': description, 
                    'category': category,
                    'price': price
                }
            )
        except Exception as e:
            print(e)

print("Products imported successfully!")
