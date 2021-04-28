import React from 'react'
import {SafeAreaView, FlatList,  } from "react-native"
import List from '../component/Detailed/List'
import avroleather from '../assets/avroleather.png'
import images from '../assets/images.jpeg'
import ladyleather from '../assets/ladyleather.png'
import valukercoat from '../assets/valukercoat.jpeg'

export default function MarketList () {
    const list = [
        {imgUrl: avroleather, name: 'Avro leather Jacket', cost: '45'},
        {imgUrl: images, name: 'Move cadigan jacket', cost: '35'},
        {imgUrl: ladyleather, name: 'Biker Girl Jacket', cost: '65'},
        {imgUrl: valukercoat, name: 'Ladies Winter wear', cost: '50'}
    ]

    return (
        <SafeAreaView>
            
            <FlatList 
                data={list}
                renderItem={({ item }) => {
                    return <List name={item.name}  price={item.cost} photo={item.imgUrl}/>
                }}
                keyExtractor={(item)=>item.cost} 
            />
        </SafeAreaView>
    )
}
