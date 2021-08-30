import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import FAB from '../../components/FAB';

import { TextInput } from 'react-native-paper';
import styles from './styles';
import { Button } from 'react-native-paper';

import { Formik } from 'formik'
import api from '../../api';
import { useAuth } from '../../hooks/auth';
import { useNavigation } from '@react-navigation/native';

import * as yup from 'yup'



export interface UsersProps {

}

const Users: React.FC<UsersProps> = () => {

    const navigation = useNavigation()


    const submitMessageFormValidator = yup.object().shape({


        name: yup.string().required('Nome Obrigatório'),
        email: yup.string().email('Por favor, digite um email válido').required('Endereço de email é obrigatório'),








    })




    return (
        <View style={styles.mainView}>



            <Formik

                validationSchema={submitMessageFormValidator}


                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    address: '',
                    age: ''
                }}

                onSubmit={async ({ name, email, password, address, age }, { resetForm }) => {



                    try {
                        console.log({ name, email, password, address, age })

                        const userPassword = password

                        await api.post('/user/customer/add', {
                            name,
                            userPassword,
                            email,
                            address,
                            age

                        }).then(response => {
                            console.log(response)
                            navigation.navigate('Sigin')

                        })


                        resetForm()

                    } catch (error) {

                        console.log({ error })

                    }

                }}
            >

                {
                    (formikprops => (

                        <>
                            <TextInput
                                label="Name"
                                style={styles.textInput}


                                onChangeText={formikprops.handleChange('name')}
                                value={formikprops.values.name}
                            />

                            {formikprops.errors &&
                                <Text style={{ fontSize: 10, color: 'red' }}>{formikprops.errors.name}</Text>
                            }



                            <TextInput
                                label="Email"
                                style={styles.textInput}
                                onChangeText={formikprops.handleChange('email')}
                                value={formikprops.values.email}

                            />
                            {formikprops.errors &&
                                <Text style={{ fontSize: 10, color: 'red' }}>{formikprops.errors.email}</Text>
                            }


                            <TextInput
                                label="Address"
                                style={styles.textInput}
                                underlineColor='#000'

                                onChangeText={formikprops.handleChange('address')}
                                value={formikprops.values.address}
                            />

                            <TextInput
                                label="Age"
                                style={styles.textInput}
                                underlineColor='#000'

                                onChangeText={formikprops.handleChange('age')}
                                value={formikprops.values.age}
                            />


                            <TextInput
                                label="Password"
                                secureTextEntry={true}
                                style={styles.textInput}
                                onChangeText={formikprops.handleChange('password')}
                                value={formikprops.values.password}

                            />

                            <TextInput
                                label="Password Confirm"
                                secureTextEntry={true}
                                style={styles.textInput}
                                underlineColor='#000'

                            // onChangeText={formikprops.handleChange('name')}
                            // value={formikprops.values.name}
                            />

                            <Button icon="content-save" style={styles.saveButton} mode="contained" onPress={() => {

                                formikprops.handleSubmit();

                            }}>
                                Sign Up
                            </Button>

                        </>
                    ))
                }
            </Formik>

        </View>
    );
}

export default Users;