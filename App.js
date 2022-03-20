import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Search from './src/components/Search';


export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Search/>
      <StatusBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});


//  https://www.youtube.com/watch?v=1oYw1uwDZb8&list=PLcPyexXVrsxE_kUoG6XbYBYwkC3JWsnF8&index=5&ab_channel=LaithHarb