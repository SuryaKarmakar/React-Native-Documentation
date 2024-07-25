# React Native ActivityIndicator

Displays a circular loading indicator.

# Usage :

## size :

Size of the indicator.

```js
<ActivityIndicator size="small" color="#0000ff" />;

<ActivityIndicator size="large" color="#0000ff" />;

<ActivityIndicator size={80} color="red" />;
```

## color :

The foreground color of the spinner.

```js
color = "#0000ff";
```

## animating :

Whether to show the indicator (true) or hide it (false).

```js
const [show, setShow] = useState(true);
...
<ActivityIndicator size={80} color="tomato" animating={show} />
<Button title="Show Hide Indicator" onPress={() => setShow(!show)} />
...
```
