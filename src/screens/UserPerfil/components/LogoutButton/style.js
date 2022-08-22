import styled from 'styled-components/native';

export const ButtonStyled = styled.TouchableOpacity`
    position: absolute;
    top: 25px;
    right: 30px;
    width: 50px;
    height: 15px;
    border-radius: 50px;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    background-color: #e9a6a6;
`;

export const ButtonText = styled.Text`
    color: #000000;
    font-family: 'OpenSans-SemiBold';
    font-size: 10px;
    line-height: 12px;
    text-align: center;
`;

export const BodyModal = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.8);
    align-items: center;
    justify-content: center;
`;

export const ModalContainer = styled.View`
    width: 80%;
    height: 166px;
    background-color: #ffffff;
    border-radius: 25px;
    justify-content: space-evenly;
    align-items: flex-start;
`;

export const TextModal = styled.Text`
    font-family: ${props => props.nameFont};
    font-size: ${props => props.sizeFont}px;
    color: ${props => props.color};
    line-height: 20px;
    text-align: center;
    justify-content: center;
    margin-left: ${props => props.margin}px;
`;

export const ButtonContainer = styled.View`
    width: 185px;
    height: 21px;
    flex-direction: row;
    justify-content: space-between;
    align-self: center;
`;

export const Button = styled.TouchableOpacity`
    width: 83px;
    height: 100%;
    background-color: ${props => props.backColor};
    align-items: center;
    justify-content: center;
    border: 1px solid #000000;
    border-radius: 5px;
`;
