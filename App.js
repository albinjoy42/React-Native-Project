import React,{Component} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/Login";
import Flexbox from "./src/Flexbox";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./src/Drawer/Home";
import Profile from "./src/Drawer/Profile";
import Help from "./src/Drawer/Help"
import About from "./src/Drawer/About"
import WalletBalance from "./src/Drawer/WalletBalance"
import Records from "./src/Drawer/Records"
import Refund from "./src/Drawer/Refund"
import Setting from "./src/Drawer/Settings"
import DrawerContent from "./src/Drawer/DrawerContent"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Chapter from "./src/Tab/Chapter"
import QNBank from "./src/Tab/QNBank"
import Resources from "./src/Tab/Resources"
import Videos from "./src/Tab/Videos"
import Icon from 'react-native-vector-icons/MaterialIcons'
import { View, TextInput,StyleSheet } from "react-native";
import { Searchbar } from 'react-native-paper';

import Call from "./src/BottomTab/Cake-Axios"
import Instagram from "./src/BottomTab/Cake-Axios";
import Category from "./src/BottomTab/Category"
import Message from "./src/BottomTab/Message"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Drawer=createDrawerNavigator()
const stack = createStackNavigator()
const Tab = createMaterialTopTabNavigator()
const BtmTab = createBottomTabNavigator()

function MyStack(){
  return(
    <stack.Navigator>
      <stack.Screen
        name = "Login"
        component={Login}
        options={{headerShown:false}}
      />
      <stack.Screen
        name = "Flexbox"
        component={Flexbox}
      />
    <stack.Screen
     name ="Drawerkey"
     component={MyDrawer}
     options={{headerShown:false}}
    />
    <stack.Screen
      name = "Top Tab"
      component={MyTopTab}
    />
    <stack.Screen
      name = "Bottom Tab"
      component={MyBtmTab}
      options={{headerShown:false}}
    />
</stack.Navigator>
  )
}
function MyDrawer(){
  return(
      <Drawer.Navigator drawerContent={(props)=><DrawerContent {...props}/>}>
          <Drawer.Screen
              name = "Home"
              component = {Home}
          />
          <Drawer.Screen
              name = "Profile"
              component = {Profile}
          />
          <Drawer.Screen
              name = "Wallet Balance"
              component = {WalletBalance}
          />
          <Drawer.Screen
              name = "Records"
              component = {Records}
          />
          <Drawer.Screen
              name = "Refund and Policies"
              component = {Refund}
          />
          <Drawer.Screen
              name = "Settings"
              component = {Setting}
          />
          <Drawer.Screen
              name = "Google Map"
              component = {About}
          />
          <Drawer.Screen
              name = "Help"
              component = {Help}
          />
          <Drawer.Screen
              name = "Logout"
              component = {Login}
          />
      </Drawer.Navigator>
      
  )
}
// function SearchBox(){
//   return(
//     <View>
//       <Searchbar
//         placeholder="Search for a service" style = {styles.srch} inputStyle={styles.searchbarInput}
//       />
//     </View>
//   )
// }
function MyTopTab(){
  return(
    <View style={styles.container}>
      <View style={styles.srchcontainer}>
      <Icon name="search" size={25} color='#000'/>
        <TextInput placeholder="Search for a service" placeholderTextColor='#000' style={styles.srch}>
        </TextInput>
      </View>
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle : {fontSize:12, fontWeight:'bold'},
        TabBarItemStyle : {width:100},
        tabBarStyle:{backgroundColor:'#bbf'}
      }}>
        
      <Tab.Screen
        name = "Videos"
        component={Videos}
        options={{
          tabBarActiveTintColor:'red',
          tabBarInactiveTintColor:'blue',
          tabBarIcon:(focused)=>
          focused ? <Icon name='video-library' size={24} color='red'/> : <Icon name='video-library' size={24} color='blue'/>
        }}
      />
      <Tab.Screen
        name = "Chapter"
        component={Chapter}
        options={{
          tabBarActiveTintColor:'red',
          tabBarInactiveTintColor:'blue',
          tabBarIcon:(focused)=>
          focused ? <Icon name='library-books' size={24} color='red'/> : <Icon name='library-books' size={24} color='blue'/>
        }}
      />
      <Tab.Screen
        name = "Resources"
        component={Resources}
        options={{
          tabBarActiveTintColor:'red',
          tabBarInactiveTintColor:'blue',
          tabBarIcon:(focused)=>
          focused ? <Icon name='people' size={24} color='red'/> : <Icon name='people' size={24} color='blue'/>
        }}
      />
      <Tab.Screen
        name = "QN Bank"
        component={QNBank}
        options={{
          tabBarActiveTintColor:'red',
          tabBarInactiveTintColor:'blue',
          tabBarIcon:(focused)=>
          focused ? <Icon name='question-answer' size={24} color='red'/> : <Icon name='question-answer' size={24} color='blue'/>
        }}
      />
    </Tab.Navigator>
    </View>
  )
}

function MyBtmTab(){
  return(
        <BtmTab.Navigator
          screenOptions={{
            tabBarLabelStyle : {fontSize:18, fontWeight:'bold'},
            TabBarItemStyle : {width:100},
            tabBarStyle:{backgroundColor:'#fff',paddingBottom:10,height:60}
          }}>
            
          <BtmTab.Screen
            name = "Cakes"
            component={Instagram}
            options={{
              tabBarActiveTintColor:'red',
            tabBarInactiveTintColor:'blue',
            tabBarIcon: ({ focused}) => (
              <Icon name="image-search" size={24} color={focused ? 'red' : 'blue'} />
            ),
          }}
        />
          <BtmTab.Screen
            name = "Message"
            component={Message}
            options={{
              tabBarActiveTintColor:'red',
            tabBarInactiveTintColor:'blue',
            tabBarIcon: ({ focused}) => (
              <Icon name="message" size={24} color={focused ? 'red' : 'blue'} />
            ),
          }}
        />
          <BtmTab.Screen
            name = "Category"
            component={Category}
            options={{
              headerShown:false,
              tabBarActiveTintColor:'red',
            tabBarInactiveTintColor:'blue',
              tabBarIcon:({focused})=>(
              <Icon name='category'size={24} color={focused ? 'red' : 'blue'} />
              ),
            }}
          />
        </BtmTab.Navigator>
  )
}

export default function App(){
  return(
    
    <NavigationContainer>
      {/* <SearchBox/> */}
      <MyStack/>
    </NavigationContainer>
  )
}

const styles=StyleSheet.create({
  container : {
    flex : 1
  },
  srchcontainer : {
    height : 60,
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor : '#fff',
    flexDirection :'row',
    marginBottom : 1
  },
  srch : {
    backgroundColor: '#ddd',
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    width : '75%',
    height : 40
  }
  
})