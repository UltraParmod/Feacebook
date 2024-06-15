import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import VectorIcons from '../utlis/VectorIcons';
import {Colors} from '../utlis/Colors';
import {TabData} from '../data/TabData';

const Tab = createMaterialTopTabNavigator();

const TopTabar = () => {
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
      initialRouteName='Chats'
        screenOptions={() => ({
          tabBarShowLabel: false,
          tabBarActiveTintColor:Colors.primaryColor,
          tabBarInactiveTintColor:Colors.grey
        })}>
        {TabData.map(tab => (
          <Tab.Screen
          key={tab.id}
            name={tab.name}
            component={tab.route}
            options={{
              tabBarIcon: ({color,focused}) => (
                <VectorIcons
                  type={focused ? tab.activeiconType : tab.inactiveiconType}
                  name={focused ? tab.activeiconName : tab.inactiveiconName}
                  size={focused ? tab.unFocusSize :tab.size }
                  color={color} 
                />
              ),
            }}
          />
        ))}

        {/* <Tab.Screen name="Video" component={Video} 
        options={{
            tabBarIcon:()=>(
                        <VectorIcons type='Entypo' name='home' size={20} color={Colors.black}/>
            )}} 
      />
      <Tab.Screen name="User" component={User} 
        options={{
            tabBarIcon:()=>(
                        <VectorIcons type='Entypo' name='home' size={20} color={Colors.black}/>
            )}} 
      />
      <Tab.Screen name="Cateory" component={Cateory} 
        options={{
            tabBarIcon:()=>(
                        <VectorIcons type='Entypo' name='home' size={20} color={Colors.black}/>
            )}} 
      />
      <Tab.Screen name="Notification" component={Notification} 
        options={{
            tabBarIcon:()=>(
                        <VectorIcons type='Entypo' name='home' size={20} color={Colors.black}/>
            )}} 
      />
      <Tab.Screen name="Setting" component={Setting} 
        options={{
            tabBarIcon:()=>(
                        <VectorIcons type='Entypo' name='home' size={20} color={Colors.black}/>
            )}} 
      /> */}
      </Tab.Navigator>
    </View>
  );
};

export default TopTabar;

const styles = StyleSheet.create({});
