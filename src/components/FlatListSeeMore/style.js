import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    ContainerFlatList: {
        width: '100%',
        alignItems: 'flex-start',
    },
});

export const BlankInfos = styled.View`
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const BlankText = styled.Text`
    color: white;
    font-family: 'OpenSans-Regular';
    font-size: 16px;
    padding: 20px;
    line-height: 15px;
`;
