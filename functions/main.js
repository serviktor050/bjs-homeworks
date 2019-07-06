//Задача 1

let a = 5, b = 20, c = 3;

function getSolutions(a,b,c) {
  let D = Math.pow(b,2) - 4*a*c;
  let x1 = ((-b) + Math.sqrt(D))/(2*a);
  let x2 = ((-b) - Math.sqrt(D))/(2*a);

  if (D < 0) {
    return {D: D}
  } else if (D === 0) {
    return {root: [x1], D: D}
  } else if (D > 0) {
    return {root: [x1, x2], D: D}
  }
}

getSolutions(a,b,c)

function showSolutionsMessage(a,b,c) {
  let result = getSolutions(a,b,c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);

  if (result.D < 0) {
    console.log(`Уравнение не имеет вещественных корней.`)
  } else if (result.D === 0) {
    console.log(`Уравнение имеет один корень. X1 = ${result.root[0]}.`)
  } else if (result.D > 0) {
    console.log(`Уравнение имеет два корня. X1 = ${result.root[0]}, X2 = ${result.root[1]}.`)
  }
} 
showSolutionsMessage(a,b,c)

//Задача 2

let data = {
  algebra: [5, 4, 4, 3, 5, 5, 4, 4],
  geometry:[4, 3, 5, 5, 4, 4, 5, 5],
  russian: [4, 4, 4, 4, 3, 3, 5, 5],
  physics: [4, 5, 4, 3, 5, 5, 4, 5],
  music: [5, 5, 5, 4, 5, 4, 4, 5],
  english: [4, 3, 5, 5, 4, 4, 5, 5],
  poetry: [5, 4, 4, 3, 5, 5, 4, 4],
  chemistry: [4, 5, 4, 3, 5, 5, 4, 5],
  french: [4, 4, 4, 4, 3, 3, 5, 5],
  biology: [5, 5, 5, 4, 5, 4, 4, 5]
};

function getAverageScore(data) {

  function getAverageScoreSubject() {
    let data2 = {};
      for (let subject in data) {
        let averageSubject = data[subject].reduce(function(sum, current) {
        return sum + current;
        },0)/data[subject].length;
        data2[subject] = averageSubject;
      }
    return data2
  }

  getAverageScoreSubject()

  let result = getAverageScoreSubject()
  let average = [];

  for(let score in result) { 
    average.push(result[score]) 
  }
  
  let summOfMarks = average.reduce(function(sum, current){
    return sum + current;
  });
  let averageMark = summOfMarks/average.length;
  result.average = averageMark;

  return result
}

getAverageScore(data)

//Задача 3

let secretData = {
  aaa: 1,
  bbb: 1
}

function getPersonData(secretData) {
  function getNamebandit() {
    let codeName = [];
    for(let code in secretData) { 
    codeName.push(secretData[code]) 
  }
    if (codeName[0] === 0 && codeName[1] === 0) {
      return {firstName: 'Родриго', lastName: 'Родриго'}
    } else if (codeName[0] === 1 && codeName[1] === 0) {
      return {firstName: 'Эмильо', lastName: 'Родриго'}
    } else if (codeName[0] === 1 && codeName[1] === 1) {
      return {firstName: 'Эмильо', lastName: 'Эмильо'}
    } else if (codeName[0] === 0 && codeName[1] === 1) {
      return {firstName: 'Родриго', lastName: 'Эмильо'}
    }
  }
  getNamebandit()

  let result = getNamebandit();
  console.log(result);
}
getPersonData(secretData)