import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from './pages/welcome/Welcome';
import Login from './pages/login/Login';
import ButtomTab from './pages/buttomTab/ButtomTab';
import Detail from './pages/detail/Detail';
import Register from './pages/register/Register';

const {Navigator, Screen} = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <>
      <NavigationContainer>
        <Navigator initialRouteName="Welcome">
          <Screen
            name="Welcome"
            component={Welcome}
            options={{
              headerShown: false,
            }}
          />
          <Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Screen
            name="ButtomTab"
            component={ButtomTab}
            options={{
              headerShown: false,
            }}
          />
          <Screen
            name="Detail"
            component={Detail}
            options={{
              headerShown: false,
            }}
          />
          <Screen
            name="Register"
            component={Register}
            options={{
              headerShown: false,
            }}
          />
        </Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

