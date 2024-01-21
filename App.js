import { StatusBar } from 'expo-status-bar';
import StackScreen from './src/navigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <>
    <NavigationContainer>
      <StackScreen/> 
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
