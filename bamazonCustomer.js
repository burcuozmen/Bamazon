var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host:"localhost",
	port:3306,
	user:"root",
	password:"zeytin3099",
	database:"bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    console.log("---------Wellcome to Bamazon-----------");
    console.log ("--------View our Products-----------");
    displayAll();
    
   
    
});
  
function displayAll() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].item_id + " | " + 
                     res[i].product_name + " | " + 
                     res[i].department_name + " | " + "Price " + 
                     res[i].price + " $ " )

      }
      console.log("-----------------------------------");
      askCustomer();
    });
}
  
function askCustomer() {
    inquirer
        .prompt([

           { name: "chosenId",
             type: "input",
             message: "Please enter the ID of the product you would like to buy",
           },
           { name: "chosenQuantity",
             type: "input",
             message: "How many units of this product you would like to buy?",
             validate: function(value){
                   if (isNaN(value)==false) {return true;}
                   else {return false;}
                   }
            },
        ]).then(function(answer) {
            var userId = answer.chosenId;
            

            connection.query("SELECT * FROM products", function(err, res) {
                if (err) throw err;
                
                itemCheck();
                
                    function itemCheck(){
                
                    if (userId !== res[0].item_id ){
                        // console.log ("Incorrect product id, please try again");
                        // connection.end;
    
                    }else {console.log("You choose item id: ",userId , "Good Choice");
                    }
                 }
                
            
            var userQuantity = answer.chosenQuantity;
            console.log("Quantity chosen  " ,userQuantity);
            
            

            connection.query("SELECT * FROM products", function(err, res) {
                if (err) throw err;
                
                orderProducts(); 
                function orderProducts(){
                   var userQuantity = answer.chosenQuantity;
                   var totalCost = userQuantity * res[0].price;
                
                   if (userQuantity > res[0].stock_quantity) {
                       console.log("Insufficient quantity available for purchase! Sorry!")
                    
                   } else {
                      console.log("Thank you for your purchase! Please pay a total of: $" + totalCost);
                    }
                }  
              
            });
            
        }); 
    });   
        
}