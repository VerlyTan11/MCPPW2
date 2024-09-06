import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ImageComponent = ({ name, email, photo_url }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.photo} source={{ uri: photo_url }} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  email: {
    fontSize: 15,
    color: '#666',
    marginLeft: 15,
    marginTop: 5,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
  },
});

export default ImageComponent;
