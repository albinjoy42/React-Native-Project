import React, {Component} from "react";
import { View, StyleSheet, TextInput, TouchableHighlight, ImageBackground, Image, Text } from "react-native";
class Registercontent extends Component{
    render(){
        return (
            <Text style={{color:'white', fontSize:18,marginBottom:10,marginTop:10}}>{this.props.name}</Text>
        )}}
export default class Register extends Component{
    constructor(){
        super();
        this.state={
            status : " ",
            message : " "
        }}
    updatestatus(){
        this.setState({
            status : "Registration completed..!",
            message : "Welcome"
        })}
    render(){
        return(
            <View style={styles.container}>
                {/* <ImageBackground source={require('../images/bg1.jpg')} style={styles.bgimg}> */}
                    <Image source={require('../images/logo.png')} style={styles.logoimg}></Image>
                    <Text style={{color:'whitesmoke', fontWeight:'bold', fontSize:26,marginTop:20,marginBottom:5}}>Register</Text>
                    <TextInput placeholder="Name" placeholderTextColor='white' style={styles.txtbx}></TextInput>
                    <TextInput placeholder="Email" placeholderTextColor='white' style={styles.txtbx}></TextInput>
                    <View style={styles.mob}>
                    <TextInput placeholder="Country Code" placeholderTextColor='white' 
                    style={styles.mob1} maxLength={3}></TextInput>
                    <TextInput placeholder="Mobile No" placeholderTextColor='white'
                     style={styles.mob2} maxLength={10}></TextInput>
                     </View>
                    <TextInput placeholder="Password" secureTextEntry={true} placeholderTextColor='white' style={styles.txtbx}></TextInput>
                    <TouchableHighlight style={styles.btn} underlayColor="#52021b"
                     onPress={()=>this.updatestatus()}>
                        <Text style={styles.btntxt}>Register</Text>
                    </TouchableHighlight>
                    <Text style={styles.btntxt}>{this.state.status}</Text>
                    <Registercontent name={this.state.message} style={{marginTop:15}}></Registercontent>
                {/* </ImageBackground> */}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection : 'column',
        backgroundColor:'#3A0CA3',
        alignItems:"center",
        justifyContent :"center"
    },
    bgimg : {
        width:350,
        height:427,
        alignItems:"center",
        justifyContent :"center"
    },
    logoimg : {
        height : 80,
        width : 80
    },
    txtbx : {
        borderColor : 'grey',
        borderWidth : 1,
        height : 35,
        width : '80%',
        marginTop : 20,
        borderRadius : 10,
        textAlign : 'left',
        color : 'white'
    },
    btn : {
        backgroundColor : '#F72585',
        width : '50%',
        height : 40,
        marginTop : 30,
        marginBottom :20,
        borderRadius : 25,
        color : '#fff',
        alignItems : 'center',
        justifyContent : 'center'
    },
    btntxt : {
        color : '#FFF',
        fontSize : 18
    },
    mob1 : {
        borderColor : 'grey',
        borderWidth : 1,
        height : 35,
        width : '27%',
        marginTop : 20,
        borderRadius : 10,
        textAlign : 'left',
        color : 'white',
        marginRight : 10,
        alignContent : 'center',
        justifyContent : 'center'
    },
    mob2 : {
        borderColor : 'grey',
        borderWidth : 1,
        height : 35,
        width : '50%',
        marginTop : 20,
        borderRadius : 10,
        textAlign : 'left',
        color : 'white',
        alignContent : 'center',
        justifyContent : 'center'
    },
    mob : {
        flexDirection : 'row'
    }
})