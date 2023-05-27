import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #f0f0f0;
`;

export const HeaderContent = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 15px;
`;

export const BackButton = styled.TouchableOpacity`
  width: 45px;
  height: 45px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 5px;
  elevation: 2;
`;

export const EmptyCart = styled.View`
  align-items: center;
  justify-content: center;
  padding-top: 60px;
`;

export const EmptyText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #222;
`;

export const ButtonsContent = styled.View`
  width: 100%;
  margin-top: 5px;
`;

export const CheckoutButton = styled.TouchableOpacity`
  width: 100%;
  height: 48px;
  align-items: center;
  justify-content: center;
  background-color: #4e599c;
  border-radius: 25px;
  elevation: 5;
`;

export const CleanButton = styled.TouchableOpacity`
  width: 100%;
  height: 48px;
  align-items: center;
  justify-content: center;
  background-color: rgb(219, 73, 73);
  border-radius: 25px;
  margin-top: 5px;
  elevation: 5;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;
