import React from 'react'

import { createStackNavigator } from "@react-navigation/stack";  // <== look the docks


import Products from '../pages/Products/Products';



const AppRoutes = createStackNavigator()


const AppRoutesNavigator = () => {

    return (
        <AppRoutes.Navigator

  

        >

            <AppRoutes.Screen name="Products" options={{headerShown:false}}  component={Products} />

      

        </AppRoutes.Navigator>
    )
}


export default AppRoutesNavigator