var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("diner.db");
db.run("INSERT INTO dishes (name, image_url, price, category_id) VALUES ('Eggs Benedict', 'http://farm8.staticflickr.com/7105/7237535962_0ae3b02942_c.jpg', 12.00, 1)", function(err) {
        if(err) { 
            throw err; 
        }
    });
db.run("INSERT INTO categories(name) VALUES (1)", function(err){
	if(err) {
		throw err;
	}
});