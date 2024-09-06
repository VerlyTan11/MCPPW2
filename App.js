import React from 'react';
import { View, ScrollView } from 'react-native';
import ImageComponent from './components/ImageComponent';
import data from './data.json';

const App = () => {
  return (
    <ScrollView>
      {data.map((item, index) => (
        <ImageComponent
          key={index}
          name={item.name}
          email={item.email}
          photo_url={item.photo_url}
        />
      ))}
    </ScrollView>
  );
};

export default App;
