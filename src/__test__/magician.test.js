import Magician from '../magician';

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
