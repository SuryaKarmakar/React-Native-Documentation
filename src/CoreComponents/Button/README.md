# React Native Button

## Usage :

A basic button component that should render nicely on any platform. Supports a minimal level of customization.in basic button <b>onPress</b> and <b>title</b> both props are <b>Required</b>

```js
<Button onPress={() => alert("button")} title="presse me" />
```

# Props :

## onPress :

Handler to be called when the user taps the button.

```js
<Button onPress={() => alert("button")} title="presse me" />
```

## title :

Text to display inside the button. On Android the given title will be converted to the uppercased form.

```js
<Button onPress={() => alert("button")} title="presse me" />
```

## color :

This props change the button color.

```js
<Button onPress={() => alert("button")} title="presse me" color="#f194ff" />
```

## disabled :

If true, disable all interactions for this component.it disable the onPress handler.

```js
const [disabled, setDisabled] = useState(true);
...
<View style={styles.body_row}>
  <Button
    onPress={() => alert("now i am free")}
    title="button 1"
    disabled={disabled}
  />
  <Button
    onPress={() => alert("button")}
    title="enable button 1"
    onPress={() => setDisabled(false)}
  />
</View>
...
```
