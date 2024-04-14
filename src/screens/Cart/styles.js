import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f0f0f0;
`;

export const HeaderContent = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 15px;
  margin-bottom: 8px;
`;

export const BackButton = styled.TouchableOpacity`
  width: 54px;
  height: 54px;
  align-items: center;
  justify-content: center;
  background-color: #df7620;
  border-radius: 30px;
  elevation: 2;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #222;
  margin: 0 0 27px 22px;
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
  padding-bottom: 10px;
  margin-top: 15px;
`;

export const CheckoutButton = styled.TouchableOpacity`
  width: 100%;
  height: 52px;
  align-items: center;
  justify-content: center;
  background-color: #717e25;
  border-radius: 30px;
  elevation: 5;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export const CleanButton = styled.TouchableOpacity`
  width: 100%;
  height: 52px;
  align-items: center;
  justify-content: center;
  border: 2px solid #df7620;
  border-radius: 30px;
  margin-bottom: 8px;
`;

export const CleanButtonText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: #df7620;
`;
