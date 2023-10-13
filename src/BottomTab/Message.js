import React, { useState }  from "react";
import {statusBar} from 'expo-status-bar';
import { View, Text, StyleSheet, Button,TextInput, TouchableHighlight } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Message() {
    const [inputdata,setInputdata]=useState("");
    const [disdata,setDIsdata]=useState("");
    const savemsg = (msgtxt)=>{
        setInputdata(msgtxt)
    }
    const add = async()=>{
        try
        {
            await AsyncStorage.setItem('message',inputdata);
        }
        catch(e){
            console.error(e)
        }
    }
    const get = async()=>{
        try
        {
            const value=await AsyncStorage.getItem('message');
            if(value!=null){
                setDIsdata(value);
            }
        }
        catch(e)
        {
            console.error(e)
        }
    }
    return (
        <View style={styles.container}>
            <TextInput placeholder="Enter a message" style={styles.txtbox} onChangeText={savemsg}></TextInput>
            <TouchableHighlight style={styles.btn} onPress={add}>
                <Text style={styles.btntxt}>SAVE MESSAGE</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.btn} onPress={get}>
                <Text style={styles.btntxt}>DISPLAY MESSAGE</Text>
            </TouchableHighlight>
            <Text style={styles.txt}>Entered Message is : </Text>
            <Text style={styles.gettxt}>{disdata}</Text>
        </View>
    )
} 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#777',
        alignItems: 'center',
        justifyContent: 'center'
    },
    txt: {
        fontSize: 22,
        color: "#fff",
        fontWeight: 'bold',
        marginTop : 30,
        borderBottomWidth : 2,
        borderColor : "#fff"
    },
    txtbox : {
        height:40,
        width:'85%',
        borderWidth:1,
        borderColor:"#ccc",
        borderRadius:3,
        marginTop : 50
    },
    btn : {
        height:40,
        width : '50%',
        marginTop:20,
        paddingHorizontal:10,
        backgroundColor :"#369",
        alignItems:'center',
        justifyContent:"center"
    },
    btntxt : {
        color:"#FFF",
        fontWeight:'bold',
        fontSize:16
    },
    gettxt : {
        color:"#FFF",
        fontWeight:'bold',
        fontSize:20,
        marginTop : 20,
        color : "yellow"
    }
})