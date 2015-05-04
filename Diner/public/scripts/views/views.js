// $(document).ready(function(){

	var showDishView = Backbone.View.extend({
		tagName: 'li',
    	template: _.template($("#dishTemplate").html()),
    	events:{ "click .deleteButton": "deleteDish"},

    deleteDish.function
    render: function() {
        this.$el.html(this.template({dish: this.model.toJSON()}));
        return this;
    }
  });

var allDishView = Backbone.View.extend({
	el: "ul#dishesList",
      initialize: function() {
          this.listenTo(this.collection, "sync", this.render);
      },

      render: function() {
          var allDish = this.$el;
          allDish.html("");
          this.collection.each(function(dish) {
              allDish.append(new DishView({model: dish}).render().$el);
          });

          return this;
      }
  });
})