import React from 'react'
import { View, Text, Image } from 'react-native';
import FAB from '../../components/FAB';

import { TextInput } from 'react-native-paper';
import styles from './styles';
import { Button } from 'react-native-paper';

import { Formik } from 'formik'
import api from '../../api';
import { useAuth } from '../../hooks/auth';

import cart from '../../assets/cart.png'
import { TouchableOpacity } from 'react-native-gesture-handler';



import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView } from 'react-native';



const Sigin: React.FC = () => {

    const { handleSignIn } = useAuth()

    const navigation = useNavigation();


    const handleNavigate = () =>{

        navigation.navigate('Users')
    }

    return (
        <View style={styles.mainView}>

            <View>
                <Image style={styles.image} source={cart} />
            </View>


            <Formik

                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    address: '',
                    age: ''
                }}

                onSubmit={async ({ name, email, password, address, age }, { resetForm }) => {



                    const userPassword = password

                    handleSignIn(name, password)



                }}
            >

                {
                    (formikprops => (

                        <>
                            <TextInput
                                label="User"
                                style={styles.textInput}


                                onChangeText={formikprops.handleChange('name')}
                                value={formikprops.values.name}
                            />




                            <TextInput
                                label="Password"
                                secureTextEntry={true}
                                style={styles.textInput}
                                onChangeText={formikprops.handleChange('password')}
                                value={formikprops.values.password}

                            />

                            <Button icon="lock" style={styles.saveButton} mode="contained" onPress={() => formikprops.handleSubmit()}>
                                Sign In
                            </Button>

                        </>
                    ))
                }
            </Formik>



            <View style={styles.signupView}>
                <Text >Don't you have an account?  </Text><TouchableOpacity onPress={handleNavigate}><Text style={styles.signupText}>  Sign Up</Text></TouchableOpacity>
            </View>

        </View>
    );
}

export default Sigin;