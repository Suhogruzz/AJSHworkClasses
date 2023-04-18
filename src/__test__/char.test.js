import Character from '../Character';
import Bowerman from '../bowerman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Undead from '../undead';
import Zombie from '../zombie';
import Daemon from '../daemon';

test('check class properties', () => {
  const template = {
    name: 'SirRyan',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const testClass = new Character('SirRyan', 'Swordsman', 100, 1, 10, 40);
  expect(testClass).toEqual(template);
});

test('check min name length error', () => {
  expect(() => { new Character('A', 'Swordsman', 100, 1, 10, 40); }).toThrow('Error: name must be between 2 and 10 characters');
});

test('check max name length error', () => {
  expect(() => { new Character('SirRyanGoslingTheDriver', 'Swordsman', 100, 1, 40, 10); }).toThrow('Error: name must be between 2 and 10 characters');
});

test('check wrong type error', () => {
  expect(() => { new Character('SirRyan', 'Sword', 100, 1, 10, 40); }).toThrow('Error: type must be one of these:Bowerman, Swordsman, Magician, Daemon, Undead, Zombie');
});

test('check bowerman properties', () => {
  const template = {
    name: 'SirRyan',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const sirRyan = new Bowerman('SirRyan');
  expect(sirRyan).toEqual(template);
});

test('check swordsman properties', () => {
  const template = {
    name: 'SirRyan',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const sirRyan = new Swordsman('SirRyan');
  expect(sirRyan).toEqual(template);
});

test('check magician properties', () => {
  const template = {
    name: 'SirRyan',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const sirRyan = new Magician('SirRyan');
  expect(sirRyan).toEqual(template);
});

test('check undead properties', () => {
  const template = {
    name: 'SirRyan',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const sirRyan = new Undead('SirRyan');
  expect(sirRyan).toEqual(template);
});

test('check zombie properties', () => {
  const template = {
    name: 'SirRyan',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const sirRyan = new Zombie('SirRyan');
  expect(sirRyan).toEqual(template);
});

test('check daemon properties', () => {
  const template = {
    name: 'SirRyan',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const sirRyan = new Daemon('SirRyan');
  expect(sirRyan).toEqual(template);
});

test('check levelUp() method', () => {
  const template = {
    name: 'SirRyan',
    type: 'Swordsman',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  };
  const sirRyan = new Character('SirRyan', 'Swordsman', 100, 1, 10, 40);
  sirRyan.levelUp();
  expect(sirRyan).toEqual(template);
});

test('check levelUp() method when hero is dead', () => {
  const sirRyan = new Character('SirRyan', 'Swordsman', 0, 1, 10, 40);
  expect(() => { sirRyan.levelUp(); }).toThrow('Your hero is dead');
});

test('check damage() method', () => {
  const template = {
    name: 'SirRyan',
    type: 'Swordsman',
    health: 94,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const sirRyan = new Character('SirRyan', 'Swordsman', 100, 1, 10, 40);
  sirRyan.damage(10);
  expect(sirRyan).toEqual(template);
});

test('check damage() method when hero is dead', () => {
  const sirRyan = new Character('SirRyan', 'Swordsman', 0, 1, 10, 40);
  expect(() => { sirRyan.damage(10); }).toThrow('Your hero is dead');
});
