console.log('linkedRoutes');
var DishRoutes = Backbone.Router.extend({
	routes: {
		"": "allDishes",
		"dishes/new": "createDish",
		"dishes/:anId": "showDish"
	},
	showDish: function(anId){
		var ul = document.getElementById("allDishes");
		ul.innerHTML = ""
		var thisDish = new Dish({id: anId});
		thisDish.fetch({
			success: function(){
				new DishView({model: thisDish}).render();
			}
		})
	},
	
	createDish: function(){
		console.log('hello');
		
		var nameField = $('#newDishName').val();
		var categoryField = $('#meal').val();
		var descriptionField = $('#newDescription').val();
		var imgUrlField = $('#newImgUrl').val();
		var priceField = $('#newPrice').val();
		


		// var name = nameField.val();
		// var category = categoryField.val();
		// var description = descriptionField.val();
		// var imgUrl = imgUrlField.val();
		// var price = priceField.val();
		// console.log(name);
		// console.log(category);
		// console.log(description);
		// console.log(imgUrl);
		// console.log(price);

		kitchen.create({name: nameField, img_url: imgUrlField, price: priceField, category_id: categoryField});
		
		$('#newDishName').val("");
		$('#meal').val("");
		$('#newDescription').val("");
		$('#newImgUrl').val("");
		$('#newPrice').val("");

		//reroute to '/'
		
		
	},
	allDishes: function(){
		// var content = document.getElementById("contentArea");
		// 			content.innerHTML = "";
		kitchen.fetch({
			success: function(model, response) {
				new KitchenView({collection: kitchen}).render();
			}
		});
	}
});

var dishRoutes = new DishRoutes();

Backbone.history.start();