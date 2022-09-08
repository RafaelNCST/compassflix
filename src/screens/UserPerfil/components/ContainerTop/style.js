import styled from 'styled-components/native';

export const ContainerTop = styled.View`
    flex: 3;
    align-items: center;
    justify-content: space-around;
    width: 100%;
`;
export const ContainerUser = styled.View`
    height: ${props => props.heightContainer}px;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 20px;
`;
export const TextFilms = styled.Text`
    color: #fff;
    font-size: 14px;
`;
export const ImageUser = styled.Image`
    width: 78px;
    height: 78px;
    border-radius: 50px;
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
export const ButtonList = styled.TouchableOpacity`
    border-width: 1px;
    border-radius: 5px;
    background-color: #6c7bfc;
    border-color: #2456b6;
    width: 130px;
    height: 30px;
    justify-content: center;
    align-items: center;
`;
