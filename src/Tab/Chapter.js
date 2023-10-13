import React, {Component} from "react";
import { View, Text, StyleSheet} from "react-native";
export default class Chapter extends Component{
    render(){
        return(
            
            <View style={styles.container}>
                <Text style={styles.txt}>Chapter</Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'blue',
        alignItems : 'center',
        justifyContent : 'center'
    },
    txt : {
        fontSize:26,
        color:"#000",
        fontWeight : 'bold'
    }
})