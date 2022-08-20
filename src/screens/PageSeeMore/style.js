import styled from 'styled-components/native';

export const TextTitle = styled.Text`
    font-family: 'OpenSans-Bold';
    color: ${props => props.color};
    font-size: 20px;
    text-align: center;
    line-height: 27px;
    max-width: 250px;
    flex-wrap: wrap;
    margin-top: 80px;
`;
