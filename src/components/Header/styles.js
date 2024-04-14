import styled from 'styled-components';

export const HeaderContainer = styled.SafeAreaView`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px 0 20px;
`;

export const HeaderInput = styled.TextInput`
  width: 83%;
  height: 55px;
  color: #222;
  background-color: #fff;
  border-radius: 30px;
  padding: 0 15px;
  elevation: 2;
`;

export const NavButton = styled.TouchableOpacity`
  width: 55px;
  height: 55px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 30px;
  elevation: 2;
`;

export const AmountCircle = styled.View`
  width: 18px;
  height: 18px;
  align-items: center;
  justify-content: center;
  background-color: #df7620;
  border-radius: 10px;
  position: absolute;
  top: 0;
  right: 0;
`;

export const AmountText = styled.Text`
  font-size: 10px;
  color: #fff;
`;
