import styled from 'styled-components';

export const ContainerBottom = styled.View`
    flex: 4;
    align-items: center;
    width: 100%;
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
`;

export const ImageAvaliation = styled.Image`
    width: 58px;
    height: 82px;
    margin: 7px;
    border-radius: 7px;
`;
