import styled from 'styled-components/native';

export const containerImageUser = styled.TouchableOpacity`
    position: absolute;
    right: 20;
    top: 16;
`;

export const imageUser = styled.Image`
    height: 44;
    width: 44;
    border-radius: 50;
`;

export const styles = StyleSheet.create({
    imageUser: {
        height: 44,
        width: 44,
        borderRadius: 50,
    },
    bodyScreenName: {
        color: '#FFFFFF',
        fontSize: 18,
        marginLeft: 14,
        marginTop: 40,
        fontFamily: 'OpenSans-Bold',
    },
    bodyScreenSubtitle: {
        color: '#FFFFFF',
        fontSize: 10,
        marginTop: 1,
        marginLeft: 14,
        fontFamily: 'OpenSans-Regular',
    },
    bodyScreenPopularMovies: {
        color: '#FFFFFF',
        fontSize: 12,
        marginTop: 21,
        marginLeft: 14,
        marginBottom: 30,
        fontFamily: 'OpenSans-SemiBold',
    },
});
