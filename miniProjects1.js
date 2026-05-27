// 1. Create a program that stores: your age, current year. Then calculate: the year you were born.
let age= 17;
let currentYear= 2026;
let birthYear= currentYear-age;
console.log(`I was born in ${birthYear}.`);

// 2. Store: price of one apple, number of apples bought. Calculate: total cost.
let appleRate= 0.25;
let quantity= 100;
console.log(`Total price of Apple: ${appleRate*quantity}$.`);

//  3. A rectangle has: length, breadth. Calculate: area.
let length= 5;
let breadth= 10;
console.log(`Area of the Rectangle: ${length*breadth} sq. units.`);

// 4. Store temperature in Celsius. Convert it to Fahrenheit.
let celsiusScale= 37;
let fahrenheitScale= (9*celsiusScale + 160)/5;
console.log(`Celsius Scale: ${celsiusScale}\nFahrenheit Scale: ${fahrenheitScale}`);

// 5. Store: total marks obtained, total full marks. Calculate: percentage.
let obtainedMark= 432;
let totalMark= 600;
let percentage= (obtainedMark/totalMark)*100;
console.log(`Percentage: ${percentage}%`);

// 6. Store two numbers: a, b. Swap their values. Print before and after.
let a= 5;
let b= 10;
let c= b; //or we can directly print a= b in the After part.
let d= a;
console.log(`Before: a= ${a}, b= ${b}.\nAfter: a= ${c}, b= ${d}.`);

// 7. Store three numbers. Rotate them: first becomes second, second becomes third, third becomes first.
let e= 1, f= 2, g= 3, temp;
temp= e, e= f, f= g, g= temp;
console.log(`e= ${e}, f= ${f}, g= ${g}`);

// 8. Calculate the average of 3 numbers.
let num1= 45, num2=37, num3= 88;
console.log(`Average= ${((num1+num2+num3)/3).toFixed(2)}`);

// 9. Store: radius of a circle. Calculate: diameter, circumference, area.
let radius= 5;
let diameter= radius*2;
let circumference= 2*(22/7)*radius;
let area= (22/7)*radius**2;
console.log(`Diameter: ${diameter} units\nCircumference: ${circumference.toFixed(2)} units\nArea: ${area.toFixed(2)} sq. units`);

// 10. Store seconds. Convert them into: minutes and remaining seconds.
let seconds= 14794;
console.log(`Minutes and seconds: ${Math.trunc(seconds/60)}min ${seconds%60}s.`);

// 11. Generate a random number between: 1 and 10.
console.log(Math.floor(Math.random() * 10)+1);

// 12. Generate: a random dice roll.
console.log(`You rolled ${Math.floor(Math.random()*6)+1}!`);

// 13. Generate: random OTP-like 4-digit number.
console.log(`Your OTP: ${Math.floor(Math.random()*(9999-1000+1))+1000}`);

// 14. A shop gives 10% discount. Store: original price. Calculate: discounted price.
let originalPrice= 650;
let discountedPrice= (650-((10/100)*650)).toFixed(3);
console.log(`Discounted Price: ${discountedPrice}$`);

// 15. Store: side of a cube. Calculate: volume.
let size= 5;
console.log(`Volume of the cube: ${size ** 3} cubic units`);

// 16. A person runs: certain distance, in certain time. Calculate: speed.
let distance= 5;
let timeTaken= 10;
console.log(`Speed= ${distance/timeTaken} metre/sec`);

// 17. Store a number. Find: its square, cube.
let num= 4;
console.log(`Its square: ${num**2}\nIts cube: ${num**3}`);

// 19. Convert: days → hours → minutes
let days= 296;
console.log(`Hours: ${days*24}hr\nMinutes: ${(days*24*60)}min`);

// 20. Store two numbers. Find: remainder after division.
let h= 6,i= 5;
console.log(`Remainder: ${h%i}`);

// 21. Create a “fruit bill” system: mango quantity, apple quantity, banana quantity. Each has different price. Calculate final total.
let rateMango= 0.5, rateApple= 0.25, rateBanana= 0.2;
let quantityMango= 10, quantityApple= 15, quantityBanana= 20;
let costMango= rateMango*quantityMango;
let costApple= rateApple*quantityApple;
let costBanana= rateBanana*quantityBanana;
let totalCost= costMango+costApple+costBanana;
console.log(`Total cost: ${totalCost}`);

// 22. A student has marks in: Math, Science, English. Calculate: total, percentage, average.
let mathMark= 88, scienceMark= 91, englishMark= 83;
let total= mathMark + scienceMark + englishMark;
let per= ((total/300)*100).toFixed(2) + "%";
let average= (total/3).toFixed(2);
console.log(`Total Marks: ${total}\nPercentage: ${per}\nAverage Mark: ${average}`);

// 23. Store: principal, rate, time. Calculate simple interest.
let principal= 2000, rate= 10, time= 5;
let simpleInterest= (principal*rate*time)/100;
console.log(`Simple Interest: ${simpleInterest}`);

// 24. Convert: Nepali rupees to dollars. (using fixed exchange rate manually.)
let nepaliRupees= 150000;
const exchangeRate= 0.0065;
console.log(`Equivalent dollars: ${nepaliRupees*exchangeRate}$`);

// 25. Create a tiny “shopping receipt” program. It should include: item name, quantity, price, total cost, VAT/tax, final amount.
let item1= "Kurkure", item2= "Rumpum", item3= "Oreo";
let item1Rate= 40, item2Rate= 20, item3Rate= 70;
let item1Quantity= 20, item2Quantity= 10, item3Quantity= 15;
let item1Cost= item1Rate*item1Quantity, item2Cost= item2Rate*item2Quantity, item3Cost= item3Rate*item3Quantity;
let itemsTotalPrice= item1Cost + item2Cost + item3Cost;
let taxAmount= (13/100)*itemsTotalPrice;
let finalPrice= itemsTotalPrice - taxAmount;
console.log(`Total Price: ${finalPrice} Rs`);