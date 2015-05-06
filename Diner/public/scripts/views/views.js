console.log('linked');
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
	    	this.model.destroy();
	    },

	    render: function() {
	    	this.$el.html(this.template({dish: this.model.toJSON()}));
			return this;
		}
	});
	//show a collection of dishes(kitchen)

var KitchenView = Backbone.View.extend({
	el: "div#contentArea",
	template: _.template($('#kitchenTemplate').html()),
	initialize: function(){
		this.listenTo(this.collection, "sync remove", this.render);
	},
	render: function() {
		var kitchen = this.$el;
		kitchen.html("");
		this.collection.each(function(dish){
			kitchen.append(this.template({model: dish.toJSON()}));
		});
		return this;
	}				
});
	    




	//adds events tp create new dish
	// var CreateDishView = Backbone.View.extend({
	// 	el: "#addDishForm",
	// 	events: { 'click button#newEntree': 'createDish' },
	// 	template: _.template($("#addDishForm").html()),
		// createDish: function(){
		// 	console.log('hello');
		// 	debugger;
		// 	var nameField = this.$('#newDishName').val();
		// 	var categoryField = this.$('#meal').val();
		// 	var descriptionField = this.$('#newDescription').val();
		// 	var imgUrlField = this.$('#newImgUrl').val();
		// 	var priceField = this.$('#newPrice').val();
		// 	debugger;


		// 	// var name = nameField.val();
		// 	// var category = categoryField.val();
		// 	// var description = descriptionField.val();
		// 	// var imgUrl = imgUrlField.val();
		// 	// var price = priceField.val();
		// 	// console.log(name);
		// 	// console.log(category);
		// 	// console.log(description);
		// 	// console.log(imgUrl);
		// 	// console.log(price);

		// 	this.collection.create({name: nameField, img_url: imgUrlField, price: priceField, category_id: categoryField});
		// 	debugger;
		// 	this.save();

		// 	nameField.val("");
		// 	categoryField.val("");
		// 	descriptionField.val("");
		// 	imgUrlField.val("");
		// 	priceField.val("");
  //  			}
		// });
	
				


 // new KitchenView({collection: kitchen});

    

