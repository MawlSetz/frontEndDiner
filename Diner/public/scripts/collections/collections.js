// var PetsCollection = Backbone.Collection.extend({
//   model: Pet,
//   url: '/pets'
// })

// var zoo = new PetsCollection();
// zoo.fetch()


// var petMaker = function(){
// 	var inputPet = new Pet({name: document.getElementById("new_pet_name").value, type: document.getElementById("new_pet_type").value})
// 	zoo.create(inputPet);
// }


// document.getElementById("new_pet_button").addEventListener("click", petMaker)
var DishCollection = Backbone.Collection.extend({
    model: Dish,
    url: '/dishes'
    
});
var dishes = new DishCollection();
// var appet = []
// var appDish = new DishCollection
// appDish.fetch(null, {
// 	success: function(models, response){
// 		response.forEach(function(item){
// 			if(item.category_id === 2){
	// appDish.add([item])
// 				appet.push(item)
// 			}
// 		})
// 	}
// })