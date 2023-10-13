import React, {Component} from "react";
import axios from "axios";
import {View, Text, StyleSheet, ActivityIndicator, FlatList,Image, TouchableHighlight} from 'react-native'

export default class Instagram extends Component {
    constructor(){
        super();
        this.state = {
            loader: false,
            DATA: []
        }
    }
    getAxiosData() {
        this.setState({ loader: true });
        const url = 'https://the-birthday-cake-db.p.rapidapi.com/';
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '95556bc841msh2cd00ce5e8c6c15p1848fejsn8e6d184a44a1',
            'X-RapidAPI-Host': 'the-birthday-cake-db.p.rapidapi.com'
          }
        };
        axios.get(url, options)
          .then((response) => {
            if (response.data.length > 0) {
              this.setState({ DATA: response.data });
            }
            this.setState({ loader: false });
            console.log('YOUR AXIOS RESPONSE IS:', response.data);
          })
          .catch((error) => {
            this.setState({ loader: false });
            console.log('AXIOS ERROR:', error);
          });
      };
      
    // componentDidMount(){
    //     this.getData()
    // }

    render(){
        const renderItemS = ({ item }) => (
            <View style={styles.itemContainer}>
               <Text style= {styles.itemText}>{item.title}</Text>
               <Text style= {styles.itemDes}>{item.difficulty}</Text>
               {/* <Text style= {styles.itemDes}>{item.image}</Text> */}
               <Image source={{ uri: item.image }} style={styles.Imagestyle}/>
               <TouchableHighlight style={styles.OrderButton}>
                <Text style={styles.ButtonText}>Order</Text>
               </TouchableHighlight>
            </View>
          );
        return(
            <View style= {styles.container}>
                <ActivityIndicator size = {50} color= 'blue' animating= {this.state.loader}/>
                <Text style= {styles.homeText}
                    onPress= {()=> this.getAxiosData()}>CAKE HUT</Text>
                <FlatList style= {{width: '95%',marginTop: 10, backgroundColor:'white'}}
                    data= {this.state.DATA}
                    renderItem= {renderItemS} />
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