import React from 'react';
import {SectionList, View, Text, StyleSheet, SafeAreaView } from 'react-native';

const grPeopleByLastName = (_data) => {
    const data = [..._data];
    const grData = data.reduce((accumulator, item) => {
        const gr = item.name.last[0].toUpperCase();

        if(accumulator[gr]){
            accumulator[gr].data.push(item);
        }else{
            accumulator[gr] = {
                title: gr,
                data: [item],
            };
        }
        return accumulator;
    }, {});

    const sections = Object.keys(grData).map((key) => {
        return grData[key];
    });

    return sections.sort((a, b) => {
        if (a.title > b.title) {
            return 1;
        }
            return -1;
    });
};

const App = () => {
  return (
    <SafeAreaView>
        <SectionList sections={grPeopleByLastName(people)}
        keyExtractor={(item) => `${item.name.first}-${item.name.last}`}
        renderSectionHeader={({section}) => {
            return (
                <View style={styles.sectionHeader}>
                    <Text>{section.title}</Text>
                </View>
            );
        }}
        renderItem={({item}) => {
            return(
                <View style={styles.row}>
                    <Text style={styles.name}>
                        {item.name.first} {item.name.last}
                    </Text>
                </View>
            );
        }}
        ItemSeparatorComponent={() => <View style={styles.separator}/>}
        />
    </SafeAreaView>
  );
};

const people = [
    {name:{title: 'Mrs', first: 'Quoc', last: 'Manh Phat'},},
    {name:{title: 'Mr', first: 'Anh', last: 'Khoi'},},
    {name:{title: 'Ms', first: 'Mong', last: 'Van'},},
];

const styles = StyleSheet.create({
    row: {
      paddingHorizontal: 20,
      paddingVertical: 15,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    separator: {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      height: 1,
    },
    sectionHeader: {
      paddingHorizontal: 20,
      paddingVertical: 15,
      backgroundColor: '#f4f4f4',
    },
    sectionHeaderText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    name: {
      fontSize: 16,
      marginLeft: 10,
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
    },
  });
  
export default App;
