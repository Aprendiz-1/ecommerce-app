import styled from 'styled-components';

export const Container = styled.TouchableOpacity`
    width: 45%;
    height: 220px;
    background-color: #fff;
    border-radius: 10px;
    margin: 5px;
    elevation: 5;
`;

export const CartButton = styled.TouchableOpacity`
    width: 42px;
    height: 42px;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.btColor};
    border-radius: 22px;
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 99;
`;

export const ImageContent = styled.View`
    width: 100%;
    height: 70%;
    align-items: center;
    justify-content: center;
    padding-top: 15px;
`;

export const InfoContent = styled.View`
    width: 100%;
    height: 30%;
    background-color: #4E599C;
    border-radius: 10px;
    padding: 8px;
`;

export const Name = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #fff;
`;

export const Price = styled.Text`
    color: #ddd;
`;