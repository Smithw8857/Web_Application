var mysql = require('mysql');
var faker = require('faker');
 
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',     // your root username
  database : 'join_us'   // the name of your db
});


// var q = 'INSERT INTO users (email) VALUES ("rusty_the_dog@gmail.com")';
// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });

// connection.end();


// var person = {email: 'Jenny467@gmail.com'};

// connection.query('INSERT INTO users SET ?', person, function(err, result) {
// 	if (err) throw err;
// 	console.log(result);
// });

// connection.end();


// var person = {
//     email: faker.internet.email(),
//     created_at: faker.date.past()
// };
 
// var end_result = connection.query('INSERT INTO users SET ?', person, function(err, result) {
//   if (err) throw err;
//   console.log(result);
// });

// connection.end();


// INSERTING LOTS OF DATA


var data = [];
for(var i = 0; i < 500; i++){
	data.push([
		faker.internet.email(),
		faker.date.past()
	]);
}

// console.log(data);

var q = 'INSERT INTO users (email, created_at) VALUES ?';

connection.query(q, [data], function(error, result) {
  console.log(error);
  console.log(result);
});

connection.end();