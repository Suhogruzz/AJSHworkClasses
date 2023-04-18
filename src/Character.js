export default class Character {
  constructor(name, type, health, level, attack, defence) {
    if ((name.length < 2) || (name.length > 10)) {
      throw new Error('Error: name must be between 2 and 10 characters');
    }
    const playerClasses = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!playerClasses.includes(type)) {
      throw new Error(`Error: type must be one of these:${playerClasses.join(', ')}`);
    }
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Your hero is dead');
    }
    this.level += 1;
    this.health = 100;
    this.attack *= 1.2;
    this.defence *= 1.2;
  }

  damage(points) {
    if (this.health <= 0) {
      throw new Error('Your hero is dead');
    }
    this.health -= points * (1 - this.defence / 100);
  }
}
