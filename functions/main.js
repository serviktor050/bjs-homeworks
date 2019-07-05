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