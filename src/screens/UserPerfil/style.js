import styled from 'styled-components/native';

export const ContainerTop = styled.View`
    flex: 3;
    align-items: center;
    justify-content: space-around;
    width: 100%;
`;

export const ContainerMid = styled.View`
    height: 51px;
    align-items: center;
    flex-direction: row;
    width: 100%;
`;

export const ContainerBottom = styled.View`
    flex: 4;
    align-items: center;
    width: 100%;
`;

export const ImageUser = styled.Image`
    width: 78px;
    height: 78px;
    border-radius: 50px;
`;

export const ImageButton = styled.Image`
    width: 28px;
    height: 28px;
`;

export const ContainerUser = styled.View`
    height: ${props => props.heightContainer}px;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 15px;
`;

export const TextTitle = styled.Text`
    font-family: 'OpenSans-Bold';
    color: ${props => props.color};
    line-height: 24.51px;
    text-align: center;
    padding-top: ${props => props.paddingTop}px;
    flex: 1;
    font-size: ${props => props.size}px;
`;

export const TextInfos = styled.Text`
    font-family: ${props => props.fontFamily};
    color: ${props => props.color};
    line-height: 15px;
    text-align: center;
    font-size: 11px;
`;

export const ButtonMenu = styled.TouchableOpacity`
    height: 100%;
    width: 50%;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255, 255, 255, 0.19);
    border-left-width: ${props => props.sizeLeft}px;
    border-right-width: ${props => props.sizeRight}px;
    border-bottom-width: 0;
`;

export const ContainerData = styled.View`
    flex: ${props => props.flex};
    width: 100%;
    border-top-width: 1px;
    border-style: solid;
    border-color: rgba(255, 255, 255, 0.19);
    align-items: center;
`;

export const BlankSpaceFooter = styled.View`
    flex: 1;
    width: 100%;
`;

export const ContainerWords = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding-vertical: 16px;
    padding-horizontal: 20px;
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
`;

export const ImageAvaliation = styled.Image`
    width: 58px;
    height: 82px;
    margin: 7px;
`;
