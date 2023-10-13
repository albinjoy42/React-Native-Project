import React,{Component} from "react";
import { View, StyleSheet,Image, Text, TouchableHighlight } from "react-native";

export default class DrawerContent extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.profilecontainer}>
                <View style={styles.imagecontainer}>
                <Image source={require('../images/crown.png')} style={styles.image}></Image>
                <TouchableHighlight style={styles.invitebtn}>
                    <Text style={styles.invitebtntxt}>Invite</Text>
                </TouchableHighlight>
                </View>
                <View>
                    <Text style = {styles.nametxt}>Favaz</Text>
                    <TouchableHighlight style={styles.statusbtn}>
                        <Text style={styles.statusbtntxt}>Gold</Text>
                    </TouchableHighlight>
                   
                    <Text style = {styles.cointxt1}>Total Coin</Text>
                    <Text style = {styles.cointxt2}>coin : 20000</Text>
                    
                </View>
                </View>
                <Text style={styles.menu} onPress={()=>this.props.navigation.navigate('Home')}>Home</Text>
                <Text style={styles.menu} onPress={()=>this.props.navigation.navigate('Profile')}>Profile</Text>
                <Text style={styles.menu} onPress={()=>this.props.navigation.navigate('Wallet Balance')}>Wallet Balance</Text>
                <Text style={styles.menu} onPress={()=>this.props.navigation.navigate('Records')}>Records</Text>
                <Text style={styles.menu} onPress={()=>this.props.navigation.navigate('Refund and Policies')}>Refund and policies</Text>
                <Text style={styles.menu} onPress={()=>this.props.navigation.navigate('Settings')}>Settings</Text>
                <Text style={styles.menu} onPress={()=>this.props.navigation.navigate('Google Map')}>Google Map</Text>
                <Text style={styles.menu} onPress={()=>this.props.navigation.navigate('Help')}>Help</Text>
                <Text style={styles.logout} onPress={()=>this.props.navigation.navigate('Login')}>Logout</Text>
            </View>
        )
    }
}
const styles= StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor: '#fff'
    },
    profilecontainer: {
        height: 200,
        backgroundColor: '#000',
        width : '100%',
        flexDirection : 'row'
    },
    imagecontainer : {
        height : 100,
        width : 100,
        borderRadius : 50,
        marginTop : 20,
        marginLeft : 10
    },
    image : {
        height : 100,
        width : 100
    },
    invitebtn : {
        marginTop : 40,
        backgroundColor : 'white',
        borderWidth : 2,
        borderColor : 'yellow',
        height : 21,
        width : 100,
        marginLeft : 5,
        borderRadius : 7
    },
    invitebtntxt : {
        color : '#000',
        fontSize : 13,
        textAlign : 'center'
    },
    menu : {
        paddingLeft : 10,
        color : '#000',
        marginTop : 15,
        fontSize : 20,
        borderBottomWidth : 0.5,
        borderBottomColor : '#000',
        height : 40
    },
    logout : {
        textAlign : 'center',
        color : '#000',
        marginTop : 100,
        fontSize : 20,
        borderBottomWidth : 0.5,
        borderBottomColor : '#000',
        height : 40
    },
    nametxt : {
        color : '#fff',
        fontSize :20,
        marginLeft : 85,
        marginTop : 20
        },
    statusbtn : {
        marginTop : 5,
        backgroundColor : '#bbb',
        height : 22,
        width : 100,
        marginLeft : 60,
        borderRadius : 5
    },
    statusbtntxt:{
        color : '#000',
        textAlign : 'center'
    },
    cointxt1 : {
        color : '#fff',
        marginTop : 80,
        marginLeft : 76
    },
    cointxt2 : {
        color : '#fff',
        marginLeft : 70
    }
})