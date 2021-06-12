// CHAPTER NUMBER 17-20

// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// var arr = [[]];





// 2. Declare and initialize a multidimensional array 
// representing the following matrix:

// var arr1 = [0 1 2 3];
// var arr2 = [1 0 1 2];
// var arr3 = [2 1 0 1];

// var altogether = [arr1 , arr2 , arr3];
// for (var i = 0; i<altogether.length)
// {
//     document.write(altogether[i] + "<br>")
// }



// 3. Write a program to print numeric counting from 1 to 10.

// for(var i = 1; i<=10; i++) {
//     document.write(i + "<br>")
// }




// 4. Write a program to print multiplication table of any 
// number using for loop. Table number & length should be 
// taken as an input from user.


// var table = prompt("number of table"); 
// var multiplication = prompt("length of table");

// for(var i = 1; i <=multiplication; i++ ) {
// document.write 
//     (table + "X" + i+ "=" + table*i + "<br>")
// }



// 5. Write a program to print items of the following array 
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, 
// “strawberry”]


// fruits = ["apple", "banana", "mango", "orange","strawberry"] 
// for(var i =0; i<fruits.length; i++){
// document.write("Element at index" + i + "is" + fruits[i]+ "<br>");
// }





// 6. Generate the following series in your browser. See 
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// var counting_arr = new Array() 
// for ( var i = 0 ; i <= 10; i++){
// counting_arr.push(i)
// }
// document.write("<h1> Counting </h1> <br>" + counting_arr + "<br>")

// var reverse_arr = new Array() 
// for ( var i = 10 ; i >= 0 ; i--){
// reverse_arr.push(i)
// }
// document.write("<h1> Reverse </h1> <br>" + reverse_arr + "<br>")

// var odd_arr = new Array()
// for ( var i = 1 ; i <= 20 ; i += 2){
// odd_arr.push(i)
// }
// document.write("<h1> Odd </h1> <br>" + odd_arr + "<br>")

// var series_arr = new Array()
// for(var i = 2; i <= 20; i += 2){
// series_arr.push(i + "k")
// // } 
// document.write("<h1> Series </h1> <br>" + series_arr + "<br>")





// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array.

// var A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var B = prompt("Welcome to ABC Bakery,What do you want to order Sir/Ma'am?")
// for ( i = 0; i < A.length ; i++){
// if ( A[i] === B) {
// document.write(A[i] + " is availabe at Index " + i + " in our bakery")
   
// }
// }
    