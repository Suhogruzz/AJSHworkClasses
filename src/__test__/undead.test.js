import Undead from '../undead';

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
