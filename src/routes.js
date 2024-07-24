import ReactNative from './ReactNative';
import CoreComponents from './CoreComponents';
import ReactNativeApis from './ReactNativeApis';

import ActivityIndicator from './CoreComponents/ActivityIndicator';
import Button from './CoreComponents/ActivityIndicator';
import FlatList from './CoreComponents/ActivityIndicator';
import Image from './CoreComponents/ActivityIndicator';
import ImageBackground from './CoreComponents/ActivityIndicator';
import KeyboardAvoidingView from './CoreComponents/ActivityIndicator';
import Modal from './CoreComponents/ActivityIndicator';
import Pressable from './CoreComponents/ActivityIndicator';
import RefreshControlBase from './CoreComponents/ActivityIndicator';
import ScrollView from './CoreComponents/ActivityIndicator';
import SectionList from './CoreComponents/ActivityIndicator';
import StatusBar from './CoreComponents/ActivityIndicator';
import Switch from './CoreComponents/ActivityIndicator';
import Text from './CoreComponents/ActivityIndicator';
import TextInput from './CoreComponents/ActivityIndicator';
import TouchableHighlight from './CoreComponents/ActivityIndicator';
import TouchableOpacity from './CoreComponents/ActivityIndicator';
import TouchableWithoutFeedback from './CoreComponents/ActivityIndicator';
import View from './CoreComponents/ActivityIndicator';
import VirtualizedList from './CoreComponents/ActivityIndicator';

export const RouteReactNative = [
  {
    name: 'Core Components',
    component: CoreComponents,
  },
  {
    name: 'React Native Apis',
    component: ReactNativeApis,
  },
];

export const RouteCoreComponents = [
  {
    name: 'ActivityIndicator',
    component: ActivityIndicator,
  },
  {
    name: 'Button',
    component: Button,
  },
  {
    name: 'FlatList',
    component: FlatList,
  },
  {
    name: 'Image',
    component: Image,
  },
  {
    name: 'ImageBackground',
    component: ImageBackground,
  },
  {
    name: 'KeyboardAvoidingView',
    component: KeyboardAvoidingView,
  },
  {
    name: 'Modal',
    component: Modal,
  },
  {
    name: 'Pressable',
    component: Pressable,
  },
  {
    name: 'RefreshControlBase',
    component: RefreshControlBase,
  },
  {
    name: 'ScrollView',
    component: ScrollView,
  },
  {
    name: 'SectionList',
    component: SectionList,
  },
  {
    name: 'StatusBar',
    component: StatusBar,
  },
  {
    name: 'Switch',
    component: Switch,
  },
  {
    name: 'Text',
    component: Text,
  },
  {
    name: 'TextInput',
    component: TextInput,
  },
  {
    name: 'TouchableHighlight',
    component: TouchableHighlight,
  },
  {
    name: 'TouchableOpacity',
    component: TouchableOpacity,
  },
  {
    name: 'TouchableWithoutFeedback',
    component: TouchableWithoutFeedback,
  },
  {
    name: 'View',
    component: View,
  },
  {
    name: 'VirtualizedList',
    component: VirtualizedList,
  },
];

export const RouteReactNativeApis = [];

const Routes = [
  {
    name: 'React Native',
    component: ReactNative,
  },
  ...RouteReactNative,
  ...RouteCoreComponents,
  ...RouteReactNativeApis,
];

export default Routes;
