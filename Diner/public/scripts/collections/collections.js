console.log("collections");
var DishesCollection = Backbone.Collection.extend({
	model: Dish,
	url: '/dishes'
});

var kitchen = new DishesCollection();
kitchen.fetch();