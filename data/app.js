new Vue({
    el: '#app',
    data: {
        products : [ 
            {
                name: 'Dim sum',
                image: 'image/food-1.png',
                price: 4,
                count: 1,
                quantity: 8
            },
            {
                name: 'Hamburger',
                image: 'image/food-2.png',
                price: 6,
                count: 1,
                quantity: 6
            },
            {
                name: 'Pizza',
                image: 'image/food-3.png',
                price: 8,
                count: 1,
                quantity: 19
            },
            {
                name: 'Cheeseburger',
                image: 'image/food-4.png',
                price: 2,
                count: 1,
                quantity: 5
            },
            {
                name: 'Pizza seafood',
                image: 'image/food-5.png',
                price: 6,
                count: 1,
                quantity: 12
            },
            {
                name: 'Pizza tomato',
                image: 'image/food-6.png',
                price: 1,
                count: 1,
                quantity: 10
            },
            {
                name: 'Sandwich',
                image: 'image/food-7.png',
                price: 3,
                count: 1,
                quantity: 8
            },
            {
                name: 'Pizza sausage',
                image: 'image/food-8.png',
                price: 4,
                count: 1,
                quantity: 4
            },
            {
                name: 'Sandwich pork ',
                image: 'image/menu-1.png',
                price: 3,
                count: 1,
                quantity: 21
            },
            {
                name: 'Pizza  cheese',
                image: 'image/menu-2.png',
                price: 7,
                count: 1,
                quantity: 5
            },
            {
                name: 'Bacon',
                image: 'image/menu-3.png',
                price: 13,
                count: 1,
                quantity: 2
            },
            {
                name: 'Taco',
                image: 'image/menu-4.png',
                price: 21,
                count: 1,
                quantity: 8
            },
            {
                name: 'Chips',
                image: 'image/menu-5.png',
                price: 11,
                count: 1,
                quantity: 99
            },
            {
                name: 'Pretzel',
                image: 'image/menu-6.png',
                price: 3,
                count: 1,
                quantity: 82
            },
        ],
        carts: [],
        total: 0,
        itemcount: 0,
    },
    methods: {
        addCart(pr){
            var temp = false;
            if(this.carts == null){
                temp = false;
            } else {
                for (let i = 0; i < this.carts.length; i++){
                    if (this.carts[i].name == pr.name){
                        temp = true
                    }
                }
            }
            if (temp == false){
                pr.count = 1;
                this.carts.push(pr);
                this.itemcount++;
                pr.quantity--;
            } else {
                for (let i = 0; i < this.carts.length; i++){
                    if(pr.name == this.carts[i].name && this.carts[i].count != 0){
                        this.carts[i].count++;
                        pr.quantity--;
                    }
                }
            }
        },
        removeItem(i){
            this.carts.splice(this.carts.indexOf(i), 1);
            this.itemcount--;
        },
        getAmout(){
            var total = 0;
            for (i=0; i< this.carts.length; i++){
                total += this.carts[i].count * this.carts[i].price
            }
            return total;
        },
        formatPrice(value) {
            let val = (value / 1).toFixed(2).replace(".", ",");
            return "$" + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
          },
        
    },
    computed: {
    //     getTotal(){
    //         var total = 0;
    //         for (let i = 0; i < this.carts.length; i){
    //             total += this.carts[i].count * this.carts[i].price
    //         }
    //         return total
    //     }
    }
})
