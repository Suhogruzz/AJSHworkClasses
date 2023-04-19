import Bowerman from '../bowerman';

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
