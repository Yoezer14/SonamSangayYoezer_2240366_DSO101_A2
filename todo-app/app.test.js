function addTodo(list, item) {
  return [...list, item];
}

function removeTodo(list, index) {
  return list.filter((_, i) => i !== index);
}

test('adds a todo item', () => {
  const result = addTodo(['homework'], 'study');
  expect(result).toContain('study');
});

test('removes a todo item', () => {
  const result = removeTodo(['homework', 'study'], 0);
  expect(result).not.toContain('homework');
});

test('empty list has 0 items', () => {
  expect([].length).toBe(0);
});