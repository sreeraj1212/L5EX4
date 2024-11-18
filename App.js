import React from 'react';
import { View, Text, StyleSheet, SectionList, TouchableOpacity, StatusBar, Image } from 'react-native';
import Icon1 from "react-native-vector-icons/Fontisto";
import Icon2 from "react-native-vector-icons/MaterialIcons";


const datasource = [
  {
    data: [
      { key: 'Iphone1', image: 'https://toply.cz/wp-content/uploads/2023/09/apple-iphone.jpg' },
      { key: 'iPhone 16', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-16-finish-select-202409-6-1inch_FMT_WHH?wid=1280&hei=492&fmt=p-jpg&qlt=80&.v=UXp1U3VDY3IyR1hNdHZwdFdOLzg1V0tFK1lhSCtYSGRqMUdhR284NTN4ODFkcDVXTGRPYTNEZm9jVU1sTHdEQ1cwVWQwY3p4S1JSUW03bjhwbHZrKzJ5aFM4QSthSG1nSUl6WXJQME1SZ2taOHFSRFp3OTRjakRPRHdDSnpKN0UvdW5uSjR2YkZNVkdPa3lzQzROY3h3&traceId=1' },
    ],
    title: "Apple",
    bgcolor: 'yellow',
    icon1: 'apple',
  },
  {
    data: [
      { key: 'Samsung Galaxy GT-17500', image: 'https://hamariweb.com/mobiles/LargeImages/1352_01.jpg' },
      { key: 'Samsung S24 Ultra', image: 'https://images.samsung.com/is/image/samsung/assets/sg/smartphones/galaxy-s24-ultra/buy/S24Ultra-Color-Titanium_Grey_PC_0527_final.jpg' },
    ],
    title: "Samsung",
    bgcolor: 'yellow',
    icon2: 'smartphone',
  },
  {
    data: [
      { key: 'Sony Ericsson Xperia X1', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF8bBTsTYMCG9Cq1wQ2TI-nWNan3W8atb4NA&s' },
      { key: 'Xperia 1 VI', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCB4tcDLCTRoG4xhmqp3iMBkW0lptYijI2sw&s' },
    ],
    title: "Sony",
    bgcolor: 'yellow',
    icon2: 'smartphone',
  },
];

const styles = StyleSheet.create({
  opacityStyle: {

    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 5,
    backgroundColor: 'grey',
    marginVertical: 5,
  },
  container: {
    backgroundColor: 'black',
    flex: 1,
    padding: 10,
  },
  textStyle: {
    fontSize: 15,
    marginLeft: 10,
    color: 'white',
  },
  headertext: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: 10,
    padding: 10,
    color: 'black',
  },
  itemImage: {
    width: 380,
    height: 260,
    borderRadius: 5,
  },
  pageHeading: {
    fontSize: 30,
    fontWeight:"500",
    textAlign: 'center',
    marginVertical: 20,
    color: 'black',
    backgroundColor: 'yellow',
    borderRadius:10,
    borderWidth:5,

  },

  pageheadtag: {
    fontSize: 13,
    fontWeight:"500",
    textAlign: 'center',
    marginVertical: 20,
    color: 'white',
    marginTop: 5

  }
});

const renderItem = ({ item }) => {
  return (
      <TouchableOpacity style={styles.opacityStyle}>
        <Image source={{ uri: item.image }} style={styles.itemImage} />
        <Text style={styles.textStyle}>{item.key}</Text>
      </TouchableOpacity>
  );
};

const MyApp = () => {
  return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Text style={styles.pageHeading}>
          TechTrackers
        </Text>
          <Text style={styles.pageheadtag}>"Unveiling the evolution of smartphones, shaping smarter lives."</Text>
        <SectionList
            sections={datasource}
            renderItem={renderItem}
            renderSectionHeader={({ section: { title, bgcolor, icon1, icon2} }) => (
                <Text style={[styles.headertext, { backgroundColor: bgcolor }]}>
                  {title}
                  <Icon1 name={icon1} size={24} color="black" />
                  <Icon2 name={icon2} size={24} color="black" />

                </Text>
            )}
            keyExtractor={(item, index) => item.key + index}
        />
      </View>
  );
};

export default MyApp;
