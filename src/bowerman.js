import Character from './Character';

export default class Bowerman extends Character {
  constructor(name, type = 'Bowerman', health = 100, level = 1, attack = 25, defence = 25) {
    super(name, type, health, level, attack, defence);
  }
}
