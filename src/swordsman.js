import Character from './Character';

export default class Swordsman extends Character {
  constructor(name, type = 'Swordsman', health = 100, level = 1, attack = 40, defence = 10) {
    super(name, type, health, level, attack, defence);
  }
}
