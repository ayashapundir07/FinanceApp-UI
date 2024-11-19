import { View, Text, StyleSheet } from "react-native";
import React from 'react'
import { NetflixIcon } from "@/constants/Icons";
import Colors from "@/constants/Colors";
import {Stack} from 'expo-router';

const Page = () => {
    return(
        <>
        <Stack.Screen options={{headerShown: false}} />
        <View style={styles.container}>
            <Text style={styles.text}>profile</Text>
            <NetflixIcon width={22} height={22} color={'#000'}/>
        </View>
        </>
        
    )
}

export default Page;

const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: Colors.black,
},
text:{
    color: Colors.white,
}
})