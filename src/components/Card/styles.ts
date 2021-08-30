import { Dimensions, StyleSheet } from 'react-native';



const styles = StyleSheet.create({


    card: {

        // Elevation-Thing
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 3,


        backgroundColor: '#FFF',
        color: '#000',
        width: Dimensions.get('screen').width - 20,
        borderRadius: 5,
        height: 70,

        marginBottom: 10,

        flexDirection: 'row',
        justifyContent: 'space-between'


    },


    quantityText: {},

    priceText: {},

    priceTextView: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    FactoryText: {},


    nameText: {},

    producContainer: {
        width: '100%',
        maxWidth: 380,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 4
    }



})

export default styles