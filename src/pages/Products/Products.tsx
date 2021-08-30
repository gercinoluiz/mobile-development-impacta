import React from 'react'
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { View, Text, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import api from '../../api';
import Card from '../../components/Card/Card';
import { useAuth } from '../../hooks/auth';
import styles from './styles';





const Products: React.FC<ProductsProps> = () => {

    const { handleSignOut, user } = useAuth()

    const [products, setProducts] = useState<ProductsProps[]>([])




    useEffect(() => {

        fechData()


    }, [])

    const fechData = async () => {

        await api.get('/product/list').then(response => setProducts(response.data)
        )

    }



    return (
        <SafeAreaView style={styles.mainView}>

            <View style={styles.closeButton}>

                <Text >{user}</Text>

                <TouchableOpacity onPress={handleSignOut}>
                    <Text style={styles.closeButtonText}>Sair</Text>

                </TouchableOpacity>
            </View>

            <View style={styles.titleView}>
                <Text style={styles.titleText}>
                    Qdt
                </Text>
                <Text style={styles.titleText}>
                    Name
                </Text>
                <Text style={styles.titleText}>
                    Provider
                </Text>
                <Text style={styles.titleText}>
                    Price
                </Text>

            </View>
            <FlatList
                data={products ? products : []}
                keyExtractor={item => item?.id.toString()}

                renderItem={({ item }) => (
                    <Card key={item.id} amount={item.amount} factory={item.factory} price={item.price} id={item.id} name={item.name} />


                )}
            >

            </FlatList>
        </SafeAreaView>
    );
}

export default Products;