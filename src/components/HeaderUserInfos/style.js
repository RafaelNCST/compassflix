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

export const bodyScreenName = styled.Text`
    color: '#FFFFFF';
    font-size: 18;
    margin-left: 14;
    margin-top: 40;
    font-family: 'OpenSans-Bold';
`;

export const ScreenNameUserInfo = styled.Text`
    color: #e9a6a6;
`;

export const bodyScreenSubtitle = styled.Text`
    color: '#FFFFFF';
    font-size: 10;
    margin-top: 1;
    margin-left: 14;
    font-family: 'OpenSans-Regular';
`;

export const styles = StyleSheet.create({
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
