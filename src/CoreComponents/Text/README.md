# React Native Text Component

A React component for displaying text.

## Usage :

Import Text from 'react-native' and then use it.

```js
<Text>This is Normal Text Component</Text>
```

## Nested Text Component :

When we use <b>Text component into another Text component</b> then the <b>children component inherit parent component style</b>

```js
<Text style={{ color: "tomato" }}>
  Text Component can be 
  <Text style={{ fontSize: 20, fontWeight: "bold" }}>Nested</Text>
</Text>
```

# Props

## ellipsizeMode :

When <b>numberOfLines</b> and <b>width</b> is set, this prop defines how text will be truncated. numberOfLines must be set in conjunction with this prop.
This can be one of the following values :

- head - The line is displayed so that the end fits in the container and the missing text at the beginning of the line is indicated by an ellipsis glyph. e.g., "...wxyz"
- middle - The line is displayed so that the beginning and end fit in the container and the missing text in the middle is indicated by an ellipsis glyph. "ab...yz
- tail - The line is displayed so that the beginning fits in the container and the missing text at the end of the line is indicated by an ellipsis glyph. e.g., "abcd..."
- clip - Lines are not drawn past the edge of the text container.

```js
<Text ellipsizeMode={"tail"} numberOfLines={1} style={{ width: "50%" }}>
  This is ellipsizeMode text learn more about ellipsizeMode
</Text>
```

## onPress :

This function is called on press.

```js
<Text onPress={() => alert("onPress")}>Text Component onPress Listener</Text>
```

## selectable :

Lets the user select text, to use the native copy and paste functionality.

```js
<Text selectable={true}>You can select this text</Text>
```

## adjustsFontSizeToFit :

Specifies whether fonts should be scaled down automatically to fit given style constraints. it resize automaticaly depends on container size.

```js
<View style={{ width: 100, height: 10 }}>
  <Text adjustsFontSizeToFit={true}>Adjusts Font Size To Fit</Text>
</View>
```
