var DishRoutes = Backbone.Router.extend({
	routes: {
		"": "allDishes",
		"dishes/:anId": "showDish"
	},
	showDish: function(anId){
		var ul = document.getElementById("allDishes");
		ul.innerHTML = ""
		var thisDish = new Dish({id: anId})
		thisDish.fetch({
			success: function(){
				new ShowDishView({model: thisDish}).render();
			}
		})
	},
	allDishes: function(){
		var content = document.getElementById("contentArea");
					content.innerHTML = "";
		kitchen.fetch({
			success: function(model, response) {
				response.forEach(function(pet){
					var content = document.getElementById("contentArea");
					content.innerHTML = "";
					var ul = document.getElementById("allDishes");
					var li =document.createElement('li');
					var a = document.createElement('a');
					a.href = "#dishes/" + this.dish.id;
					a.innerText = this.dish.name;
					ul.appendChild(li);
					li.appendChild(a);
				})
			}
		})
	}
});

var dishRoutes = new DishRoutes();

Backbone.history.start();