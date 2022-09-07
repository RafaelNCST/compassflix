import styled from 'styled-components/native';

export const ScreenView = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;
export const AddButtonList = styled.TouchableOpacity`
    border-radius: 30px;
    background-color: #e9a6a6;
    width: 51px;
    height: 51px;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 650px;
    right: 50px;
`;
export const ListBodyModal = styled.View`
    background-color: rgba(0, 0, 0, 0.8);
    flex: 1;
    align-items: center;
    justify-content: center;
`;
export const ListContainerModal = styled.View`
    width: 350px;
    height: 200px;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 25px;
`;
export const TextListModal = styled.Text`
    font-weight: bold;
    color: #000;
    font-size: 14px;
    margin-bottom: 15px;
`;
export const TopInputModal = styled.TextInput`
    background-color: rgba(196, 196, 196, 0.35);
    width: 290px;
    height: 34px;
    color: #8e8e8e;
    border-radius: 7px;
    font-size: 13px;
    padding-horizontal: 15px;
`;
export const BottomInputModal = styled.TextInput`
    margin-top: 5px;
    background-color: rgba(196, 196, 196, 0.35);
    width: 290px;
    height: 55px;
    color: #8e8e8e;
    border-radius: 7px;
    font-size: 13px;
    padding-horizontal: 15px;
    padding-bottom: 30px;
`;
export const ButtonModal = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    border: 1px #000000;
    border-radius: 5px;
    width: 90px;
    height: 20px;
`;
export const BottomView = styled.View`
    margin-top: 15px;
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    padding-horizontal: 65px;
`;
export const SaveText = styled.Text`
    font-weight: bold;
    font-size: 10px;
    color: #fff;
    background-color: #000;
    height: 100%;
    width: 100%;
    text-align: center;
    padding-top: 2px;
`;
export const CancelText = styled.Text`
    font-weight: bold;
    font-size: 10px;
    color: #000;
`;
