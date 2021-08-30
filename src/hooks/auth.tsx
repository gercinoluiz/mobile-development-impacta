import React from 'react';

import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import api from "../api";


import AsyncStorage from '@react-native-community/async-storage'
import { useEffect } from 'react-native/node_modules/@types/react';



const AuthContext = createContext<ISiginInfo>({} as ISiginInfo)



const AuthProvider: React.FC = ({ children }) => {


    const [user, setUser] = useState('')
    const [token, setToken] = useState('')
    const [signed, setSigned] = useState(false)

    // useEffect(() => {

    //     async function loadStorageData() {

    //         const storageToken = await AsyncStorage.getItem('@Auth:token')

    //         if (storageToken) {
    //             setSigned(true)
    //         } else {
    //             setSigned(false)

    //         }

    //     }

    //     loadStorageData()

    // }, [])

    const setCurrentUser = (name: string) => {
        setUser(name)
    }

    const handleSignIn = async (name: string, password: string) => {

        try {



            setCurrentUser(name)

            console.log({name})

            await api.post('user/login', {
                login: name,
                password: password
            }).then(response => {
                



                // AsyncStorage.setItem('@Auth:token', JSON.stringify(response.data))
                setToken(response.data)
                setSigned(true)

            })

        } catch (error) {

            console.log({ error })

        }
    }


    const handleSignOut = async () => {
        setSigned(false)

    }

    return (
        <AuthContext.Provider value={{ user, setCurrentUser, signed, handleSignIn, handleSignOut }}>
            {children}
        </AuthContext.Provider>
    )



}


const useAuth = () => {

    const context = useContext(AuthContext)

    return context
}



export { useAuth, AuthProvider }