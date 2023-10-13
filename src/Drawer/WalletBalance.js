import React, {Component} from "react";
import { View, Text,TextInput, StyleSheet} from "react-native";
export default class WalletBalance extends Component{
    render(){
        return(
            
            <View style={styles.container}>
                <Text style={styles.txt}>Wallet Balance</Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container : {
        flex : 1
    },
    txt : {
        fontSize:26,
        color:"#000000",
        textAlign:'center',
        marginTop:35,
        fontWeight : 'bold'
    }
})