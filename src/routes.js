import ReactNative from './ReactNative';
import CoreComponents from './CoreComponents';
import ReactNativeApis from './ReactNativeApis';

import ActivityIndicator from './CoreComponents/ActivityIndicator';
import Button from './CoreComponents/Button';
import FlatList from './CoreComponents/FlatList';
import Image from './CoreComponents/Image';
import ImageBackground from './CoreComponents/ImageBackground';
import KeyboardAvoidingView from './CoreComponents/KeyboardAvoidingView';
import Modal from './CoreComponents/Modal';
import Pressable from './CoreComponents/Pressable';
import RefreshControl from './CoreComponents/RefreshControl';
import ScrollView from './CoreComponents/ScrollView';
import SectionList from './CoreComponents/SectionList';
import StatusBar from './CoreComponents/StatusBar';
import Switch from './CoreComponents/Switch';
import Text from './CoreComponents/Text';
import TextInput from './CoreComponents/TextInput';
import TouchableHighlight from './CoreComponents/TouchableHighlight';
import TouchableOpacity from './CoreComponents/TouchableOpacity';
import TouchableWithoutFeedback from './CoreComponents/TouchableWithoutFeedback';
import View from './CoreComponents/View';
import VirtualizedList from './CoreComponents/VirtualizedList';

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
    name: 'RefreshControl',
    component: RefreshControl,
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
