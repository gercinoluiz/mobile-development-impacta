

import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { MaterialIcons } from '@expo/vector-icons';
import numeral from 'numeral'

export default function Card({ amount, id, factory, name, price }: ProductsProps) {
    return (
        <View style={styles.card}>

            <View style={styles.producContainer}>
                <Text>
                    {amount}
                </Text>


                <Text>
                    {name}
                </Text>

                <Text>
                    {factory?.name}
                </Text>

                <View style={styles.priceTextView}>
                    <Text>
                        {numeral(price).format('0,0.00')}
                    </Text>

                    <MaterialIcons name="attach-money" size={22} color="#00897b" />
                </View>

            </View>

        </View>
    )
}
