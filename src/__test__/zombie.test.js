import Zombie from '../zombie';

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
