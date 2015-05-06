// var Pet = Backbone.Model.extend({
// 	urlRoot: '/pets',
// 	initialize: function(){
// 		console.log("A pet was born!");
// 		this.on('change:name', function(){
// 			console.log("Make that change")
// 		})
// 		petLister(this);
// 	},
// 	defaults: {
// 		name: "T-1000",
// 		type: "TERMINATOR"
// 	},
// 	speak: function(){
// 		console.log("woof woof");
// 	}
// });

// var petLister = function(pet){
// 	var ul = document.getElementById("pet_list")
// 	var name = pet.attributes.name;
// 	var type = pet.attributes.type;
// 	var li = document.createElement("li");
// 	li.innerText = name + " is a " + type;
// 	ul.appendChild(li)
// }
console.log("models");

var Dish = Backbone.Model.extend({
	urlRoot: '/dishes',
    initialize: function(){
        console.log('Dish has been intialized');
        this.on('change', function(){
        	console.log('A change was made')
        })
        dishListener(this);
    },
    defaults:{
    	name: 'Dish1',
    	description: 'Dish description',
    	img_url: 'http://lorempixel.com/300/300',
    	price: '$10.00'
    },
    conso: function(){
    	console.log("end of DishModel");
    }
   
});

var dishListener = function(dish){
	var ul = document.getElementById("showDish");
	var name = dish.attributes.name;
	var description = dish.attributes.description;
	var img_url = dish.attributes.img_url;
	var price = dish.attributes.price;
	var li = document.createElement('li');
	li.innterText = name + "<br>" + description + "<br><img src=" + img_url + "/><br>" + price;
	ul.appendChild(li)
}


	