import * as React from 'react';
import { BottomNavigation, Button, Text } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import App from './HomeScreen';
import DetailsScreen from './DetailsScreen';



const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'HomeScreen', title: 'HomeScreen', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'DetailsScreen', title: 'DetailsScreen', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    HomeScreen: App,
    DetailsScreen:DetailsScreen,
  });

  return (
    <SafeAreaProvider>
      <BottomNavigation  
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      />
    </SafeAreaProvider>
  );
};

export default MyComponent;