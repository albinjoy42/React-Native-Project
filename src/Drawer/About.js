import React, { Component, useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, PermissionsAndroid } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { Dimensions } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const screenwidth = Dimensions.get('window').width;

function About() {
    const GOOGLE_PLACES_API_KEY = "AIzaSyDRKyUzBNnGeLdKXfL0xZmkHmQueJs5z5A";
    const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
    async function getPermission() {
        await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
    }
    useEffect(() => {
        getPermission().then(() => {
            Geolocation.getCurrentPosition(
                (position) => {
                    setLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude })
                },
                (error) => {
                    console.log("Location error : ", error.code, error.message);
                },
                { showLocationDialog: true, enableHighAccuracy: true, timeout: 20000, maximumAge: 10000 }
            );
        })
    }, []);
    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
                <Marker coordinate={{ latitude: location.latitude, longitude: location.longitude }} />
            </MapView>
            <GooglePlacesAutocomplete
                style={styles.searchbar}
                onPress={(data, details = null) => {
                    console.log(data, details);
                    console.log(details?.geometry?.location)
                    setLocation({ latitude: details?.geometry?.location.lat, longitude: details?.geometry?.location.lng })
                }}
                onFail={(error) => { console.log(error) }}
                fetchDetails={true}
                placeholder="Search place"
                query={{
                    key: GOOGLE_PLACES_API_KEY,
                    language: "en", // language of the results
                }}
                GooglePlacesDetailsQuery={{
                    fields: 'geometry',// comma separated list of required data fields for details page to render
                }}
            />
        </View>
    )
}
export default About;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000"
    },
    map: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: "absolute"
    },
    searchbar: {
        description: {
            fontWeight: "bold"
        },
        predefinedPlacesDescription: {
            color: '#1faadb'
        },
        textInputContainer: {
            backgroundColor: 'rgba(0,0,0,0)',
            top: 50,
            width: screenwidth - 10,
            borderWidth: 2
        },
        textInput: {
            marginLeft: 0,
            marginRight: 0,
            height: 38,
            color: '#5d5d5d',
            fontSize: 16,
            borderWidth: 2
        },
        listView: {
            backgroundColor: 'rgba(192,192,192,0.9)',
            top: 23
        }
    }
})