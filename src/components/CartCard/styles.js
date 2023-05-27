import styled from 'styled-components';

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 160px;
    flex-direction: row;
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
    margin: 5px 0;
    elevation: 4;
`;

export const LeftContent = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const RightContent = styled.View`
    flex: 2;
    justify-content: center;
`;

export const Name = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #000;
`;

export const Price = styled.Text`
    font-size: 15px;
    color: #222;
`;

export const AmountContent = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin: 5px 0;
`;

export const AmountButton = styled.TouchableOpacity`
    width: 35px;
    height: 35px;
    align-items: center;
    justify-content: center;
    background-color: #ddd;
    border-radius: 20px;
`;

export const AmountText = styled.Text`
    font-size: 15px;
    color: #000;
    margin: 0 3px;
`;

export const ButtonsContent = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;

export const BuyButton = styled.TouchableOpacity`
    width: 100px;
    height: 40px;
    align-items: center;
    justify-content: center;
    background-color: #4E599C;
    border-radius: 20px;
`;

export const BuyText = styled.Text`
    font-size: 22px;
    color: #fff;
`;

export const RemoveButton = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    background-color: #CF4A49;
    border-radius: 20px;
    margin-left: 6px;
`;