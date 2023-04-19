import Daemon from '../daemon';

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
