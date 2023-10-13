import React, {Component} from "react";
import { View, Text,TextInput, TouchableHighlight, StyleSheet, ImageBackground, Image } from "react-native";
export default class Login extends Component{
    constructor(){
        super();
        this.state = {
            name:null
        }
    }
    updateValue(username){
        this.setState({name:username})
    }
    render(){
        return(
            
            <View style={styles.container}>
                <ImageBackground source={require('../images/bg.jpeg')} style={styles.bgimg}>
                <Image source={require('../images/logo.png')} style={styles.logoimg}></Image>
                <Text style={styles.txtcontent}>Login</Text>
                <TextInput placeholder="Username" style={styles.txtbox} placeholderTextColor="black"
                onChangeText={(username)=>this.updateValue(username)}/>
                <TextInput placeholder="Password" style={styles.txtbox} placeholderTextColor="black" secureTextEntry={true}/>
                <TouchableHighlight style={styles.button} underlayColor='#00f'
                onPress={()=>this.props.navigation.navigate('Flexbox',{username:this.state.name})}>
                        <Text style={styles.btntxt}>Log In</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button} underlayColor='#00f'
                onPress={()=>this.props.navigation.navigate('Top Tab')}>
                        <Text style={styles.btntxt}>Top Tab Bar</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button} underlayColor='#00f'
                onPress={()=>this.props.navigation.navigate('Bottom Tab')}>
                        <Text style={styles.btntxt}>Bottom Tab Bar</Text>
                </TouchableHighlight>
                </ImageBackground>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container : {
        flex : 1
    },
    bgimg : {
        Width : "100%",
        height : "100%",
        justifyContent: 'center',
        alignItems:'center',
        
    },
    logoimg : {
        width : 100,
        height : 100,
        marginBottom : 25
    },
    txtcontent : {
        color : "#000",
        fontSize : 25,
        fontWeight : 'bold',
        marginBottom : 25
    },
    txtbox : {
        width : "80%",
        borderColor : "black",
        borderRadius : 8,
        borderWidth : 0.75,
        height : 40,
        marginBottom : 25
    },
    button : {
        backgroundColor :"#03032b",
        width : "40%",
        height : 40,
        borderRadius : 6,
        alignItems : 'center',
        justifyContent : 'center',
        marginBottom : 20
    },
    btntxt : {
        color : '#fff',
        textAlign : 'center',
        fontSize : 20,
        fontWeight : 'bold'
    }
})