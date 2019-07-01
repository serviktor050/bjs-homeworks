'use strict';

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    let discrim = Math.pow(b,2) - 4*a*c;
    let theRootOfTheEducation;
    let xFirst;
    let xSecond;

    if (discrim < 0) {
        theRootOfTheEducation = [];
        console.log(theRootOfTheEducation);
    } else if (discrim === 0) {
        xFirst = (-b)/(2*a);
        theRootOfTheEducation = [xFirst];
        console.log(theRootOfTheEducation);
    } else if (discrim > 0) {
        xFirst = ((-b) + Math.sqrt(discrim))/(2*a);
        xSecond = ((-b) - Math.sqrt(discrim))/(2*a);
        theRootOfTheEducation = [xFirst, xSecond];
        console.log(theRootOfTheEducation);
    }
    return theRootOfTheEducation
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name, dateOfBirthday){
    let today = new Date();
    let yearOfBithday = dateOfBirthday.getFullYear();
    let yearToday = today.getFullYear();
    let ageUser = yearToday - yearOfBithday;
    let result;

    if (ageUser >= 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`;
    } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
    return result
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    let numberOfRatings = marks.length;
    let averageMark;
    let summOfMarks;
    let marksDelete;  
    
    if (numberOfRatings <= 5) {
        summOfMarks = marks.reduce(function(sum, current){
            return sum + current;
        });
        averageMark = summOfMarks/numberOfRatings;
        console.log(averageMark);
    } else if (numberOfRatings >= 5) {
        marksDelete = marks.slice(0, 5);
        let numberOfRatingsDelete = marksDelete.length;
        summOfMarks = marksDelete.reduce(function(sum, current){
            return sum + current;
        });
        averageMark = summOfMarks/numberOfRatingsDelete;
        console.log(`Введено для расчета более пяти оценок. Средний балл по пяти оценкам: ${averageMark}.`)
  }
    return averageMark;
}