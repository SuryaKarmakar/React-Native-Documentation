import ReactNative from './ReactNative';
import CoreComponents from './CoreComponents';
import ReactNativeApis from './ReactNativeApis';

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

export const RouteCoreComponents = [];

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
