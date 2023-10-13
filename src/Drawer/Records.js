import React, { useState } from 'react';
import { View, Text, Button, FlatList, SafeAreaView } from 'react-native';
import { getAllContacts, addContact, deleteAllContact } from './Realm';

function Records() {
    const [contacts, setContacts] = useState();
    const [counter, setCounter] = useState(1);

    const handleAddContact = () => {
        const newRecordID = counter;
        addContact(newRecordID, 'shaz', 'tester', '911');
        setContacts(getAllContacts()); // Update contacts after adding
        setCounter(counter + 1);
    };

    const handleDeleteAllContacts = () => {
        deleteAllContact();
        setContacts([]); // Clear contacts after deleting
        setCounter(1);
    };

    const renderItem = ({ item }) => (
        <View>
            <Text>{item.recordID}</Text>
            <Text>{item.givenName}</Text>
            <Text>{item.familyName}</Text>
            <Text>{item.phoneNumber}</Text>
        </View>
    );

    return (
        <SafeAreaView>
            <View style={{ margin: 20, width: 250 }}>
                <Button title="Add" onPress={handleAddContact} />
            </View>
            <View style={{ margin: 20, width: 250 }}>
                <Button title="Delete" onPress={handleDeleteAllContacts} />
            </View>
            <View>
                <Text style={{ marginTop: 10, fontSize: 25, fontWeight: 'bold' }}>Contacts</Text>
                <FlatList
                    data={contacts}
                    keyExtractor={item => item.recordID.toString()}
                    renderItem={renderItem}
                />
            </View>
        </SafeAreaView>
    );
}

export default Records;
