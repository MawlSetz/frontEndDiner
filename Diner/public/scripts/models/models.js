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



var Dish = Backbone.Model.extend({
	urlRoot: '/dishes',
    initialize: function(){
        console.log('Dish has been intialized');
        this.on('change', function(){
        	console.log('A change was made')
        });
    }
    // showAlert: function () {
    //     alert('ID: ' + this.get('ID') + ', DishName: ' + this.get('DishName'));
    // }
});
