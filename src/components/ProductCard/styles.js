import styled from 'styled-components';

export const Container = styled.TouchableOpacity`
  width: 42%;
  height: 220px;
  background-color: #fff;
  border-radius: 10px;
  margin: 8px;
  elevation: 2;
`;

export const CartButton = styled.TouchableOpacity`
  width: 42px;
  height: 42px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.btColor};
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
  background-color: #717e25;
  border-radius: 10px;
  padding: 8px;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #fff;
`;

export const Price = styled.Text`
  color: #f2f2f2;
`;
