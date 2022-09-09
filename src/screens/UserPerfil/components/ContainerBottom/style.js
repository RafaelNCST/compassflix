import styled from 'styled-components/native';

export const ContainerBottom = styled.View`
    flex: 4;
    align-items: center;
    width: 100%;
`;

export const Message = styled.View`
    margin-top: 35px;
`;
export const MessageText = styled.Text`
    color: #fff;
`;

export const ContainerData = styled.View`
    flex: ${props => props.flex};
    width: 100%;
    border-top-width: 1px;
    border-style: solid;
    border-color: rgba(255, 255, 255, 0.19);
    align-items: center;
`;

export const ContainerWords = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding-vertical: 16px;
    padding-horizontal: 20px;
`;

export const BlankSpaceFooter = styled.View`
    flex: 1;
    width: 100%;
`;

export const ListData = styled.View`
    width: 100%;
    flex: 1;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
`;

export const ImageContainer = styled.View`
    width: 67px;
    height: 89px;
    margin: 8px;
    border-radius: 7px;
    background-color: #8075ff;
`;

export const ImageFavorites = styled.Image`
    flex: 1;
    border-radius: 7px;
`;

export const ImageAvaliation = styled.Image`
    flex: 1;
    width: 58px;
    height: 82px;
    border-radius: 7px;
    background-color: #8f9afc;
    border-radius: 7px;
`;

export const IconContainerFavorites = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const IconContainerAvaliation = styled.TouchableOpacity`
    width: 58px;
    height: 82px;
    border-radius: 7px;
    background-color: #8f9afc;
    align-items: center;
    justify-content: center;
`;

export const ContainerAvaliationData = styled.View`
    margin: 7px;
    width: 58px;
`;

export const ContainerInfosData = styled.View`
    flex-direction: row;
    margin-top: 1px;
    margin-left: 5px;
    justify-content: flex-start;
    width: 100%;
`;

export const ContainerInfosDataText = styled.Text`
    color: #ffffff;
    margin-left: 4.5px;
    font-size: 9px;
    font-family: 'OpenSans-SemiBold';
`;
