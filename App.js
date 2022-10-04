import { StyleSheet, Text, View } from 'react-native';
import FirstContextProvider from './src/store/context/FirstContext';
import Navigation from './src/navigation';

export default function App() {
  return (
    <FirstContextProvider>
     <Navigation/>
    </FirstContextProvider>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
