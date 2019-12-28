import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ConsultClimate from '../ConsultClimate';
import Start from '../Start';

//Definição das rotas para a navegação entre as telas, é iniciado na tela de 'Login'
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
