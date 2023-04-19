import Swordsman from '../swordsman';

test('check swordsman properties', () => {
  const template = {
    name: 'SirRyan',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const sirRyan = new Swordsman('SirRyan');
  expect(sirRyan).toEqual(template);
});
