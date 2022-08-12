import ErrorRepository from '../ErrorRepository';

test('текст ошибки', () => {
  const error = new ErrorRepository();
  error.add(4242, 'ошибка запроса');
  expect(error.translate(4242)).toBe('ошибка запроса');
});

test('Unknown error', () => {
  const error = new ErrorRepository();
  expect(error.translate(42)).toBe('Unknown error');
});
