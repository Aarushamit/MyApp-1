import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import RecommendationsScreen from '../screens/RecommendationsScreen';

export const AppStackNavigator = createStackNavigator({
    Recommendtions: {
        screen: RecommendationsScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    /* RecieverDetails : {
       screen : RecieverDetailsScreen,
       navigationOptions:{
         headerShown : false
       }
     }*/
},
    {
        initialRouteName: 'Recommendations'
    }
);
