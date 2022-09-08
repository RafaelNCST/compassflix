import styled from 'styled-components/native';

export const ContainerCard = styled.View`
    width: 326px;
    height: 100px;
    border-radius: 10px;
    flex-direction: row;
    margin-bottom: 16;
`;

export const ContainerInfos = styled.View`
    height: 80%;
    width: 160px;
    margin-left: 30px;
    justify-content: space-around;
`;

export const ButtonDetailList = styled.TouchableOpacity`
    flex: 10;
    background-color: #8f9afc;
    justify-content: center;
    align-items: flex-start;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`;

export const ButtonDeleteList = styled.TouchableOpacity`
    background-color: #e9a6a6;
    flex: 1;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
`;
