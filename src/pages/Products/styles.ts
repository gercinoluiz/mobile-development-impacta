import { Dimensions, StyleSheet } from 'react-native';



const styles = StyleSheet.create({

    mainView: {
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,

        marginTop: 30

    },

    titleView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: 378,
        marginBottom: 10,
        borderBottomColor: '#000',
        borderBottomWidth: 0.8,
        marginLeft: 6,
        marginRight: 'auto'




    },

    titleText: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 4
    },


    closeButton: {
        marginRight: 10,
        marginTop: 10,
        marginLeft: 'auto',
        marginBottom: 60,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },


    closeButtonText: {
        color: 'red',
        marginHorizontal: 4
    }



})

export default styles