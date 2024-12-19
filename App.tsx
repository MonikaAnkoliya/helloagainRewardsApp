import React from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AvailableRewardsScreen from './src/screens/AvailableRewardsScreen';
import CollectedRewardsScreen from './src/screens/CollectedRewardsScreen';
import {PersistGate} from 'redux-persist/integration/react';
import {Text, View, ActivityIndicator} from 'react-native';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text>Laden....</Text>
          </View>
        }
        persistor={persistor}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="VerfügbareRewards"
            screenOptions={{
              headerShown: false,
            }}>
            <Tab.Screen
              name="VerfügbareRewards"
              component={AvailableRewardsScreen}
              options={{tabBarLabel: 'Verfügbare Rewards'}}
            />
            <Tab.Screen
              name="GesammelteRewards"
              component={CollectedRewardsScreen}
              options={{tabBarLabel: 'Gesammelte Rewards'}}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
