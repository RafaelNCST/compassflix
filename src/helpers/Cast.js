import { View, Text, Image, FlatList, SafeAreaView } from 'react-native';
import React from 'react';
import { styles } from './styles';


const DATA = [
    {
        id: 1,
        image: require('../assets/DetailMovies/Robert.png'),
        name: "Robert Pattinson",
        character: "Bruce Wayne / The Batman",
    },
    {
        id: 2,
        image: require('../assets/DetailMovies/Zoe.png'),
        name: "Zoë Kravitz",
        character: "Selina Kyle / Catwoman",
    },
    {
        id: 3,
        image: require('../assets/DetailMovies/Paul.png'),
        name: "Paul Dano",
        character: "Edward Nashton / The Riddler",
    },
    {
        id: 4,
        image: require('../assets/DetailMovies/Jefrey.png'),
        name: "Colin Farrell",
        character: "Oswald 'Oz' Cobblepot / The Penguin",
    },
    {
        id: 5,
        image: require('../assets/DetailMovies/Colin.png'),
        name: "Jeffrey Wright",
        character: "Lt. James Gordon",
    }
]
const Item = ({ image, name, character }) => (
    <View style={styles.areaItens}>
        <View style={styles.imageActors}>
        <Image source={image} />
        </View>
        <View style={styles.actor}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.character}>{character}</Text>
        </View>
    </View>
)

export const Cast = () => {
    const renderItem = ({ item }) => (
        <Item image={item?.image} name={item?.name} character={item?.character} />)

    return (
        <SafeAreaView>

            <FlatList
                data={DATA}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </SafeAreaView>
    )

}