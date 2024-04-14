import styled from 'styled-components';

export const CartProductContainer = styled.View`
  background-color: #717e25;
  border-radius: 20px;
  margin-bottom: 18px;
  elevation: 5;
`;

export const BuyProductText = styled.Text`
  font-size: 16px;
  font-weight: 500,
  color: #fff;
  margin: 6px 0;
`;

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 160px;
  flex-direction: row;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
`;

export const LeftContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const RightContent = styled.View`
  flex: 2;
  justify-content: space-between;
  padding-top: 10px;
`;

export const Name = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #222;
`;

export const Price = styled.Text`
  font-size: 15px;
  color: #444;
`;

export const ButtonsContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
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

export const RemoveButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: #cf4a49;
  border-radius: 20px;
  margin-left: 15px;
`;
