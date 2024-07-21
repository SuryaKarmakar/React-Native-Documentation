## Type of components:

1. Core components -

React Native comes with several core components that do not require any additional packages and comes with the React Native package.
These core components include view, text, image, text and push, scrollview and many more. 

2. Community components -

The community around React Native is growing strong and many components are created by the community for the community. The popular community 
components include React navigation, React Native screens, React Native maps, React Native video, and many more.

3. Custom native components -

React Native lets you build custom iOS or Android components based on your applications unique needs. These are your native components and you 
own them. These are written in native code, which means working with native iOS code in Swift and Objective-C,or native Android code in Java or 
Kotlin.

- ScrollView - ScrollView component always needs a bounded height, which can be directly set by providing a height to the view.

- Cross-Platform Developer -> React native developer

- Flatlist:

This component renders the items lazily. What does lazy rendering mean? Well, instead of rendering the entire list at once, it only renders the items of the list
as soon as they need to appear on screen. In addition to lazy rendering, the flat list component can take on the features of the Scroll View component. To better understand the benefit of lazy rendering, let's first revisit the Scroll View component. An app using this component would render all items in the list at once, regardless of whether or not they are on the screen at that moment. In contrast, with lazy rendering, items are only rendered when they are about to appear on the screen and are removed when the user scrolls away from them. This results in faster rendering and superior performance. 
