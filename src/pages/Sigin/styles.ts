import { Dimensions, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';



const styles = StyleSheet.create({

    mainView: {
        flex: 1,


        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,

        marginTop: 120,



    },

    textInput: {
        width: Dimensions.get('window').width - 40,

        marginBottom: 10
    },

    saveButton: {
        width: '90%',
        backgroundColor: "#000"
    },

    image: {
        width: 100,
        height: 100,
        marginBottom: 50
    },

    signupView: {

        marginBottom: 40,
        marginTop: 250,
        justifyContent:'center',
        alignItems:'center'

    },


    signupText: {
        color: '#9966ff', fontSize: 16, fontWeight: 'bold'
    }






})

export default styles