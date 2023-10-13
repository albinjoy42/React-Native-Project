import React, {Component} from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
class FlexContent extends Component{
    render(){
        return(
            <Text style={styles.contentStyle}>Hi My name is {this.props.name}</Text>
        )
    }
}
export default class Flexbox extends Component{
    constructor(){
        super();
        this.state={
            main_txt:'Hi ',
            sub_txt : 'React '
        }
    }
    updateText(){
        this.setState({
            main_txt:'Hello (Updated)',
            sub_txt:'Albin (Updated)'
        })
    }
    componentDidMount(){
        console.log(this.props.route.params.username)
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>{this.state.main_txt}</Text>
                <Text style={styles.text}>{this.state.sub_txt} </Text>
                <Text style={styles.text}>Native</Text>
                <TouchableHighlight style={styles.button} onPress={()=>this.updateText()}
                 underlayColor='red'><Text style={styles.buttonText}>Update
                    </Text></TouchableHighlight>
                    <TouchableHighlight style={styles.button} 
                    onPress={()=>this.props.navigation.navigate('Drawerkey')}
                    underlayColor='red'><Text style={styles.buttonText}>Click here for Drawer
                    </Text></TouchableHighlight>
                    <FlexContent name='Albin'>

                    </FlexContent>
            </View>
            
        )
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white',
        alignItems:'center',
        justifyContent:'center',
        //flexDirection:'row'
    },
    text : {
        fontSize : 20,
        color : "#000"
    },
    button : {
        width : '60%',
        height  :55,
        backgroundColor: 'green',
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 8,
        marginTop:20
    },
    buttonText : {
        color : 'black',
        fontSize : 18,
        fontWeight : 'bold'
    },
    contentStyle : {
        color : 'blue',
        fontWeight:'bold',
        fontSize:20,
        marginTop:20
    }
})
