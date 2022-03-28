import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList } from "react-native";
import CategoryItems from "./src/components/CategoryItems";
import Header from "./src/components/Header";
import Search from "./src/components/Search";

export default function App() {
  const commonCategories = [
    {
      name: "Burger",
      imageUrl: require("./src/components/assets/images/burger.png"),
    },
    {
      name: "Pizza",
      imageUrl: require("./src/components/assets/images/pizza.png"),
    },
    {
      name: "Dessert",
      imageUrl: require("./src/components/assets/images/cake.png"),
    },
    {
      name: "Pasta",
      imageUrl: require("./src/components/assets/images/pasta.png"),
    },
    {
      name: "Steak",
      imageUrl: require("./src/components/assets/images/steak.png"),
    },
    {
      name: "Drinks",
      imageUrl: require("./src/components/assets/images/smoothies.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <Search />

        <FlatList
          data={commonCategories}
          renderItem={({ item }) => {
            return <CategoryItems name={item.name} imageUrl={item.imageUrl} />;
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(category) => category.name}
        />

      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

//  https://www.youtube.com/watch?v=1oYw1uwDZb8&list=PLcPyexXVrsxE_kUoG6XbYBYwkC3JWsnF8&index=5&ab_channel=LaithHarb
