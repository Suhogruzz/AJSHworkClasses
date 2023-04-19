import Character from '../Character';
import Swordsman from '../swordsman';

test('check class properties', () => {
  const template = {
    name: 'SirRyan',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: undefined,
    defence: undefined,
  };
  const testClass = new Character('SirRyan', 'Swordsman');
  expect(testClass).toEqual(template);
});

test('check min name length error', () => {
  expect(() => { new Character('A', 'Swordsman'); }).toThrow('Error: name must be between 2 and 10 characters');
});

test('check max name length error', () => {
  expect(() => { new Character('SirRyanGoslingTheDriver', 'Swordsman'); }).toThrow('Error: name must be between 2 and 10 characters');
});

test('check wrong type error', () => {
  expect(() => { new Character('SirRyan', 'Sword'); }).toThrow('Error: type must be one of these:Bowerman, Swordsman, Magician, Daemon, Undead, Zombie');
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
  const sirRyan = new Swordsman('SirRyan');
  sirRyan.levelUp();
  expect(sirRyan).toEqual(template);
});

test('check levelUp() method when hero is dead', () => {
  const sirRyan = new Swordsman('SirRyan');
  sirRyan.damage(1000);
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
  const sirRyan = new Swordsman('SirRyan');
  sirRyan.damage(10);
  expect(sirRyan).toEqual(template);
});

test('check damage() method when hero is dead', () => {
  const sirRyan = new Swordsman('SirRyan');
  sirRyan.damage(1000);
  expect(() => { sirRyan.damage(10); }).toThrow('Your hero is dead');
});
