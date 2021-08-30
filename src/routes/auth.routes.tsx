import React from "react";
import Sigin from "../pages/Sigin/Signin";


// I import this to create the auth routes I want
// 1. It must be a stackNavigator
import { createStackNavigator } from "@react-navigation/stack";  // <== look the docks
import Users from "../pages/User/Users";

const AuthStack = createStackNavigator()


const AuthRoutes: React.FC = () => {
    return (
        <AuthStack.Navigator
        
        >
            <AuthStack.Screen options={{headerShown:false}}  name='Sigin' component={Sigin} />

            <AuthStack.Screen options={{headerShown:false}}  name="Users"  component={Users} />

        </AuthStack.Navigator>
    )
}


export default AuthRoutes
