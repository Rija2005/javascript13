//CHAPTER38
// let a = 23;
// let b =45 ;
// function sum(a,b){
//     return a + b;
// }
// console.log(sum(a ,b));//gloabal varibale ; excess from outside function n inside function


// function sum(a,b){
//     let a = 89;
//     return a + b;
// }//local  variable ;declare inside function


function evenNum(number) {
    return number % 2 === 0;
}
console.log(evenNum(6));



function oddNum(number) {
    return number % 3 === 0;
}
console.log(oddNum(6));


//CHAPTER39
//switch:if you have many conditions to test.
// It's time for you to learn a more elegant alternative that you can use for testing myriad
// conditions, the switch statement.
let dayOfWeek = "Saturday";

switch (dayOfWeek) {
    case "Monday":
        document.write("Today is Monday")
        break;
    case "Tuesday":
        document.write("Today is Tuesday")
        break;
    case "Wednesday":
        document.write("Today is Wednesday")
        break;
    case "Thursday":
        document.write("Today is Thursday")
        break;
    case "Friday":
        document.write("Today is Friday")
        break;
    case "Saturday":
        document.write("Today is Saturday")
        break;
    case "Sunday":
        document.write("Today is Sunday")
        break;
    default:
        document.write("Enter the correct  Day")

}

//another e.g of switch:The switch statement is used to perform different actions based on different conditions.
//Use the switch statement to select one of many code blocks to be executed.

let dayOfWk = 3

switch (dayOfWk) {
    case 1:
        alert("Whoopee");
        break;
    case 2:
        alert("Hello");
        break;
    case 3:
        alert("TGIF!");
        break;
    default:
        alert("Shoot me now!");
}

//This is how it works:

// The switch expression is evaluated once.
// The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.
// If there is no match, the default code block is executed.




function getMonthName(Name) {
    switch (Name) {
        case 1:
            return "Janurary"

        case 2:
            return " Feburary"

        case 3:
            return "March"

        case 4:
            return "April"


        case 5:
            return "May"

        case 6:
            return "June"

        case 7:
            return "July"

        case 8:
            return "August"
        case 9:
            return "September"
        case 10:
            return "October"

        case 11:
            return "November"
        case 12:
            return "December"
    }


}
console.log(getMonthName(4));

//Write a function called calculateDiscount that takes two parameters: productType (a string indicating the type of product) and price (a number representing the original price of the product). The function should calculate and return the discounted price based on the following rules using a switch-case statement:

// If productType is "Electronics", apply a 10% discount.
// If productType is "Clothing", apply a 20% discount.

// If productType is "Books", apply a 15% discount.
// For any other productType, return the original price without any discount.
// Round the discounted price to two decimal places before returning it.
function calculateDiscount(productType, price) {
    let discount 
    switch (productType) {
        case productType = "Electronics":
            discount = price * 0.01;
            break;

        case productType = "Clothing":
            discount = price * 0.2;
            break;

        case productType = "Book":
            discount = price * 0.15;
            break;
 default:
    console.log("Orginal Price");
    break;
}
let dicountedPrice = (price - discount).toFixed(2);
return dicountedPrice
}

console.log(calculateDiscount("Electronics",80));
console.log(calculateDiscount("Clothing",480));