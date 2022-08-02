import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { styles } from './style'

export const Home = () => {
    const name = 'Jhon'
    return (
        <View style={styles.bodyScreen}>
            <Text style={styles.bodyScreenName}>
                {`Olá, ${name}!`}
            </Text>
            <Text style={styles.bodyScreenSubtitle}>
                Reveja ou acompanhe os filmes que você assistiu...
            </Text>
            <Text style={styles.bodyScreenPopularMovies}>
                Filmes populares este mês
            </Text>
            <View style={styles.containerPopularMovies}>
                <View>
                    <Image
                        style={styles.imagePopularMovies}
                        source={require('../../assets/imageHome/01.png')}
                    />
                    <View style={styles.subContainerPopularMovies}>
                        <Icon
                            style={styles.iconPopularMovies}
                            name="star"
                            size={20}
                        />
                        <Text
                            style={styles.textPopularMovies}>
                            8.3/10
                        </Text>
                    </View>
                </View>
                <View>
                    <Image
                        style={styles.imagePopularMovies}
                        source={require('../../assets/imageHome/02.png')}
                    />
                    <View style={styles.subContainerPopularMovies}>
                        <Icon
                            style={styles.iconPopularMovies}
                            name="star"
                            size={20}
                        />
                        <Text
                            style={styles.textPopularMovies}>
                            8.5/10
                        </Text>
                    </View>
                </View>
                <View>
                    <Image
                        style={styles.imagePopularMovies}
                        source={require('../../assets/imageHome/03.png')}
                    />
                    <View style={styles.subContainerPopularMovies}>
                        <Icon
                            style={styles.iconPopularMovies}
                            name="star"
                            size={20}
                        />
                        <Text
                            style={styles.textPopularMovies}>
                            6.5/10
                        </Text>
                    </View>
                </View>
                <View>
                    <Image
                        style={styles.imagePopularMovies}
                        source={require('../../assets/imageHome/04.png')}
                    />
                    <View style={styles.subContainerPopularMovies}>
                        <Icon
                            style={styles.iconPopularMovies}
                            name="star"
                            size={20}
                        />
                        <Text
                            style={styles.textPopularMovies}>
                            7.8/10
                        </Text>
                    </View>
                </View>
                <View>
                    <Image
                        style={styles.imagePopularMovies}
                        source={require('../../assets/imageHome/05.png')}
                    />
                    <View style={styles.subContainerPopularMovies}>
                        <Icon
                            style={styles.iconPopularMovies}
                            name="star"
                            size={20}
                        />
                        <Text
                            style={styles.textPopularMovies}>
                            8.0/10
                        </Text>
                    </View>
                </View>
                <View>
                    <Image
                        style={styles.imagePopularMovies}
                        source={require('../../assets/imageHome/06.png')}
                    />
                    <View style={styles.subContainerPopularMovies}>
                        <Icon
                            style={styles.iconPopularMovies}
                            name="star"
                            size={20}
                        />
                        <Text
                            style={styles.textPopularMovies}>
                            8.2/10
                        </Text>
                    </View>
                </View>
                <View>
                    <Image
                        style={styles.imagePopularMovies}
                        source={require('../../assets/imageHome/07.png')}
                    />
                    <View style={styles.subContainerPopularMovies}>
                        <Icon
                            style={styles.iconPopularMovies}
                            name="star"
                            size={20}
                        />
                        <Text
                            style={styles.textPopularMovies}>
                            9.5/10
                        </Text>
                    </View>
                </View>
                <View>
                    <Image
                        style={styles.imagePopularMovies}
                        source={require('../../assets/imageHome/08.png')}
                    />
                    <View style={styles.subContainerPopularMovies}>
                        <Icon
                            style={styles.iconPopularMovies}
                            name="star"
                            size={20}
                        />
                        <Text
                            style={styles.textPopularMovies}>
                            5.8/10
                        </Text>
                    </View>
                </View>
                <View>
                    <Image
                        style={styles.imagePopularMovies}
                        source={require('../../assets/imageHome/09.png')}
                    />
                    <View style={styles.subContainerPopularMovies}>
                        <Icon
                            style={styles.iconPopularMovies}
                            name="star"
                            size={20}
                        />
                        <Text
                            style={styles.textPopularMovies}>
                            7.3/10
                        </Text>
                    </View>
                </View>
                <View>
                    <Image
                        style={styles.imagePopularMovies}
                        source={require('../../assets/imageHome/10.png')}
                    />
                    <View style={styles.subContainerPopularMovies}>
                        <Icon
                            style={styles.iconPopularMovies}
                            name="star"
                            size={20}
                        />
                        <Text
                            style={styles.textPopularMovies}>
                            6.6/10
                        </Text>
                    </View>
                </View>
                <View>
                    <Image
                        style={styles.imagePopularMovies}
                        source={require('../../assets/imageHome/11.png')}
                    />
                    <View style={styles.subContainerPopularMovies}>
                        <Icon
                            style={styles.iconPopularMovies}
                            name="star"
                            size={20}
                        />
                        <Text
                            style={styles.textPopularMovies}>
                            8.5/10
                        </Text>
                    </View>
                </View>
                <View>
                    <Image
                        style={styles.imagePopularMovies}
                        source={require('../../assets/imageHome/12.png')}
                    />
                    <View style={styles.subContainerPopularMovies}>
                        <Icon
                            style={styles.iconPopularMovies}
                            name="star"
                            size={20}
                        />
                        <Text
                            style={styles.textPopularMovies}>
                            7.3/10
                        </Text>
                    </View>
                </View>
                <View>
                    <Image
                        style={styles.imagePopularMovies}
                        source={require('../../assets/imageHome/13.png')}
                    />
                    <View style={styles.subContainerPopularMovies}>
                        <Icon
                            style={styles.iconPopularMovies}
                            name="star"
                            size={20}
                        />
                        <Text
                            style={styles.textPopularMovies}>
                            8.8/10
                        </Text>
                    </View>
                </View>
                <View>
                    <Image
                        style={styles.imagePopularMovies}
                        source={require('../../assets/imageHome/14.png')}
                    />
                    <View style={styles.subContainerPopularMovies}>
                        <Icon
                            style={styles.iconPopularMovies}
                            name="star"
                            size={20}
                        />
                        <Text
                            style={styles.textPopularMovies}>
                            7.8/10
                        </Text>
                    </View>
                </View>
                <View>
                    <Image
                        style={styles.imagePopularMovies}
                        source={require('../../assets/imageHome/15.png')}
                    />
                    <View style={styles.subContainerPopularMovies}>
                        <Icon
                            style={styles.iconPopularMovies}
                            name="star"
                            size={20}
                        />
                        <Text
                            style={styles.textPopularMovies}>
                            7.5/10
                        </Text>
                    </View>
                </View>
                <View>
                    <Image
                        style={styles.imagePopularMovies}
                        source={require('../../assets/imageHome/16.png')}
                    />
                    <View style={styles.subContainerPopularMovies}>
                        <Icon
                            style={styles.iconPopularMovies}
                            name="star"
                            size={20}
                        />
                        <Text
                            style={styles.textPopularMovies}>
                            8.2/10
                        </Text>
                    </View>
                </View>

            </View>

        </View>
    )
}
