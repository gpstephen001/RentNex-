import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Profile } from './Profile';
import { Ionicons } from '@expo/vector-icons';
import { Theme } from '../Components/Theme';
import { SafeAreaView } from 'react-native-safe-area-context';

function Home({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ justifyContent: "center", padding: 20, height: "auto", width: "auto" }}>
        <View>
          <Text style={styles.Header}>Welcome</Text>
          <TextInput style={styles.TextInput} placeholder='Search' />
          <ScrollView vertical >
            <Image source={require("../../assets/house 7.jpg")} style={styles.img} />
            <View>
              <Text style={styles.TextT}>3 Bedrooms Flat</Text>
              <Text style={styles.price}>Price: $16,000</Text>
              <Text style={styles.TextDes}> jhjhsdfhwiefuihwefjohhjhuh8fhehyg9fwee</Text>
            </View>
            <Image source={require("../../assets/house 3.jpg")} style={styles.img} />
            <View>
              <Text style={styles.TextT}>2 Bedrooms Flat</Text>
              <Text style={styles.price}>Price: $13,000</Text>
              <Text style={styles.TextDes}>jhjhsdfhwiefuihwefjohhiohwehiqoweiqrqwrq</Text>
            </View>
            <Image source={require("../../assets/house 2.jpg")} style={styles.img} />
            <View>
              <Text style={styles.TextT}>4 Bedrooms Luxury Duplex</Text>
              <Text style={styles.price}>Price: $40,000</Text>
              <Text style={styles.TextDes}>jhjhsdfhwiefuihwefjohhiohwehiqoweiqrqwrq</Text>
            </View>
            <Image source={require("../../assets/house 5.jpg")} style={styles.img} />
            <View>
              <Text style={styles.TextT}>3 Bedrooms Mansion</Text>
              <Text style={styles.price}>Price: $28,000</Text>
              <Text style={styles.TextDes}>jhjhsdfhwiefuihwefjohhiohwehiqoweiqrqwrq</Text>
            </View>
            <Image source={require("../../assets/house 10.jpg")} style={styles.img} />
            <View>
              <Text style={styles.TextT}>3 Bedrooms Luxury Apartment</Text>
              <Text style={styles.price}>Price: $33,000</Text>
              <Text style={styles.TextDes}>jhjhsdfhwiefuihwefjohhiohwehiqoweiqrqwrq</Text>
            </View>
            <Image source={require("../../assets/house 8.jpg")} style={styles.img} />
            <View>
              <Text style={styles.TextT}>2 Bedrooms Flat</Text>
              <Text style={styles.price}>Price: $20,000</Text>
              <Text style={styles.TextDes}>jhjhsdfhwiefuihwefjohhiohwehiqoweiqrqwrq</Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  img: {
    width: 390,
    height: 250,
    borderRadius: 8,
    padding: 5,
    margin: 0,
    alignItems: "center",

  },
  TextT: {
    margin: 10,
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 5,
    borderBottomWidth: 2,
  },
  TextDes: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 50,
    borderBlockEndColor: "#B7E4C7",
    borderBottomWidth: 3,
    fontSize: 15,
    fontWeight: "500"

  },
  TextInput: {
    backgroundColor: "#ffffffd0",
    padding: 12,
    borderWidth: 1,
    borderRadius: 40,
    borderColor: "#B7E4C7",
    marginTop: 1,
    margin: 10
  },
  Header: {
    paddingTop: 1,
    fontSize: 40,
    fontWeight: "bold",
    textAlign: 'center',

  },
  price: {
    textAlign: "auto",
    fontStyle: "italic",
    fontWeight: "bold",
    color: "#578FCA",
    width: 180,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,

  },
})


const Tab = createBottomTabNavigator();

export function Homescreen() {


  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          }
          else if (route.name === 'PostProduct') {
            iconName = focused ? 'bag-add' : 'bag-add-outline';
          }
          else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          }
          else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={25} color={color} />;
        },
        tabBarActiveTintColor: Theme.colors.primary,
        tabBarInactiveTintColor: Theme.colors.gray,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}