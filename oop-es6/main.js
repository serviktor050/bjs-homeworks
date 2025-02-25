//Задача 1
class Weapon {
  constructor({name, basedWeapon, attack, startDurability, durability, range}) {
    this.name = name;
    this.basedWeapon = basedWeapon;
    this.attack = attack;
    this.startDurability = startDurability;
    this.durability = durability;
    this.range = range;
  }

  takeDamage(damage) {
    
    if (damage > this.startDurability) {
      this.durability = 0;
    } else {
      this.durability = this.startDurability - damage;
    }    
  }

  getDamage() {
    if (this.durability === 0) {
      return 0
    } else if (this.durability >= 0.3*this.startDurability) {
      return this.attack
    } else {
      return (this.attack/2)
    }  
  }

  isBroken() {
    if (this.durability === 0) {
      return true
    } else {
      return false
    }
  }
}

const hand = new Weapon({
  name: 'Рука',
  attack: 1,
  startDurability: Infinity,
  durability: Infinity,
  range: 1,
});

const bow = new Weapon({
  name: 'Лук',
  attack: 10,
  startDurability: 200,
  durability: 200,
  range: 3,
});

const sword = new Weapon({
  name: 'Меч',
  attack: 25,
  startDurability: 500,
  durability: 500,
  range: 1,
});

const knife = new Weapon({
  name: 'Нож',
  attack: 5,
  startDurability: 300,
  durability: 300,
  range: 1,
});

const staff = new Weapon({
  name: 'Посох',
  attack: 8,
  startDurability: 300,
  durability: 300,
  range: 2,
});

const longBow = new Weapon({
  name: 'Длинный лук',
  basedWeapon: 'Лук',
  attack: 15,
  startDurability: 200,
  durability: 200,
  range: 4,
});

const axe = new Weapon({
  name: 'Секира',
  basedWeapon: 'Меч',
  attack: 27,
  startDurability: 800,
  durability: 800,
  range: 1,
});

const staffOfStorm = new Weapon({
  name: 'Посох бури',
  basedWeapon: 'Посох',
  attack: 10,
  startDurability: 300,
  durability: 300,
  range: 3,
});


bow.takeDamage(150);
console.log(bow.durability);
console.log(bow.getDamage());
console.log(bow.isBroken());

staffOfStorm.takeDamage(400);
console.log(staffOfStorm.durability);
console.log(staffOfStorm.getDamage());
console.log(staffOfStorm.isBroken());

//Задача 2
class Weapon {
  constructor({name, attack, startDurability, durability, range}) {
    this.name = name;
    this.attack = attack;
    this.startDurability = startDurability;
    this.durability = durability;
    this.range = range;
  }

  takeDamage(damage) {    
    if (damage > this.startDurability) {
      this.durability = 0;
    } else {
      this.durability = this.startDurability - damage;
    }    
  }

  getDamage() {
    if (this.durability === 0) {
      return 0
    } else if (this.durability >= 0.3*this.startDurability) {
      return this.attack
    } else {
      return (this.attack/2)
    }  
  }

  isBroken() {
    if (this.durability === 0) {
      return true
    } else {
      return false
    }
  }
}

class Hand extends Weapon {
  constructor() {
    super({name: 'Рука', attack: 1, startDurability: Infinity, durability: Infinity, range: 1});
  }
}

const hand = new Hand()

class Bow extends Weapon {
  constructor() {
    super({name: 'Лук', attack: 10, startDurability: 200, durability: 200, range: 3});
  }
}

const bow = new Bow();

class Sword extends Weapon {
  constructor() {
    super({name: 'Меч', attack: 25, startDurability: 500, durability: 500, range: 1});
  }
}

const sword = new Sword();

class Knife extends Weapon {
  constructor() {
    super({name: 'Нож', attack: 5, startDurability: 300, durability: 300, range: 1});
  }
}

const knife = new Knife();

class Staff extends Weapon {
  constructor() {
    super({name: 'Посох', attack: 8, startDurability: 300, durability: 300, range: 2});
  }
}

const staff = new Staff();

class LongBow extends Bow {
  constructor(basedWeapon) {
    super();
    this.name = 'Длинный лук';
    this.basedWeapon = 'Лук';
    this.attack = 15;
    this.range = 4;
  }
}

const longBow = new LongBow();

class Axe extends Sword{
  constructor(basedWeapon) {
    super();
    this.name = 'Секира';
    this.basedWeapon = 'Меч',
    this.attack = 27;
    this.startDurability = 800;
    this.durability = 800;
  }
}

const axe = new Axe();

class StaffOfStorm extends Staff{
  constructor(basedWeapon) {
    super();
    this.name = 'Посох бури';
    this.basedWeapon = 'Посох',
    this.attack = 10;
    this.range = 3;
  }
}

const staffOfStorm = new StaffOfStorm();

bow.takeDamage(150);
console.log(bow.durability);
console.log(bow.getDamage());
console.log(bow.isBroken());

staffOfStorm.takeDamage(400);
console.log(staffOfStorm.durability);
console.log(staffOfStorm.getDamage());
console.log(staffOfStorm.isBroken());

//Задача 3
class StudentLog {
  constructor(name) {
    this.name = name;
    this.diary = {};
  }

  getName() {
    if (!this.name) {
      return 'Ошибка! Заполните поле "Имя"!'
    }else if (this.name) {
      return this.name
    }
  }

  addGrade(grade, subject) {
    if (grade < 1 || grade > 5) {
      return `Вы пытались поставить оценку ${grade} по предмету "${subject}". Допускаются только числа от 1 до 5.`
      if (this.diary[subject] === undefined) {
        return 0
      }else {
        return this.diary[subject].push()
      }
    }

    if (this.diary[subject] === undefined) {
      this.diary[subject] = [];
      return this.diary[subject].push(grade)
    }else {
      return this.diary[subject].push(grade)
    }
  }

  getAverageBySubject(subject) {
    if (this.diary[subject] === undefined) {
      return 0
    }else {
      let averageSubject = this.diary[subject].reduce(function(sum, current) {
        return sum + current;
        },0)/this.diary[subject].length;
      return averageSubject
    }
  }

  getTotalAverage() {
    if (Object.keys(this.diary).length === 0) {
      return 0
    }else {
      let averageScore = 0;
      for (let subject in this.diary) {
        averageScore += this.getAverageBySubject(subject);
      };
      return averageScore / Object.keys(this.diary).length;
    }
  }
}

const log = new StudentLog('Олег Никифоров');

console.log(log.getName());

console.log(log.addGrade(5, 'algebra'));
console.log(log.addGrade(4, 'russian'));
console.log(log.addGrade(3, 'music'));
console.log(log.addGrade(5, 'algebra'));
console.log(log.addGrade(4, 'russian'));
console.log(log.addGrade(3, 'music'));
console.log(log.addGrade(5, 'algebra'));
console.log(log.addGrade(4, 'russian'));
console.log(log.addGrade(3, 'music'));

console.log(log.getAverageBySubject('algebra'))
console.log(log.getAverageBySubject('russian'))
console.log(log.getAverageBySubject('music'))

console.log(log.getTotalAverage())