import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ConsultClimate from '../ConsultClimate';
import Start from '../Start';
const MainNavigator = createStackNavigator(
  {
    Start,
    ConsultClimate,
  },
  {
    initialRouteName: 'Start',
    defaultNavigationOptions: {
      header: null,
    },
  },
);

export default createAppContainer(MainNavigator);
