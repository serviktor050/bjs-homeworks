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