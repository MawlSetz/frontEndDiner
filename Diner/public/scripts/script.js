var dishConstructor = {
	this.name = name;
	this.image = image_url;
	this.price = price;
	this.category = category_id;
}

]




var dummyDish = {
	name:"Eggs Benedict",
	image_url: "http://farm8.staticflickr.com/7105/7237535962_0ae3b02942_c.jpg",
	price: 6.78,
	category_id: 1,
}
var dishes = [
dish1, dish2, dish3
]

// function insertDish(){

// }

// function makeCategory (){

}

function makeDish(){
	var $addMeal = $('<section id="meal">');
 	 for(var i = 0; i < dishes.length; i++){
   		var $meal = $('<article>');
    	$meal.append('<h4>' + meals[i] + '</h4>');
    	$addMeal.append($meal);
    }
  $body.append($addMeal);
}