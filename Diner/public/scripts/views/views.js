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
// // })
// template: _.template('<li><%= addedDish %><li>'),
// 		if(this.get('option#meal'==="breakfast"){
// 			console.log('breakfast');
// 		} else if (this.get('option#meal'==="lunch"){
// 			console.log('lunch');
// 		} else if (this.get('option#meal'==='dinner'){
// 			//insert into dinner
// 			console.log('dinner');
// 		});
//template: _.template($("#showDish").html()),
//################
//show dish view
//###############




//create new dish
var CreateDishView = Backbone.View.extend({
	el: "#addDishForm",
	events: { 'click button#newEntree' : 'createDish' },
	createDish: function(){
		var nameField = this.$('#newDishName');
		var categoryField = this.$('#meal');
		var descriptionField = this.$('#newDescription');
		var imgUrlField = this.$('#newImgUrl');
		var priceField = this.$('#newPrice');

		var name = nameField.val();
		var category = categoryField.val();
		var description = descriptionField.val();
		var imgUrl = imgUrlField.val();
		var price = priceField.val();

		this.collection.create({name: name, category: category, description: description, imgUrl: imgUrl, price: price});

		nameField.val("");
		categoryField.val("");
		descriptionField.val("");
		imgUrlField.val("");
		priceField.val("");

		}
	});
			
var ShowDishView = Backbone.View.extend({
	el: "#contentArea",
	template: _.template($("#showDish").html()),
	render: function(){
		this.$el.html(this.template({pet: this.model.toJSON()}));
		return this;
	}
});	
//view all of the dishes
// var AllDishView = Backbone.View.extend({
// 		el: "",
// 		initialize: function() {
// 			this.listenTo(this.collection, "sync", this.render);
// 		},
// 		render: function() {
// 			var attributes = this.model.toJSON();
// 			this.$el.html(this.template(attributes));
// 		}
		
// 	});

	// var allDishView = new AllDishView({model: dish});
	// allDishView.render();
	// console.log(allDishView.el);


new CreateDishView({collection: kitchen});
