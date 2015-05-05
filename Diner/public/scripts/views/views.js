// // $(document).ready(function(){

// 	var showDishView = Backbone.View.extend({
// 		tagName: 'li',
//     	template: _.template($("#dishTemplate").html()),
//     	events:{ "click .deleteButton": "deleteDish"},

//     deleteDish.function
//     render: function() {
//         this.$el.html(this.template({dish: this.model.toJSON()}));
//         return this;
//     }
//   });

// var allDishView = Backbone.View.extend({
// 	el: "ul#dishesList",
//       initialize: function() {
//           this.listenTo(this.collection, "sync", this.render);
//       },

//       render: function() {
//           var allDish = this.$el;
//           allDish.html("");
//           this.collection.each(function(dish) {
//               allDish.append(new DishView({model: dish}).render().$el);
//           });

//           return this;
//       }
//   });
// })
//add new dishes
var DishView = Backbone.View.extend({
	template: _.template('<li><%= addedDish %><li>'),
	events: { 'click newEntree button' : 'inputNewDish' },
	inputNewDish: function(
		if(this.get('option#meal'==="breakfast"){
			//insert into breakfast
		} else if (this.get('option#meal'==="lunch"){
			//insert into lunch
		} else if (this.get('option#meal'==='dinner'){
			//insert into dinner
		});
	});
			
	
//view all of the dishes
var AllDishView = Backbone.View.extend({
		el: "",
		initialize: function() {
			this.listenTp(this.collection, "sync", this.render);
		},
		render: function() {
			var attributes = this.model.toJSON();
			this.$el.html(this.template(attributes));
		}
		return this;
	});

	var allDishView = new AllDishView({model: dish});
	allDishView.render();
	console.log(allDishView.el);



