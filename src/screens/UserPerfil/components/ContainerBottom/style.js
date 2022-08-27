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

export const ImageFavorites = styled.Image`
    width: 67px;
    height: 89px;
    margin: 8px;
    border-radius: 7px;
`;

export const ImageAvaliation = styled.Image`
    width: 58px;
    height: 82px;
    margin: 7px;
    border-radius: 7px;
`;

export const ContainerAvaliationData = styled.View`
    flex-direction: column;
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
