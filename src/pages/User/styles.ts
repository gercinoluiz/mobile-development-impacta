import { Dimensions, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';



const styles = StyleSheet.create({

    mainView: {
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,

        marginTop: 40,



    },

    textInput: {
        width: Dimensions.get('window').width - 40,

        marginBottom: 10
    },

    saveButton: {
        width: '90%',
        backgroundColor: "#000"
    },


    closeButton: {
        marginRight: 10,
        marginTop: 10,
        marginLeft: 'auto',
        marginBottom: 60
    },


    closeButtonText: {
        color: 'red'
    }




})

export default styles