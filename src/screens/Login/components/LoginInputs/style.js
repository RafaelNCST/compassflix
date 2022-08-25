import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const LoginInput = styled.View`
    width: 100%;
    height: 95px;
    align-items: center;
    justify-content: space-between;
`;
export const TextStyle = styled.TextInput`
    font-size: 14px;
    margin-left: 10px;
    flex: 1;
    color: #fff;
    font-family: 'OpenSans-Regular';
`;
export const Eye = styled.TouchableOpacity`
    margin-right: 10px;
`;
export const ErrorContainer = styled.View`
    height: 40px;
    align-self: center;
    align-items: center;
    justify-content: center;
`;
export const ErrorText = styled.Text`
    color: #ec2626;
    align-self: center;
    font-family: 'OpenSans-SemiBold';
    line-height: 12px;
    font-size: 12px;
`;
export const Button = styled.TouchableOpacity`
    width: 100px;
    height: 40px;
    border-radius: 20px;
    background-color: #e9a6a6;
    align-self: center;
    align-items: center;
    justify-content: center;
`;
export const Enter = styled.Text`
    color: #000;
    font-size: 15px;
    font-family: 'OpenSans-Bold';
`;
export const styles = StyleSheet.create({
    input: {
        width: '70%',
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(86, 86, 86, 0.8)',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
    },
});
