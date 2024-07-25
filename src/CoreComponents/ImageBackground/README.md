# React Native ImageBackground

A common feature request from developers familiar with the web is background-image. To handle this use case, you can use the <ImageBackground> component, which has the same props as <Image>, and add whatever children to it you would like to layer on top of it.

# Usage :

## Image Source :

The image source either a <b>remote URL</b> or a <b>local file</b> resource.

- If we set image source from local file, then we need to specify the full local image path into require() function.

```js
<ImageBackground source={require("./backGroundImg.png")}>
  {/* children component */}
</ImageBackground>
```

- If we set image source from remote URL, then we need to specify the full URL link as a uri format.

```js
<ImageBackground source={{ uri: "https://reactjs.org/logo-og.png" }}>
  {/* children component */}
</ImageBackground>
```

## style :

You can set your background <b>View style</b>.

```js
style={{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    }}
```

## imageStyle :

You can set your background <b>Image style</b>.

```js
 imageStyle={{ borderRadius: 20 }}
```
