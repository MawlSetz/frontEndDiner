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
var DishView = Backbone.View.extend({
	tagName: 'li',
	template: _.template($("#dishTemplate").html()),
	events: { 
    	"click button.deleteButton": "deleteDish",
        "click button.editButton": "editDish",
        "click button.updateButton": "updateDish"
    },

    //UPDATES a dish
    updateDish: function() {
    	var newName = this.$('#newDishName' + this.model.id).val();
    	var newCategory = this.$('.category' + this.model.id).val();
    	var newDescription = this.$('#newDescription' + this.model.id).val();
    	var newImgUrl = this.$('#newImgUrl' + this.model.id).val();
    	var newPrice = this.$('#newPrice' + this.model.id).val();

    	this.model.set({name: newName, category: newCategory, description: newDescription, imgUrl: newImgUrl, price: newPrice});
    	this.model.save();

    },

    //show Edit form
    editDish: function() {
    	this.$("span.dish").hide();
    	this.$('span.editForm').show();
    },

    deleteDish: function() {
    	this.model.destroy()
    },

    render: function() {
    	this.$el.html(this.template({dish: this.model.toJSON()}));
		return this;
	}
});
//show a collection of dishes(kitchen)

var KitchenView= Backbone.View.extend({
	el: "ul#dishList",
	initialize: function() {
		this.listenTo(this.collection, "sync remove", this.render);
	},
	render: function() {
		var kitchen = this.$el;
		kitchen.html("");
		this.collection.each(function(dish){
			kitchen.append(new DishView({model: dish}).render().$el);
		});
		return this;
	}
});
    




//adds events tp create new dish
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
			


	new KitchenView({collection: kitchen});
	new CreateDishView({collection: kitchen});
});
