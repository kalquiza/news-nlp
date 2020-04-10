import { handleSubmit } from "./src/client/js/formHandler"

test('handleSubmit displays alert on invalid url', () => {
    global.alert = jest.fn();
    document.body.innerHTML = '<input id="input" type="text" name="input" value="test" onblur="onBlur()" placeholder="URL">'
    handleSubmit(new MouseEvent('click'));
    expect(global.alert).toHaveBeenCalledTimes(1);
})