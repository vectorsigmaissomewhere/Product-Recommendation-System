# Product Recommendation System
```text
A product recommendation system built using TF-IDF Vectorizer and Cosine Similarity, designed to provide personalized product recommendations based on the user's input. The data is extracted from [Flipkart Products Dataset](https://www.kaggle.com/datasets/PromptCloudHQ/flipkart-products), and the system is built using Django REST Framework (for the backend) and React (for the frontend).
```

### Sample Recommendation Interface
![Capture 81](https://github.com/vectorsigmaissomewhere/Product-Recommendation-System/blob/main/assets/capture81.PNG)

### Another Example
![Capture 82](https://github.com/vectorsigmaissomewhere/Product-Recommendation-System/blob/main/assets/capture82.PNG)

## Features
```text
- **Personalized Recommendations**: Recommends products based on similarity to a given product.
- **TF-IDF Vectorization**: Utilizes TF-IDF to convert product data into numerical features.
- **Cosine Similarity**: Measures the similarity between products and returns the most similar items.
- **Django REST Framework**: Backend for handling API requests and recommendations.
- **React Frontend**: User interface to interact with the recommendation system.
```
## Tech Stack
```text
- **Backend**: Django REST Framework
- **Frontend**: React
- **Recommendation Algorithm**: TF-IDF Vectorizer, Cosine Similarity
- **Database**: SQLite (or other, depending on your configuration)
- **Dataset**: [Flipkart Products Dataset](https://www.kaggle.com/datasets/PromptCloudHQ/flipkart-products)
```

### Prerequisites
```text
- Python 3.x
- Node.js and npm
- Django
- Django REST Framework
```

### Backend Setup

1. Clone the repository:
```bash
https://github.com/vectorsigmaissomewhere/Product-Recommendation-System.git
```

2. Set up a virtual environment (optional but recommended):
```bash
python3 -m venv venv
source venv/bin/activate 
```
3. Install this 
```bash
pip install Django
pip install djangorestframework
pip install django-cors-headers
```
4. Apply database migrations:
```bash
python manage.py makemigrations recommend
python manage.py migrate
```

5. Load the product data from the dataset into your database (you can write a script or use Django's admin interface).

6. Start the Django Server 
```text 
python manage.py runserver 
```

Frontend Setup

1. Navigate to Somefrontend directory:
```bash
cd somefrontend
```

2. install the requird npm packages 
```bash
npm install
```

3. Start the React Development server
```bash
npm start
```

4. Open your browser and navigate to http://localhost:3000 to interact with the recommendation system.

## API Endpoints

1
```text
Endpoint: GET products/

Description: Returns a list of products 
```

Response
```json

{
    "all_products": [
        {
            "id": 1707,
            "name": "Fabtag Casual Short Sleeve Striped Women's Top",
            "product_image": "http://img5a.flixcart.com/image/top/c/g/s/1-1-fab025-fabtag-l-original-imaeaeajq3gmuscd.jpeg",
            "description": "Fabtag Casual Short Sleeve Striped Women's Top - Buy Blue Fabtag Casual Short Sleeve Striped Women's Top For Only Rs. 699 Online in India. Shop Online For Apparels. Huge Collection of Branded Clothes Only at Flipkart.com",
            "category": "Clothing ",
            "price": 699.0,
            "created_at": "2025-04-06T08:52:54.477369Z"
        },
        {
            "id": 4091,
            "name": "Park Avenue Believe Deodorant ,Orignal EDP Combo Set",
            "product_image": "http://img6a.flixcart.com/image/combo-gift-set/h/7/c/park-avenue-1100x1100-imae998tybz2txdg.jpeg",
            "description": "Flipkart.com: Buy Park Avenue Believe Deodorant ,Orignal EDP Combo Set online only for Rs. 385 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
            "category": "Beauty and Personal Care ",
            "price": 389.0,
            "created_at": "2025-04-06T08:53:27.441331Z"
        },
        {
            "id": 12618,
            "name": "Wallmantra Small Vinyl Stickers Sticker",
            "product_image": "http://img6a.flixcart.com/image/sticker/5/q/k/wmna013-l-wallmantra-90-floating-house-scenery-wall-decal-large-original-imae8xrnv9qqudpr.jpeg",
            "description": "Buy Wallmantra Small Vinyl Stickers Sticker for Rs.582 online. Wallmantra Small Vinyl Stickers Sticker at best prices with FREE shipping & cash on delivery. Only Genuine Products. 30 Day Replacement Guarantee.",
            "category": "Baby Care ",
            "price": 727.0,
            "created_at": "2025-04-06T08:57:21.961561Z"
        },
        {
            "id": 1828,
            "name": "VRTYA Casual Short Sleeve Solid Women's Grey Top",
            "product_image": "http://img6a.flixcart.com/image/top/e/k/9/hf00c16156-vrtya-m-1000x1000-imaehzmjxfxnkzgh.jpeg",
            "description": "Key Features of VRTYA Casual Short Sleeve Solid Women's Grey Top Type:Yoga Top Color :Grey Fabric : Cotton Neck : Round Neck Wash Care: Wash dark color garments separately.,VRTYA Casual Short Sleeve Solid Women's Grey Top Price: Rs. 1,200 Cami organic Yoga wear,Specifications of VRTYA Casual Short Sleeve Solid Women's Grey Top Top Details Sleeve Short Sleeve Number of Contents in Sales Package Pack of 1 Fabric Cotton Type Top Neck Round Neck General Details Pattern Solid Ideal For Women's Occasion Casual Additional Details Product Weight(g)-200 In the Box 1 Top",
            "category": "Clothing ",
            "price": 1200.0,
            "created_at": "2025-04-06T08:52:55.931952Z"
        },
        {
            "id": 2514,
            "name": "Allure Auto CM 591 Car Mat Ford Fiesta",
            "product_image": "http://img6a.flixcart.com/image/car-mat/4/m/m/honda-brio-rubber-mats-black-allure-auto-cm-600-1100x1100-imaecjxk9gke4mry.jpeg",
            "description": "Buy Allure Auto CM 591 Car Mat Ford Fiesta for Rs.920 online. Allure Auto CM 591 Car Mat Ford Fiesta at best prices with FREE shipping & cash on delivery. Only Genuine Products. 30 Day Replacement Guarantee.",
            "category": "Automotive ",
            "price": 2450.0,
            "created_at": "2025-04-06T08:53:02.912770Z"
        },
        {
            "id": 12242,
            "name": "Aroma Comfort Polyester Blue Floral Eyelet Long Door Curtain",
            "product_image": "http://img5a.flixcart.com/image/curtain/3/y/z/mse-545-152-maa-sharda-exports-eyelet-patta-1100x1100-imaeahtsfr7wzy2u.jpeg",
            "description": "Key Features of Aroma Comfort Polyester Blue Floral Eyelet Long Door Curtain Height: 274 cm Width: 4 inch,Specifications of Aroma Comfort Polyester Blue Floral Eyelet Long Door Curtain (274 cm in Height, Pack of 3) General Brand Aroma Comfort Designed For Long Door Type Eyelet Model Name PATTA Model ID AC-559 Color Blue Dimensions Length 274 cm Body & Design Material Polyester In the Box Number of Contents in Sales Package Pack of 3",
            "category": "Home Furnishing ",
            "price": 999.0,
            "created_at": "2025-04-06T08:57:07.652033Z"
        },
        {
            "id": 10138,
            "name": "Nirosha Leather Bracelet",
            "product_image": "http://img5a.flixcart.com/image/bangle-bracelet-armlet/d/q/y/nfjs17b0062-free-size-go4shopping-1-1100x1100-imae4ueucs8rdgv6.jpeg",
            "description": "Nirosha Leather Bracelet\n                         Price: Rs. 299\n\t\t\t\t\n\t\t\tAdd some quirky fun to your wrist with this bracelet. Totally fun and versatile enough to team with anything!\nAdd some quirky fun to your wrist with this bracelet. Totally fun and versatile enough to team with anything!",
            "category": "Jewellery ",
            "price": 599.0,
            "created_at": "2025-04-06T08:56:08.631309Z"
        },
        {
            "id": 4125,
            "name": "Nivea Happy Time Pack of 2 Combo Set",
            "product_image": "http://img5a.flixcart.com/image/combo-gift-set/6/u/e/nivea-original-imadsnfvppff58ec.jpeg",
            "description": "Flipkart.com: Buy Nivea Happy Time Pack of 2 Combo Set online only for Rs. 0.0 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
            "category": "Beauty and Personal Care ",
            "price": 350.0,
            "created_at": "2025-04-06T08:53:28.047320Z"
        },
        {
            "id": 4544,
            "name": "Indian Charm Multicolor Ceramic Beads Ceramic Necklace",
            "product_image": "http://img5a.flixcart.com/image/necklace-chain/s/d/g/nk1554-indian-charm-necklace-original-imae6ns6dscvyghr.jpeg",
            "description": "Indian Charm Multicolor Ceramic Beads Ceramic Necklace - Buy Indian Charm Multicolor Ceramic Beads Ceramic Necklace only for Rs. 405 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
            "category": "Jewellery ",
            "price": 450.0,
            "created_at": "2025-04-06T08:53:36.053293Z"
        },
        {
            "id": 5655,
            "name": "Rk Plant Container Set",
            "product_image": "http://img5a.flixcart.com/image/plant-container-set/p/h/u/p51224-rk-original-imae76mkheguvahj.jpeg",
            "description": "Buy Rk Plant Container Set for Rs.3099 online. Rk Plant Container Set at best prices with FREE shipping & cash on delivery. Only Genuine Products. 30 Day Replacement Guarantee.",
            "category": "Tools & Hardware ",
            "price": 4999.0,
            "created_at": "2025-04-06T08:53:58.023106Z"
        },
        {
            "id": 1803,
            "name": "O Baby Women's Printed White, Dark Green Top & Shorts Set",
            "product_image": "http://img6a.flixcart.com/image/night-suit/s/g/b/6406-white-o-baby-xl-original-imae3kvtw6nrhecb.jpeg",
            "description": "Key Features of O Baby Women's Printed White, Dark Green Top & Shorts Set Fabric: Cotton Hosiery Brand Color: White, Dark Green,Specifications of O Baby Women's Printed White, Dark Green Top & Shorts Set Dimensions Length Short General Details Pattern Printed Ideal For Women's Night Suit Details Number of Contents in Sales Package Pack of 1 Fabric Cotton Hosiery Type Top & Shorts Set In the Box Top, Short Set Fabric Care Dry Clean",
            "category": "Clothing ",
            "price": 960.0,
            "created_at": "2025-04-06T08:52:55.730725Z"
        },
        {
            "id": 813,
            "name": "Aroma Care Intense Color Nail Polish Combo 175057 49.5 ml",
            "product_image": "http://img6a.flixcart.com/image/nail-polish/d/c/c/aroma-care-49-5-intense-color-nail-polish-combo-175057-original-imaegsh3zdkrjz3y.jpeg",
            "description": "Specifications of Aroma Care Intense Color Nail Polish Combo 175057 49.5 ml (Multicolor,) Nail Polish Traits Quantity 49.5 ml Shade Multicolor, Organic Yes Warranty After Use No Exchange No Return Additional Traits No Exchange. No Return. No Warranty. Color Fidelity:The colors displayed here are indicative and may not be precise representations of actual shades due to variance in monitor calibrations and resolution as well as screen settings. In the Box 5 Nail Polishs",
            "category": "Beauty and Personal Care ",
            "price": 600.0,
            "created_at": "2025-04-06T08:52:39.979280Z"
        },
        {
            "id": 317,
            "name": "Hichkii Casual Cape Sleeve Embroidered Women's Top",
            "product_image": "http://img6a.flixcart.com/image/top/h/4/w/1-1-m2p1041white-hichkii-s-original-imaebsmehufzbye7.jpeg",
            "description": "Hichkii Casual Cape Sleeve Embroidered Women's Top - Buy Off-White Hichkii Casual Cape Sleeve Embroidered Women's Top For Only Rs. 799 Online in India. Shop Online For Apparels. Huge Collection of Branded Clothes Only at Flipkart.com",
            "category": "Clothing ",
            "price": 799.0,
            "created_at": "2025-04-06T08:52:33.893075Z"
        },
        {
            "id": 6843,
            "name": "SayItLoud Printed Men's Round Neck T-Shirt",
            "product_image": "http://img5a.flixcart.com/image/t-shirt/g/4/6/02beloudhaters-black-sayitloud-xl-original-imae38gpsggeh4cz.jpeg",
            "description": "SayItLoud Printed Men's Round Neck T-Shirt\n                         Price: Rs. 399\n\t\t\t\t\n\t\t\t100% Premium Cotton. Superior Fabric and fit. Proudly Made in India.\n100% Premium Cotton. Superior Fabric and fit. Proudly Made in India.",
            "category": "Clothing ",
            "price": 799.0,
            "created_at": "2025-04-06T08:54:25.380831Z"
        },
        {
            "id": 10871,
            "name": "Crunchy Fashion Resin Bangle Set",
            "product_image": "http://img6a.flixcart.com/image/bangle-bracelet-armlet/a/2/k/cfb0107-1-8-crunchy-fashion-1-original-imadsp9p2zgvyebh.jpeg",
            "description": "Crunchy Fashion Resin Bangle Set - Buy Crunchy Fashion Resin Bangle Set only for Rs. 0.0 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
            "category": "Jewellery ",
            "price": 1250.0,
            "created_at": "2025-04-06T08:56:29.424018Z"
        },
        {
            "id": 9507,
            "name": "Goddess Women Women's Solid, Self Design Casual Shirt",
            "product_image": "http://img5a.flixcart.com/image/shirt/g/f/a/w14-1004-goddess-women-xxl-original-imae33sqzh5jnemu.jpeg",
            "description": "Goddess Women Women's Solid, Self Design Casual Shirt\n                         Price: Rs. 909\n\t\t\t\t\n\t\t\tCelebration season is shopping season! Start your new year with some fashionable outfits and set the trend that stays! Goddess Women brings you this great looking red shirt style top which is truly a must have in your casual wear wardrobe. It is made in best quality georgette fabric material and hence is supremely comfortable and skin friendly. Featuring a funky look and sleeveless pattern, this red top is a total stunner. Combine it with denim or chinos and get ready to rock your casual outings.\nPowered by 99yrs\nCelebration season is shopping season! Start your new year with some fashionable outfits and set the trend that stays! Goddess Women brings you this great looking red shirt style top which is truly a must have in your casual wear wardrobe. It is made in best quality georgette fabric material and hence is supremely comfortable and skin friendly. Featuring a funky look and sleeveless pattern, this red top is a total stunner. Combine it with denim or chinos and get ready to rock your casual outings.\nPowered by 99yrs",
            "category": "Clothing ",
            "price": 1299.0,
            "created_at": "2025-04-06T08:55:51.794763Z"
        },
        {
            "id": 2303,
            "name": "Prithish Shiva Statue Ceramic Mug",
            "product_image": "http://img5a.flixcart.com/image/mug/n/v/9/1-prithish-shiva-statue-1100x1100-imaebk9bzfygqyu2.jpeg",
            "description": "Prithish Shiva Statue Ceramic Mug (330 ml)\n                         Price: Rs. 175\n\t\t\t\t\n\t\t\t\"Get talking with your coffee! Our wide selection of cute and catchy designs means you're sure to find the quote that says what it is, the way it is. And if these mugs bring on the smiles, don't forget to share them. Mugs like these make great gifts! Each mug is beautifully designed with quality ink and attractive graphics, perfect for all around enjoyment.\" \"Express yourself! Our distinctive coffee mugs give you the freedom to broadcast your own special message, from holiday cheer to your love of cupcakes. These affordable mugs are also perfect for gifting, so you can show others just how well you know them. Break out the mugs, and bring on the laughs! Happy sipping!\n\"Get talking with your coffee! Our wide selection of cute and catchy designs means you're sure to find the quote that says what it is, the way it is. And if these mugs bring on the smiles, don't forget to share them. Mugs like these make great gifts! Each mug is beautifully designed with quality ink and attractive graphics, perfect for all around enjoyment.\" \"Express yourself! Our distinctive coffee mugs give you the freedom to broadcast your own special message, from holiday cheer to your love of cupcakes. These affordable mugs are also perfect for gifting, so you can show others just how well you know them. Break out the mugs, and bring on the laughs! Happy sipping!",
            "category": "Kitchen & Dining ",
            "price": 499.0,
            "created_at": "2025-04-06T08:53:00.631215Z"
        },
        {
            "id": 8464,
            "name": "ONLY Women's Printed Casual Shirt",
            "product_image": "http://img5a.flixcart.com/image/shirt/f/p/z/394150-only-40-original-imaebxzh5mgfu4nu.jpeg",
            "description": "ONLY Women's Printed Casual Shirt\n                         Price: Rs. 453\n\t\t\t\t\n\t\t\tOff-white woven shirt with a multicoloured print throughout, has a V-neck, sleeveless with binding along the armholes, full button placket on the front, panel with gathers on either shoulder that extends till the back, gathers on the back below the yoke, curved hem with the back longer than the front. This casual shirt from ONLY is perfect for an outing with friends on a sunny day. Team it with a pair of jeans and ballerinas for a modish look.\nOff-white woven shirt with a multicoloured print throughout, has a V-neck, sleeveless with binding along the armholes, full button placket on the front, panel with gathers on either shoulder that extends till the back, gathers on the back below the yoke, curved hem with the back longer than the front. This casual shirt from ONLY is perfect for an outing with friends on a sunny day. Team it with a pair of jeans and ballerinas for a modish look.",
            "category": "Clothing ",
            "price": 1295.0,
            "created_at": "2025-04-06T08:55:11.535437Z"
        },
        {
            "id": 11045,
            "name": "Klaur Melbourne Canvas Shoes",
            "product_image": "http://img5a.flixcart.com/image/shoe/a/k/z/blue-603-135-klaur-melbourne-35-original-imaegpf53cttu8nt.jpeg",
            "description": "Key Features of Klaur Melbourne Canvas Shoes Material: Fabric Occasion: Casual Color: Blue Heel Height: 0,Specifications of Klaur Melbourne Canvas Shoes General Occasion Casual Ideal For Women Shoe Details Heel Height 0 inch Outer Material Fabric Color Blue",
            "category": "Footwear ",
            "price": 1199.0,
            "created_at": "2025-04-06T08:56:37.996674Z"
        },
        {
            "id": 1718,
            "name": "I Am For You Casual Full Sleeve Solid Women's Top",
            "product_image": "http://img6a.flixcart.com/image/top/n/5/g/imfu-632-i-am-for-you-m-original-imaduaa5kjf9zkdh.jpeg",
            "description": "I Am For You Casual Full Sleeve Solid Women's Top - Buy Blue I Am For You Casual Full Sleeve Solid Women's Top For Only Rs. 999 Online in India. Shop Online For Apparels. Huge Collection of Branded Clothes Only at Flipkart.com",
            "category": "Clothing ",
            "price": 999.0,
            "created_at": "2025-04-06T08:52:54.576858Z"
        },
        {
            "id": 857,
            "name": "Avon Fairness Exfoliation Face Wash and Anti-marks Cream",
            "product_image": "http://img6a.flixcart.com/image/combo-kit/s/f/y/fsc-19264-avon-fairness-exfoliation-face-wash-and-anti-marks-original-imaehgpyku9bsn8d.jpeg",
            "description": "Specifications of Avon Fairness Exfoliation Face Wash and Anti-marks Cream (Set of) Combo Set Details Ideal For Women Combo Set Contents 1 Face wash, 1 Anti-marks Cream Organic Yes",
            "category": "Beauty and Personal Care ",
            "price": 314.0,
            "created_at": "2025-04-06T08:52:40.492445Z"
        },
        {
            "id": 2053,
            "name": "Arsalan 10.5 inch Glass Hookah",
            "product_image": "http://img5a.flixcart.com/image/hookah/5/f/t/ebnh73-arsalan-1100x1100-imae57fkdehgsqvp.jpeg",
            "description": "Buy Arsalan 10.5 inch Glass Hookah for Rs.349 online. Arsalan 10.5 inch Glass Hookah at best prices with FREE shipping & cash on delivery. Only Genuine Products. 30 Day Replacement Guarantee.",
            "category": "Home Decor & Festive Needs ",
            "price": 999.0,
            "created_at": "2025-04-06T08:52:58.314926Z"
        },
        {
            "id": 6834,
            "name": "Bagsy Malone Hand-Held Bag",
            "product_image": "http://img5a.flixcart.com/image/hand-messenger-bag/f/f/z/bmto5c-bagsy-malone-hand-held-bag-tenor-handle-1000x1000-imae8mqybczpcfhh.jpeg",
            "description": "Flipkart.com: Buy Bagsy Malone Hand-Held Bag for Rs. 1099 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
            "category": "Bags, Wallets & Belts ",
            "price": 1699.0,
            "created_at": "2025-04-06T08:54:25.179204Z"
        },
        {
            "id": 1074,
            "name": "SKY TRENDS GIFT Square Wood Coaster",
            "product_image": "http://img5a.flixcart.com/image/coaster/j/q/d/stg477-stg477-sky-trends-gift-1100x1100-imaejqrwshmh2zsc.jpeg",
            "description": "Key Features of SKY TRENDS GIFT Square Wood Coaster Pattern: Self Design Coaster Width: 9.5 cm,Specifications of SKY TRENDS GIFT Square Wood Coaster (Multicolor, Pack of 1) General Brand SKY TRENDS GIFT Shape Square Type Coaster Design Code STG477 Material Wood Pattern Self Design Style Code STG477 Color Multicolor Dimensions Weight 100 g Coaster Width 9.5 cm Coaster Length 9.5 cm In the Box Number of Contents in Sales Package Pack of 1 Sales Package 1 Coaster",
            "category": "Home Furnishing ",
            "price": 299.0,
            "created_at": "2025-04-06T08:52:42.764724Z"
        },
        {
            "id": 4155,
            "name": "Hotpiper Designer Yellow Gold Plated Acrylic Necklace",
            "product_image": "http://img6a.flixcart.com/image/necklace-chain/m/j/v/9260327-hotpiper-necklace-original-imaecqrb4merxf79.jpeg",
            "description": "Hotpiper Designer Yellow Gold Plated Acrylic Necklace - Buy Hotpiper Designer Yellow Gold Plated Acrylic Necklace only for Rs. 475 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
            "category": "Jewellery ",
            "price": 1360.0,
            "created_at": "2025-04-06T08:53:28.492252Z"
        },
        {
            "id": 10811,
            "name": "Textile India Paisley Double Quilts & Comforters Green",
            "product_image": "http://img5a.flixcart.com/image/blanket/f/g/3/dli4ddv6022-tradition-india-beautiful-hand-block-printed-cotton-1100x1100-imae2c6ankhdquf2.jpeg",
            "description": "Buy Textile India Paisley Double Quilts & Comforters Green at Rs. 3999 at Flipkart.com. Only Genuine Products. Free Shipping. Cash On Delivery!",
            "category": "Home Furnishing ",
            "price": 6599.0,
            "created_at": "2025-04-06T08:56:26.435577Z"
        },
        {
            "id": 9260,
            "name": "Pearl Paradise Designer Collection - (T). Yellow Gold  K Pearl Alloy Drop Earring",
            "product_image": "http://img6a.flixcart.com/image/earring/q/w/c/102096-pearl-paradise-drop-earring-original-imae77vtz4gcvaxx.jpeg",
            "description": "Pearl Paradise Designer Collection - (T). Yellow Gold  K Pearl Alloy Drop Earring - Buy Pearl Paradise Designer Collection - (T). Yellow Gold  K Pearl Alloy Drop Earring only for Rs. 999 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
            "category": "Jewellery ",
            "price": 2250.0,
            "created_at": "2025-04-06T08:55:45.196133Z"
        },
        {
            "id": 3990,
            "name": "Galz4ever Blue Seed Bead Alloy Necklace",
            "product_image": "http://img5a.flixcart.com/image/necklace-chain/h/r/g/226-galz4ever-necklace-original-imaeagb2yavuwtun.jpeg",
            "description": "Galz4ever Blue Seed Bead Alloy Necklace - Buy Galz4ever Blue Seed Bead Alloy Necklace only for Rs. 229 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
            "category": "Jewellery ",
            "price": 249.0,
            "created_at": "2025-04-06T08:53:25.787239Z"
        },
        {
            "id": 5736,
            "name": "Niremo Sanguine Rudiness Women Wedges",
            "product_image": "http://img5a.flixcart.com/image/sandal/h/v/7/sea-green-4228-niremo-41-original-imae6cfpap6zfqzg.jpeg",
            "description": "Flipkart.com: Buy Niremo Sanguine Rudiness Women Wedges only for Rs. 499 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
            "category": "Footwear ",
            "price": 2570.0,
            "created_at": "2025-04-06T08:53:59.789938Z"
        },
        {
            "id": 2903,
            "name": "Trove Plastic Necklace",
            "product_image": "http://img6a.flixcart.com/image/necklace-chain/z/3/2/trn1024-trove-necklace-1100x1100-imae7vafbp4xfxzk.jpeg",
            "description": "Trove Plastic Necklace - Buy Trove Plastic Necklace only for Rs. 319 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
            "category": "Jewellery ",
            "price": 650.0,
            "created_at": "2025-04-06T08:53:07.893079Z"
        },
        {
            "id": 3842,
            "name": "Fashion Jewellery Mother of Pearl Necklace",
            "product_image": "http://img6a.flixcart.com/image/necklace-chain/h/n/h/nfju089uk-fashion-jewellery-necklace-1100x1100-imaean9dn2svgsak.jpeg",
            "description": "Fashion Jewellery Mother of Pearl Necklace - Buy Fashion Jewellery Mother of Pearl Necklace only for Rs. 239 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
            "category": "Jewellery ",
            "price": 699.0,
            "created_at": "2025-04-06T08:53:23.294111Z"
        },
        {
            "id": 8904,
            "name": "BlueStone The Boulevard Yellow Gold Diamond 18 K Ring",
            "product_image": "http://img6a.flixcart.com/image/ring/d/h/4/2960-14-20-bluestone-ring-1100x1100-imae9kc6b4hpfshq.jpeg",
            "description": "BlueStone The Boulevard Yellow Gold Diamond 18 K Ring - Buy BlueStone The Boulevard Yellow Gold Diamond 18 K Ring only for Rs. 32812 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
            "category": "Jewellery ",
            "price": 45903.0,
            "created_at": "2025-04-06T08:55:23.975263Z"
        },
        {
            "id": 1728,
            "name": "Harpa Casual Sleeveless Printed Women's Top",
            "product_image": "http://img6a.flixcart.com/image/top/z/7/8/1-1-gr2134red-harpa-s-original-imae89ch5wy4zaty.jpeg",
            "description": "Harpa Casual Sleeveless Printed Women's Top - Buy Red Harpa Casual Sleeveless Printed Women's Top For Only Rs. 899 Online in India. Shop Online For Apparels. Huge Collection of Branded Clothes Only at Flipkart.com",
            "category": "Clothing ",
            "price": 899.0,
            "created_at": "2025-04-06T08:52:54.666968Z"
        },
        {
            "id": 5316,
            "name": "HH Aviator Sunglasses",
            "product_image": "http://img6a.flixcart.com/image/sunglass/z/5/p/avtrslvr-hh-medium-original-imaejg2yashu9mmm.jpeg",
            "description": "Key Features of HH Aviator Sunglasses Face Type - Square Frame Type - Full-frame,Specifications of HH Aviator Sunglasses General Style Aviator Style Code AVTRSLVR Ideal For Men, Boys Usage Style Dimensions Size This product is sold as Medium by the Brand Features & Functions Lens Color Silver Lens Material CR 39 Frame material Stainless steel Frame Type Full-frame Frame Color Silver",
            "category": "Sunglasses ",
            "price": 1199.0,
            "created_at": "2025-04-06T08:53:51.660986Z"
        },
        {
            "id": 4784,
            "name": "Engage Tease and Tease Combo Set",
            "product_image": "http://img5a.flixcart.com/image/combo-gift-set/e/q/q/engage-1100x1100-imae686pjst7hfff.jpeg",
            "description": "Flipkart.com: Buy Engage Tease and Tease Combo Set online only for Rs. 350 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
            "category": "Beauty and Personal Care ",
            "price": 360.0,
            "created_at": "2025-04-06T08:53:40.966321Z"
        },
        {
            "id": 5089,
            "name": "Majik Styling Decoration Hair Clip",
            "product_image": "http://img5a.flixcart.com/image/hair-accessory/n/h/f/11021-3-majik-wedding-accessories-1100x1100-imaejpm9fgygkgyv.jpeg",
            "description": "Key Features of Majik Styling Decoration Hair Clip Pack of: 3,Majik Styling Decoration Hair Clip (Multicolor) Price: Rs. 199 Unique set of 3 flowers used for hair styling and as hair accessories. Can also be used for embellishment of headbands, clothes, scarves and kids accessories. artificial flowers ,easy to use ,Reusable ,Unique ,Gender: Women , girls, baby ,Gives Fashinable look ,Used in Hairstyling.,Specifications of Majik Styling Decoration Hair Clip (Multicolor) In the Box Number of Contents in Sales Package Pack of 3",
            "category": "Beauty and Personal Care ",
            "price": 199.0,
            "created_at": "2025-04-06T08:53:47.909117Z"
        },
        {
            "id": 6948,
            "name": "Buynow Glass_53 Tempered Glass for Lenovo K5 Note",
            "product_image": "http://img6a.flixcart.com/image/screen-guard/tempered-glass/h/z/m/buynow-glass-53-1100x1100-imaegrytdmnecdhg.jpeg",
            "description": "Key Features of Buynow Glass_53 Tempered Glass for Lenovo K5 Note Perfect Fit Scratch Resistant Protection From Damage Impact Resistant,Buynow Glass_53 Tempered Glass for Lenovo K5 Note Price: Rs. 279 Buynow Glass Screen Protector has been specially made with scratch resistant material and rounded edges for a more precise fit. Due to the 0.23-0.33mm thickness and surface hardness of 89H the Glass Screen Protector provides premium protection and no lose in touch screen sensitivity. Surface hardness : 89H : Three times stronger than regular PET film. Even sharp objects such as knives and keys will not scratch the Glass Screen Protector. Oleo phobic Coating : The Glass Screen Protector has an oleo phobic coating that prevents fingerprints and other contaminants and makes the film easy to clean. Anti-Shatter Film : If broken, the Glass Screen Protector cracks into small pieces that are held within the film. They are not sharp, making it safer than other glass products. CAUTION *When removing for re-use, the adhesive properties might wear off to an extent where the screen protector will not adhere to the device. It is not recommended to reuse the Glass Screen Protector once it's been applied. *Using excessive force when installing or removing the screen protector may damage the product,Specifications of Buynow Glass_53 Tempered Glass for Lenovo K5 Note General Brand Buynow Designed For Lenovo K5 Note Type Tempered Glass Model ID Glass_53 Color Transparent Features Air-bubble Proof, Anti Glare, Anti Reflection, Scratch Resistant Warranty Covered in Warranty NA Warranty Summary NA Warranty Service Type NA Not Covered in Warranty NA Features Number of Layers 2 Removable Yes In the Box Number of Contents in Sales Package Pack of 1 Sales Package 1 Tempered Glass, Cleaning Cloth",
            "category": "Mobiles & Accessories ",
            "price": 499.0,
            "created_at": "2025-04-06T08:54:27.711303Z"
        },
        {
            "id": 4794,
            "name": "Klassik Girly Random Art Cloth Pencil Box",
            "product_image": "http://img6a.flixcart.com/image/pencil-box/5/c/h/klassik-rounprin225-1100x1100-imae82jhzj378fkq.jpeg",
            "description": "Flipkart.com: Buy Klassik Girly Random Art Cloth Pencil Box only for Rs. 390 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
            "category": "Toys & School Supplies ",
            "price": 449.0,
            "created_at": "2025-04-06T08:53:41.185826Z"
        },
        {
            "id": 10586,
            "name": "Wear Your Opinion Full Sleeve Graphic Print Men's Sweatshirt",
            "product_image": "http://img6a.flixcart.com/image/sweatshirt/m/7/e/wyo000196hdy-wear-your-opinion-m-original-imaefwt5zczmjga3.jpeg",
            "description": "Wear Your Opinion Full Sleeve Graphic Print Men's Sweatshirt\n                         Price: Rs. 1,099\n\t\t\t\t\n\t\t\tSize Guide Caution: Hoodies are one size larger than Normal T-shirt Size.\nFor Eg: If you wear \"L\" Size than select \"M\" Size Hoodies\nSize Guide Caution: Hoodies are one size larger than Normal T-shirt Size.\nFor Eg: If you wear \"L\" Size than select \"M\" Size Hoodies",
            "category": "Clothing ",
            "price": 1199.0,
            "created_at": "2025-04-06T08:56:19.421134Z"
        },
        {
            "id": 8676,
            "name": "BlueStone The Aether Gold Diamond 18 K Ring",
            "product_image": "http://img6a.flixcart.com/image/ring/g/9/n/672-15-bluestone-ring-original-imadq9wptkfkndfm.jpeg",
            "description": "BlueStone The Aether Gold Diamond 18 K Ring - Buy BlueStone The Aether Gold Diamond 18 K Ring only for Rs. 0.0 from Flipkart.com. Only Genuine Products. 30 Day Replacement Guarantee. Free Shipping. Cash On Delivery!",
            "category": "Jewellery ",
            "price": 36635.0,
            "created_at": "2025-04-06T08:55:16.953150Z"
        }
    ]
}
```

2 
```text
Endpoints: GET http://127.0.0.1:8000/productdetail/1/
Description: Returns product detail 
```
Response: 
```json
{
    "product": {
        "id": 1,
        "name": "Alisha Solid Women's Cycling Shorts",
        "product_image": "http://img5a.flixcart.com/image/short/t/p/b/altht-3p-2-alisha-38-original-imaeh2d53jbrxnam.jpeg",
        "description": "Key Features of Alisha Solid Women's Cycling Shorts Cotton Lycra Black, White, White,Specifications of Alisha Solid Women's Cycling Shorts Shorts Details Number of Contents in Sales Package Pack of 3 Fabric Cotton Lycra Type Cycling Shorts General Details Pattern Solid Ideal For Women's Fabric Care Gentle Machine Wash in Lukewarm Water, Do Not Bleach Additional Details Style Code ALTHT_3P_2 In the Box 3 shorts",
        "category": "Clothing ",
        "price": 999.0,
        "created_at": "2025-04-06T08:52:30.331142Z"
    },
    "similar_products": [
        {
            "id": 642,
            "name": "Mynte Solid Women's Cycling Shorts, Gym Shorts, Swim Shorts",
            "product_image": "http://img6a.flixcart.com/image/short/g/r/u/cswiw-cmb4-shr-98-97-96-101-mynte-l-original-imaeeg4kgxdcw63e.jpeg",
            "description": "Key Features of Mynte Solid Women's Cycling Shorts, Gym Shorts, Swim Shorts Great for running jogging gym working out Mid Rise Waist Machine Washable Comfortable Material Great for running jogging gym working out,Mynte Solid Women's Cycling Shorts, Gym Shorts, Swim Shorts Price: Rs. 849 Mynte Sports Shorts allow for maximum movement thanks to the skin tight design and Dry Cell fabric which aims to to keep you comfortable and dry meaning you can workout for longer.  ,Specifications of Mynte Solid Women's Cycling Shorts, Gym Shorts, Swim Shorts Shorts Details Number of Contents in Sales Package Pack of 4 Fabric Polyamide, Nylon Type Cycling Shorts, Gym Shorts, Swim Shorts General Details Pattern Solid Occasion Casual, Sports, Party, Lounge Wear, Beach Wear Ideal For Women's In the Box 4 Shorts Additional Details Other Details Photo May Differ From Actual Item in Terms of Color Due to the Lighting During Photo Shooting or the Monitor's Display Style Code CSWIW-CMB4-SHR-98-97-96-101 Fabric Care Wash Like Colours separately on low temparature, Use only non-chlorine bleach when needed, Do not dry clean, Do not iron",
            "category": "Clothing ",
            "price": 1995.0,
            "created_at": "2025-04-06T08:52:38.074713Z"
        },
        {
            "id": 7135,
            "name": "Ashdan Solid Women's Basic Shorts",
            "product_image": "http://img5a.flixcart.com/image/short/d/9/j/fs902tidal-ashdan-34-original-imaeg6mshkdjdgaz.jpeg",
            "description": "Key Features of Ashdan Solid Women's Basic Shorts 97% Cotton, 3% Elastane, Comfort Shorts All Season Wear,Ashdan Solid Women's Basic Shorts Price: Rs. 549 Ashdan Woven Trendy Womens Shorts Is A Composition of Soft Cotton Lycra Fabric Giving An Overall Comfortable Wearer Experience,Specifications of Ashdan Solid Women's Basic Shorts Shorts Details Closure Button Number of Contents in Sales Package Pack of 1 Fabric Cotton-Lycra Type Basic Shorts Pockets 2 Side Pockets, 2 Back Pockets General Details Pattern Solid Occasion Casual Ideal For Women's In the Box 1 Womens Shorts Additional Details Other Details Woven Bottom Style Code FS902TIDAL Fabric Care Machine Wash Cold, Do Not Dry Clean, Warm Iron, Do Not Tumble Dry, Use Mild Detergent",
            "category": "Clothing ",
            "price": 999.0,
            "created_at": "2025-04-06T08:54:32.483549Z"
        },
        {
            "id": 897,
            "name": "Vitamins Solid Baby Girl's Basic Shorts",
            "product_image": "http://img5a.flixcart.com/image/short/u/w/y/05tg-870-26-n-blue-vitamins-5-6-years-original-imaehzknftxq9hjh.jpeg",
            "description": "Key Features of Vitamins Solid Baby Girl's Basic Shorts Cotton N.BLUE,Specifications of Vitamins Solid Baby Girl's Basic Shorts Shorts Details Number of Contents in Sales Package Pack of 1 Fabric Cotton Type Basic Shorts General Details Pattern Solid Occasion Casual Ideal For Baby Girl's In the Box 1 SHORT Additional Details Style Code 05TG-870-24-N.BLUE Fabric Care Gentle Machine Wash in Lukewarm Water, Do Not Bleach",
            "category": "Vitamins Solid Baby Girl's Basic Shorts",
            "price": 529.0,
            "created_at": "2025-04-06T08:52:40.962946Z"
        },
        {
            "id": 1782,
            "name": "Vero Moda Solid Women's Basic Shorts",
            "product_image": "http://img6a.flixcart.com/image/short/f/v/m/1743886-ivy-green-vero-moda-s-original-imaehu2nxrs84hy4.jpeg",
            "description": "Specifications of Vero Moda Solid Women's Basic Shorts Shorts Details Fabric Viscose Type Basic Shorts General Details Pattern Solid Ideal For Women's In the Box 1 Basic Shorts Additional Details Style Code 1743886-Ivy Green",
            "category": "Clothing ",
            "price": 1995.0,
            "created_at": "2025-04-06T08:52:55.298357Z"
        },
        {
            "id": 9849,
            "name": "SMART DENIM Solid Women's White Denim Shorts",
            "product_image": "http://img6a.flixcart.com/image/short/w/3/5/sdsh-52-b-smart-denim-m-original-imaegdxrvzfgzngr.jpeg",
            "description": "Key Features of SMART DENIM Solid Women's White Denim Shorts Cotton WHITE,Specifications of SMART DENIM Solid Women's White Denim Shorts Shorts Details Fabric Cotton Type Denim Shorts General Details Pattern Solid Ideal For Women's Additional Details Style Code SDSH-52 B In the Box 1 Denim Shorts",
            "category": "SMART DENIM Solid Women's White Denim Shorts",
            "price": 800.0,
            "created_at": "2025-04-06T08:56:01.898043Z"
        },
        {
            "id": 903,
            "name": "Vitamins Embroidered Baby Girl's Denim Shorts",
            "product_image": "http://img6a.flixcart.com/image/short/h/8/p/05tg-166-20-raw-rani-vitamins-2-3-years-original-imaehht4wbcykzut.jpeg",
            "description": "Specifications of Vitamins Embroidered Baby Girl's Denim Shorts General Details Ideal For Baby Girl's Occasion Casual Pattern Embroidered Shorts Details Type Denim Shorts Fabric Cotton Pockets Mitered Patch Pocket on Thigh Number of Contents in Sales Package Pack of 1 Fabric Care Gentle Machine Wash in Lukewarm Water, Do Not Bleach Additional Details Style Code 05TG-166-24-RAW RANI In the Box 1 SHORTS",
            "category": "Baby Care ",
            "price": 949.0,
            "created_at": "2025-04-06T08:52:41.010882Z"
        },
        {
            "id": 1198,
            "name": "FS Mini Klub Printed Girl's Denim Shorts",
            "product_image": "http://img5a.flixcart.com/image/short/e/f/t/88kgbsb0410-lt-wash-fs-mini-klub-4-5-years-original-imaegjgktv75w6yy.jpeg",
            "description": "Specifications of FS Mini Klub Printed Girl's Denim Shorts Shorts Details Number of Contents in Sales Package Pack of 1 Fabric Cotton Type Denim Shorts General Details Pattern Printed Occasion Casual Ideal For Girl's In the Box 1 Denim Shorts Additional Details Style Code 88KGBSB0410 LT WASH",
            "category": "Clothing ",
            "price": 1149.0,
            "created_at": "2025-04-06T08:52:43.871786Z"
        },
        {
            "id": 7131,
            "name": "Lilliput Solid Boy's Bermuda Shorts",
            "product_image": "http://img6a.flixcart.com/image/short/n/g/g/110001920-lilliput-3-4-years-original-imaehhp3ghucsv3g.jpeg",
            "description": "Specifications of Lilliput Solid Boy's Bermuda Shorts Shorts Details Number of Contents in Sales Package Pack of 1 Fabric Cotton Type Bermuda Shorts General Details Pattern Solid Ideal For Boy's Occasion Casual Fabric Care Machine Cold Wash.Wash Separately or With Like Colors.Gentle Cycle .was inside out, Use Only Non Chlorine Bleach When Needed. Tumble Dry Low. . Low Iron When Needed. Additional Details Style Code 110001920 In the Box 1 Bermuda Shorts",
            "category": "Clothing ",
            "price": 1545.0,
            "created_at": "2025-04-06T08:54:32.422822Z"
        },
        {
            "id": 1958,
            "name": "Only Printed Women's Purple Basic Shorts",
            "product_image": "http://img6a.flixcart.com/image/short/y/q/8/1574066-magenta-buzz-only-xl-original-imaejxjfkfkfvxay.jpeg",
            "description": "Key Features of Only Printed Women's Purple Basic Shorts 100%Cotton Purple,Only Printed Women's Purple Basic Shorts Price: Rs. 1,295 Only Women's Casual Short,Specifications of Only Printed Women's Purple Basic Shorts Shorts Details Number of Contents in Sales Package Pack of 1 Fabric 100%Cotton Type Basic Shorts General Details Pattern Printed Occasion Casual Ideal For Women's In the Box 1 Short Additional Details Style Code 1574066-Magenta Buzz",
            "category": "Clothing ",
            "price": 1295.0,
            "created_at": "2025-04-06T08:52:57.322317Z"
        },
        {
            "id": 1792,
            "name": "Lavennder Printed Women's Basic Shorts",
            "product_image": "http://img5a.flixcart.com/image/short/c/z/b/lw-5148-lavennder-xxl-original-imae9a77eafv6zgg.jpeg",
            "description": "Key Features of Lavennder Printed Women's Basic Shorts cotton SKY BLUE,Specifications of Lavennder Printed Women's Basic Shorts General Details Ideal For Women's Pattern Printed Shorts Details Type Basic Shorts Fabric cotton Additional Details Style Code LW-5148 In the Box 1SHORTS",
            "category": "Clothing ",
            "price": 1199.0,
            "created_at": "2025-04-06T08:52:55.479950Z"
        }
    ]
}
```

How it works
```text
1. Data Preprocessing: The product data is processed, and relevant information (such as product name, description, and features) is extracted.

2. TF-IDF Vectorization: The textual data (such as product descriptions) is transformed into numerical features using TF-IDF Vectorizer.

3. Cosine Similarity: The cosine similarity algorithm compares the similarity between products based on their TF-IDF vectors, and recommendations are generated based on the most similar products.

4. React Frontend: The frontend allows users to interact with the recommendation system by inputting product details, and it fetches the recommendations from the Django API.
```

## 🚀 Contributing
```text
Feel free to fork the repository, make changes, and submit pull requests. Any contributions are welcome!
```