let arr = [
    ["restaurants_menu/img/chicken/butter.webp", "Butter Chicken", "400", "Straight from a Punjabi kitchen, butter chicken has been an instant hit through the years. Marinated overnight, the chicken is roasted and cooked in tomato puree, cream and masalas. Enjoy the classic creaminess of the dish with this recipe.", "Chicken"],
    ["restaurants_menu/img/chicken/biryani.webp", "Chicken Dum Biryani", "350", "A sumptuous chicken biryani cooked with such precision that none of the flavors are allowed to change color. 'Dum' is a slow cooking method brought in by the Mughals. Food is cooked in a 'handi', the lid sealed with flour and on low heat.", "Chicken"],
    ["restaurants_menu/img/chicken/roasted.jpg", "Roasted Chicken Masala", "500", "Having a party at home with some bonfire? Here is the perfect snack to begin with! Roasted chicken recipe has dry yet juicy chicken marinated in a host of spicy masalas and roasted to perfection.", "Chicken"],
    ["restaurants_menu/img/chicken/chicken-65.webp", "Spicy Chicken 65", "300", "A classic South Indian starter, chicken 65 is the sort of dish that can set your mouth on fire, make your heart beat faster and kick your taste buds to the limit! A deep-fried,", "Chicken"],
    ["restaurants_menu/img/chicken/lemon-chicken.webp", "Punjabi Lemon Chicken", "250", "A tantalising chicken recipe with a tangy kick of lemon! Punjabi lemon chicken has succulent chicken thighs cooked in a pool of spices and citrusy juices of orange, lime and sugarcane", "Chicken"],
    ["restaurants_menu/img/chicken/kfc.jpg", " KFC Style Chicken Wings", "200", "When we talk of chicken wings, the first thing that comes to our mind is the all-time favourite KFC hot wings. Dipping that piping hot KFC fried chicken in your favourite smoky sauce is a heavenly experience! Here is how you can make it at home. ", "Chicken"],
    ["restaurants_menu/img/paneer/biryani.webp", "Paneer Makhni Biryani", "200", "Simple yet stylish. Fried cottage cheese cubes doused in a creamy gravy, layered with rice and cooked 'dum' style. Paneer makhni biryani is a perfect biryani recipe for vegetarians and a paneer lover's delight!", "Paneer"],
    ["restaurants_menu/img/paneer/paneer-butter-masala.jpg", "Paneer Butter Masala", "300", "A delicious and rich butter based paneer dish, cooked in a creamy, milk gravy with the goodness of tomato and onion. Perfect for dinner parties, this paneer recipe is a very popular one with an aroma ", "Paneer"],
    ["restaurants_menu/img/paneer/paneer-popcorn.webp", "Paneer Popcorn", "350", "Paneer popcorn is the vegetarian variation of classic chicken popcorn. You don't need to do a lot of preparation to make paneer popcorn, all you need to do is season the paneer, coat it in batter and fry it!", "Paneer"],
    ["restaurants_menu/img/paneer/chilli-paneer.webp", "Honey Chilli Paneer", "400", "Honey chilli paneer is a delicious variation of our favourite honey chilli potato. This dish soothes the foodie heart with its sweet and spicy flavours.", "Paneer"],
    ["restaurants_menu/img/paneer/tawa-paneer.webp", "Paneer Kadhai Masala", "500", "This fiery dish often ordered at restaurants can now be re-created at home. Paneer, spices, tomatoes, and chillies tossed together and served with ajwain rotis. This dish boasts of a myriad of spices and healthy ajwain rotis.", "Paneer"],
    ["restaurants_menu/img/veg/chole_600x350_81443681447.webp", "Masala Channa", "100", "An all-season favourite for north Indians and a great source of protein, this bowlful of mouth watering masala channa is topped with tadka aloo. You can either pair it with pooris, chapati or even steamed rice. ", "veg"],
    ["restaurants_menu/img/veg/kofta.jpg", "Mushroom Kofta", "150", "This recipe is a crowd pleaser. Plump mushrooms stuffed with spinach and paneer, and then dipped in a tangy tomato gravy. The tomato gravy is a little thick, and therefore you  can pair it  with chapatis or even parathas. ", "veg"],
    ["restaurants_menu/img/veg/gobhi-aloo.png", "Gobhi Aloo", "200", "The staple recipe of an Indian household, Gobhi Aloo is an easy and quick dish to make for lunch or dinner, which makes it a favourite of every cook.", "veg"],
    ["restaurants_menu/img/veg/bombay-style-aloo.webp", "Bombay Style Aloo", "250", "This fiery and masaledar Bombay-style Aloo recipe is a must-try when you are looking for something super delicious and easy to make.", "veg"],
    ["restaurants_menu/img/veg/carrot.webp", "Carrot Salad with Grape Dressing", "300", "A lovely salad with shreds of carrots topped with a sweet black grape dressing. Quick and easy to make, this vegetarian recipe can up the nutritional value of your meal to a great extent.", "veg"],
    ["restaurants_menu/img/veg/stuffed-masala-mushrooms.jpg", "Stuffed Masala Mushrooms", "400", "Get your vitamin D fix with this recipe! Corn and mushroom mixture stuffed into mushroom caps, topped with cheese and baked to perfection. A quick party starter!", "veg"],
    ["restaurants_menu/img/cake/rosette-cake-with-hearts.webp", "Rosette Cake with Hearts", "500", "When in love, express it with a gift that's as charming as your beloved. This heavenly Half Kg Valentine Strawberry Cake in heart shape is just what you need to say all things love. Layers of pretty pink cream in rosette with chocolate thins of heart, sure to melt your darling's heart. Key attributes :", "cake"],
    ["restaurants_menu/img/cake/pink-roses-chocolate-cake.webp", "Pink Roses Chocolate Cake", "500", "The elegance of pink is undeniable, especially when is takes the spotlight on the party table in the form of the beautiful Half Kg Pink Roses Chocolate Cake. Melt-in-mouth roses with deliciousness of chocolate ", "cake"],
    ["restaurants_menu/img/cake/90-not-out-cricket-field-birthday-.webp", "90 Not Out Cricket Field Birthday Fondant Cake", "1000", "The 90-not-out fever is on! Pay an ode to all the nail-biting cricket overs & matches with this delicious & spongy1 Kg 90 Not Out Cricket Field Birthday Fondant Cake. Available in Chocolate,Truffle,Black Forest ,Pineapple & Butterscotch flavors,", "cake"],
    ["restaurants_menu/img/cake/valentine-heart.jpg", "Valentine Heart Gift Cake", "1200", "Ask your significant other to be your special one on V'Day with this undeniably tasty treat. Get their uninterrupted attention and affection with this truly spectacular fondant cake that comes in customized flavors.", "cake"],

    ["restaurants_menu/img/juice/cherry-juice.webp", "Tart Cherry Juice", "100", "Tart cherries contain anthocyanins, red and purple plant pigments that offer strong antioxidant activity that reduces inflammation. In animal studies published in the Journal of Medicinal Food, rats were fed a high fat diet ", "juice"],
    ["restaurants_menu/img/juice/cranberry-juice.webp", "Cranberry Juice", "130", "Another juice that's rich in anthocyanins (you can tell by the red color) is cranberry. Registered nutritionist Jay Cowin, director of formulations for ASYSTEM calls it one of the healthiest juices you can drink. Loaded with cell-protecting antioxidants, including vitamins C and E, ", "juice"],
    ["restaurants_menu/img/juice/beet-juice-make-juice-full-meal.webp", "Beetroot Juice", "150", "If you have high blood pressure, ask your doctor about drinking beetroot juice, which contains nitrates that have been proven to improve blood pressure by relaxing blood vessels. Beetroot juice is low in sugar content in comparison to other juices and is also an amazing source of vitamin B-6, calcium, and iron,juice"],
    ["restaurants_menu/img/juice/watermelon-juice.webp", "Watermelon Juice", "200", "Watermelon juice is touted as an excellent low-sugar beverage for sports rehydration by physician Mark Hyman, MD, the New York Times best-selling author of Food: What The Heck Should I Eat? The amino acid L-citrulline found in watermelon helps move lactic acid out of muscles, reducing soreness ", "juice"],

    ["restaurants_menu/img/other/pizza.webp", "Pizza", "300", "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven", "other"],
    ["restaurants_menu/img/other/ffff.png", "French Fries", "500", "To be absolutely honest, I've never been able to make fries as good as theirs (shhhhh!). Sure, my thick-cut pub-style fries are super-potatoey and fantastic, and when I'm in the mood for them, my seasoned steak fries can't be beat, but for thin, super-crisp fries ", "other"]
]

const menu_list = document.querySelector(".menu_list")

const all = document.querySelector(".All")
const chicken = document.querySelector(".chicken")
const paneer = document.querySelector(".paneer")
const veg = document.querySelector(".veg")
const juice = document.querySelector(".juice")
const cake = document.querySelector(".cake")
const other = document.querySelector(".other")


all.addEventListener("click", showItem)
chicken.addEventListener("click", showItemchicken)
paneer.addEventListener("click",showItempaneer)
veg.addEventListener("click",showItemveg)
juice.addEventListener("click",showItemjuice)
cake.addEventListener("click",showItemcake)
other.addEventListener("click",showItemother)

function showItem() {
    
    for (let i = 0; i < arr.length; i++) {
        menu_list.innerHTML += ` <div class="item">
    <div class="item_img">
           <img src="C:/Users/CHANDAN 007/Desktop/Project/${arr[i][0]}" class="img"">
    </div>
    <div class="content">
        <div class="name_price">
            <p class="name">${arr[i][1]}</p>
            <p class="price">${arr[i][2]}</p>
        </div>
           <p class="info">${arr[i][3]}</p>
    </div>
</div>`
    }
}

function showItemchicken() {
    menu_list.innerHTML=""
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][4] == "Chicken") {
            menu_list.innerHTML += `
         <div class="item">
        <div class="item_img">
               <img src="C:/Users/CHANDAN 007/Desktop/Project/${arr[i][0]}" class="img"">
        </div>
        <div class="content">
            <div class="name_price">
                <p class="name">${arr[i][1]}</p>
                <p class="price">${arr[i][2]}</p>
            </div>
               <p class="info">${arr[i][3]}</p>
        </div>
    </div>`
        }
    }
}

function showItempaneer() {
    menu_list.innerHTML=""
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][4] == "Paneer") {
            menu_list.innerHTML += `
         <div class="item">
        <div class="item_img">
               <img src="C:/Users/CHANDAN 007/Desktop/Project/${arr[i][0]}" class="img"">
        </div>
        <div class="content">
            <div class="name_price">
                <p class="name">${arr[i][1]}</p>
                <p class="price">${arr[i][2]}</p>
            </div>
               <p class="info">${arr[i][3]}</p>
        </div>
    </div>`
        }
    }
}

function showItemveg() {
    menu_list.innerHTML=""
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][4] == "veg") {
            menu_list.innerHTML += `
         <div class="item">
        <div class="item_img">
               <img src="C:/Users/CHANDAN 007/Desktop/Project/${arr[i][0]}" class="img"">
        </div>
        <div class="content">
            <div class="name_price">
                <p class="name">${arr[i][1]}</p>
                <p class="price">${arr[i][2]}</p>
            </div>
               <p class="info">${arr[i][3]}</p>
        </div>
    </div>`
        }
    }
}

function showItemjuice() {
    menu_list.innerHTML=""
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][4] == "juice") {
            menu_list.innerHTML += `
         <div class="item">
        <div class="item_img">
               <img src="C:/Users/CHANDAN 007/Desktop/Project/${arr[i][0]}" class="img"">
        </div>
        <div class="content">
            <div class="name_price">
                <p class="name">${arr[i][1]}</p>
                <p class="price">${arr[i][2]}</p>
            </div>
               <p class="info">${arr[i][3]}</p>
        </div>
    </div>`
        }
    }
}

function showItemcake() {
    menu_list.innerHTML=""
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][4] == "cake") {
            menu_list.innerHTML += `
         <div class="item">
        <div class="item_img">
               <img src="C:/Users/CHANDAN 007/Desktop/Project/${arr[i][0]}" class="img"">
        </div>
        <div class="content">
            <div class="name_price">
                <p class="name">${arr[i][1]}</p>
                <p class="price">${arr[i][2]}</p>
            </div>
               <p class="info">${arr[i][3]}</p>
        </div>
    </div>`
        }
    }
}

function showItemother() {
    menu_list.innerHTML=""
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][4] == "other") {
            menu_list.innerHTML += `
         <div class="item">
        <div class="item_img">
               <img src="C:/Users/CHANDAN 007/Desktop/Project/${arr[i][0]}" class="img"">
        </div>
        <div class="content">
            <div class="name_price">
                <p class="name">${arr[i][1]}</p>
                <p class="price">${arr[i][2]}</p>
            </div>
               <p class="info">${arr[i][3]}</p>
        </div>
    </div>`
        }
    }
}