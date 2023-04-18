import Character from './Character';

export default class Magician extends Character {
  constructor(name, type = 'Magician', health = 100, level = 1, attack = 10, defence = 40) {
    super(name, type, health, level, attack, defence);
  }
}
