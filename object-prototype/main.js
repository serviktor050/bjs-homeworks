function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    let today = new Date();
    let now = Date.now(today);
    let birthdayMilliseconds = Number(new Date(birthday));
    let diff = now - birthdayMilliseconds;
    let age = Math.round(diff/31536000000);
    console.log(age);

    if (age < 18) {
        return false
    }else if (age >= 18) {
        return true
    }
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    function Tiger() {
        this.sound;
    } 
    Tiger.prototype = animal;
    const tiger = new Tiger();
        
    if (animal === undefined) {
        return null
    } else if (animal !== undefined) {
        return tiger.sound
    }
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let conversionMarks = [];
    function conversion(marks) {
        for (let i = 0; i < marks.length; i++) {
            let mark = parseInt(marks[i]);
            conversionMarks.push(mark);
        }
    return conversionMarks
    }
    let marks2 = conversion(marks);
    let average = marks2.reduce(function(sum, current){
        return sum + current;
    })/marks2.length;
    let roundedAverage = Math.round(average);
    return roundedAverage
}