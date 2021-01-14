import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import SearchSuggestionsScreen from '../screens/SearchSuggestionsScreen';


export const AppTabNavigator = createBottomTabNavigator({
    GetRecommendations: {
        screen: AppStackNavigator,
        navigationOptions: {
            /*tabBarIcon : <Image source={require("../assets/request-list.png")} style={{width:20, height:20}}/>,*/
            tabBarLabel: "Recommendations",
        }
    },
    SearchSuggestions: {
        screen: SearchSuggestionsScreen,
        navigationOptions: {
            /*tabBarIcon : <Image source={require("../assets/request-book.png")} style={{width:20, height:20}}/>,*/
            tabBarLabel: "Search Suggestions",
        }
    }
});
