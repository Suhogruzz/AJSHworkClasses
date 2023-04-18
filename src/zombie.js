import Character from './Character';

export default class Zombie extends Character {
  constructor(name, type = 'Zombie', health = 100, level = 1, attack = 40, defence = 10) {
    super(name, type, health, level, attack, defence);
  }
}
