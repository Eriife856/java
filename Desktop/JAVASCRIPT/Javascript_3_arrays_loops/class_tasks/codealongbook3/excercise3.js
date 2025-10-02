// ## 🎯 Practice Exercise 1

// **Task:** Array Basics - Shopping List  

// **Requirements:**  
// 1. Create an array `shoppingList` with at least 5 items  
// 2. Add a new item to the end of the list  
// 3. Remove the first item from the list  
// 4. Display the total number of items  
// 5. Loop through the list and print each item with its position  

// **Challenge:**  
// Create a function `formatList(list)` that returns the shopping list in a numbered format (1. Item, 2. Item, ...).

let shoppingList = ["milk", "bread", "eggs", "cheese", "butter"];
console.log("Original list:", shoppingList);

// 2. Add a new item to the end of the list
shoppingList.push("apples");
console.log("After adding an item:", shoppingList);
// 3. Remove the first item from the list
let removedItem = shoppingList.shift();
console.log("Removeditem:",removedItem);
console.log("After removing the first item:", shoppingList);
// 4. Display the total number of items
console.log("Total number of items:",shoppingList.length)
// 5. Loop through the list and print each item with its position
shoppingList.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
});
// for(let shoppingList of shoppingLists){
//     console.log
// console.log("");
// ## 🎯 Practice Exercise 2

// **Task:** Student Grades Analyzer  

// **Requirements:**  
// 1. Store grades in an array  
// 2. Write a function `getAverage(grades)` to calculate average grade  
// 3. Write a function `getHighest(grades)` to find the highest grade  
// 4. Write a function `getLowest(grades)` to find the lowest grade  
// 5. Use loops where necessary to process the array  

// **Challenge:**  
// Create a function `getPassRate(grades)` that:  
// - Counts how many students scored **50 or above** (passing)  
// - Divides that number by the total number of students  
// - Returns the **percentage of students who passed** 
// let grades =[ 85, 42, 78, 90, 56, 33, 67, 88, 49, 100]
// // console.log("Grades:", grades)
// // function getAverage(grades) {
// //     let total = 0; 
// //     for(let grade of grades){
// //         total += grade;
// //     }
// //     return total/grades.length
// // }
// console.log ("AverageGrade:", getAverage(grades));

let grades =[ 85, 42, 78, 90, 56, 33, 67, 88, 49, 100]
console.log("Grades:", grades)
function getHighest(grades){
    let highest = grades[0]
    for(let grade of grades){
     if( grade > highest) {
        highest = grade
     }
    }
     return highest ;
}
console.log("Highestgrades:", getHighest(grades));
 //getLowest grades
function getLowest(grades){
    let lowest = grades[0]
    for(let grade of grades){
     if( grade < lowest) {
        lowest = grade
     }
}
return lowest ;
}
console.log("Lowestgrades:", getLowest(grades));

//getpassrate
function getPassRate(grades){
    let count = 0;
    for (let grade of grades){
        if (grade >= 50){
            count++;
        }
    }
    return count;
}
console.log("getPassRate:" , getPassRate(grades));
console.log(getPassRate(grades) / grades.length);
console.log(getPassRate(grades) / grades.length * 100 + "%");

let movies =["avengers", "infinity war", "spiderman", "batman"]
let ratings = [4.5, 4.7, 4.3, 4.8]

function addMovie(movie, rating){
    movies.push(movie);
    ratings.push(rating);
}
addMovie("yellowboot", 4.6);

 console.log((movies));
 console.log((ratings));


 // Excercise4:Student report system
let studentsNames =["john", "jane","Bob", "Alice", "betty"];
let studentsGrades = [85, 42, 78, 90,60];
function generateReport(names, grades){
    for(let i = 0; i < names.length; i++){
        console.log(`${names[i]}: ${grades[i]}`);
    }
}
generateReport(studentsNames, studentsGrades);
console.log("");

//Function to find the average grade of students
function averageGrade(grades){
    let total = 0;
    for(let grade of grades){
        total += grade;
    }
    return total / grades.length;
}
//function to find top and bottom student
function topAndBottomStudents(names,grades){
    let higestGrade = grades[0];
    let lowestGrade = grades[0];
     let topstudent = names[0];
     let bottomstudent = names[0];
    for(let i = 1; i < grades.length; i++){
        if(grades[i] > higestGrade){
            higestGrade = grades[i];
            topstudent = names[i];
        }
        for(let i = 1; i < grades.length; i++){
        if(grades[i] < lowestGrade){
            lowestGrade = grades[i];
            bottomstudent = names[i];
        }
}
    }
    return {topstudent, higestGrade, bottomstudent, lowestGrade};
}
// function to categorize student based on their grades
function categorizeStudents(names, grades){
    let categories = {A: [], B: [], C: [], D: [], F: []};
    for(let i = 0; i < grades.length; i++){
        let grade = grades[i];
        let name = names[i];
        if(grade >= 90){
            categories.A.push(name);
        }
        else if(grade >= 80){
            categories.B.push(name);
        }
        else if(grade >= 70){
            categories.C.push(name);
        }
        else if(grade >= 60){
            categories.D.push(name);
       
       }  
        else if(grade >= 50){
            categories.E.push(name);   
        }
        else{
            categories.F.push(name);
        }
    }
    return categories;
}
//report generator
console.log("Average Grade:", averageGrade(studentsGrades));
let {topstudent, higestGrade, bottomstudent, lowestGrade} = topAndBottomStudents(studentsNames, studentsGrades);
console.log(`Top Student: ${topstudent} with grade ${higestGrade}`);
console.log(`Bottom Student: ${bottomstudent} with grade ${lowestGrade}`);
let categories = categorizeStudents(studentsNames, studentsGrades);
console.log("Student Categories:", categories);
