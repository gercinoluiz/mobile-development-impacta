import React from "react";
import Sigin from "../pages/Sigin/Signin";


// I import this to create the auth routes I want
// 1. It must be a stackNavigator
import { createStackNavigator } from "@react-navigation/stack";
import AppRoutesNavigator from "./app.routes";
import AuthRoutes from "./auth.routes";
import { useAuth } from "../hooks/auth";





// ## Esse arquivo vai ser o condicional para mostrar as rotas autenticadas ou nao

const AuthStack = createStackNavigator()


const Routes: React.FC = () => {

    const { signed } = useAuth()

    console.log({signed})

    return signed ? <AppRoutesNavigator /> : <AuthRoutes />
}


export default Routes
