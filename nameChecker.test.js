import { checkForName } from "./src/client/js/nameChecker";

test('Picard triggers alert', () => {
    global.alert = jest.fn();
    checkForName('Picard');
    expect(global.alert).toHaveBeenCalledTimes(1);
  });

  test('Name not in array does not trigger alert', () => {
    global.alert = jest.fn();
    checkForName('Kris');
    expect(global.alert).toHaveBeenCalledTimes(0);
  });