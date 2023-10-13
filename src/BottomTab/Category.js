import React, {Component} from "react";
import {View, Text, StyleSheet, ActivityIndicator, FlatList,Image, TouchableHighlight} from 'react-native'
import { createIconSet } from "react-native-vector-icons";


export default class Category extends Component {

    constructor(){
        super();
        this.state = {
            loader: false,
            DATA: []
        }
    }
    getData(){
        this.setState({loader: true})
const url = 'https://the-birthday-cake-db.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '95556bc841msh2cd00ce5e8c6c15p1848fejsn8e6d184a44a1',
		'X-RapidAPI-Host': 'the-birthday-cake-db.p.rapidapi.com'
	}
};
        fetch(url, options)
        .then((response) => response.json())
        .then((response)=> {
            if(response.length>0){
                this.setState({DATA: response})
            }
            this.setState({loader: false})
            console.log('YOUR RESPONSE IS:', response)
        })
        .catch((error) => {
            this.setState({loader: false})
            console.log('ERROR IS:',error)
        })
    }
    // componentDidMount(){
    //     this.getData()
    // }

    render(){
        const renderItem = ({item}) => (
           <View style= {styles.itemContainer}>
               <Text style= {styles.itemText}>{item.title}</Text>
               <Text style= {styles.itemDes}>{item.difficulty}</Text>
               {/* <Text style= {styles.itemDes}>{item.image}</Text> */}
               <Image source={{ uri: item.image }} style={styles.Imagestyle}/>
               <TouchableHighlight style={styles.OrderButton}>
                <Text style={styles.ButtonText}>Order</Text>
               </TouchableHighlight>
           </View> 
        )
        return(
            <View style= {styles.container}>
                <ActivityIndicator size = {50} color= 'blue' animating= {this.state.loader}/>
                <Text style= {styles.homeText}
                    onPress= {()=> this.getData()}>The Cake Emporium</Text>
                <FlatList style= {{width: '95%',marginTop: 10, backgroundColor:'white'}}
                    data= {this.state.DATA}
                    renderItem= {renderItem} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eeeeee'
    },
    homeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000'
    },
    itemContainer: {
        width: '100%',
        padding: 10,
        backgroundColor: '#fff',
        elevation: 4,
        marginBottom: 10

    },
    itemText: {
        fontSize: 16,
        fontWeight: 'bold',
        color:'#000'
    },
    itemDes: {
        fontSize: 14,
        color: '#369',
        fontWeight: 'bold',
        marginTop: 10
    },
    OrderButton:{
        height : 30,
        width : '25%',
        borderRadius : 8,
        backgroundColor:'#ab0',
        alignItems : 'center',
        justifyContent : 'center',
        marginLeft : '73%',
        marginTop : 10
    },
    ButtonText : {
        color : '#fff',
        textAlign : "center",
        fontWeight : 'bold',
        fontSize : 16
    },
    Imagestyle : {
        height : 100,
        backgroundColor : '#ccc',
        marginTop : 10
    }
})