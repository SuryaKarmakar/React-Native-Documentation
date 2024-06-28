import DashboardScreen from '../screens/DashboardScreen';

import CoreComponentsScreen from '../screens/CoreComponentsScreen';
import ApisScreen from '../screens/ApisScreen';

const Routes = [
  {
    name: 'Dashboard Screen',
    component: DashboardScreen,
  },
  {
    name: 'Core Components',
    component: CoreComponentsScreen,
  },
  {
    name: 'Apis',
    component: ApisScreen,
  },
];

export default Routes;
