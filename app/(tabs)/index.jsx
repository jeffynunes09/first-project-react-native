import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Passwords from './Passwords';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={Home}  
        options={{ 
          headerShown: false,
          tabBarShowLabel:false,
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <Ionicons 
                size={size} 
                color={color} 
                name={focused ? 'home' : 'home-outline'} 
              />
            );
          } 
        }} 
      />
       
      <Tab.Screen 
        name="Passwords" 
        component={Passwords}   
        options={{ 
          headerShown: false,
          tabBarShowLabel:false,
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <Ionicons 
                size={size} 
                color={color} 
                name={focused ? 'lock-closed' : 'lock-closed'} 
              />
            );
          } 
        }} 
      />
    </Tab.Navigator>
  );
}
