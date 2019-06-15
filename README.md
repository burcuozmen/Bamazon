BAMAZON

BAMAZON is like an Amazon-like storefront app
The app will take in orders from customers and deplete stock from the store's inventory. 

As a bonus the user can track product sales across the store's departments and then provide a summary of the highest-grossing departments in the store.





<!--Customer View --!>

--->Customer can view the Products table with the following data

   * item_id (unique id for each product)
   * product_name (Name of product)
   * department_name
   * price (cost to customer)
  
   
--->The app will prompt users with two messages.   
   
   * The first will ask them the ID of the product they would like to buy.
   * The second message will ask how many units of the product they would like to buy.

---> Once the customer has placed the order, the application will check if your store has enough of the product to meet the      customer's request.

   * If not, the app will log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

   * If the store _does_ have enough of the product, it will fulfill the customer's order.
   * This will update the SQL database to reflect the remaining quantity.
   * Once the update goes through, it will show the customer the total cost of their purchase.
   
   
   





  







  




