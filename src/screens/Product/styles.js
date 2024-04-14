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

export const ProductContent = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  background-color: #717e25;
  margin-left: 30px;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  padding: 20px;
  elevation: 2;
`;

export const ProductImage = styled.Image`
  width: 230px;
  height: 230px;
  border-radius: 20px;
  margin-right: 20%;
`;

export const DescriptionContent = styled.View`
  width: 100%;
  padding: 0 25px;
  margin-top: 10px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #222;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  color: #444;
`;

export const DescriptionTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #222;
  margin-bottom: 7px;
`;

export const DescriptionText = styled.Text`
  font-size: 15px;
  color: #444;
  margin-bottom: 34px;
`;

export const AddToCartButton = styled.TouchableOpacity`
  width: 100%;
  height: 52px;
  align-items: center;
  justify-content: center;
  align-self: center;
  border: 2px solid #df7620;
  border-radius: 25px;
`;

export const CartButtonText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: #df7620;
`;

export const CheckoutButton = styled.TouchableOpacity`
  width: 100%;
  height: 52px;
  align-items: center;
  justify-content: center;
  align-self: center;
  background-color: #717e25;
  border-radius: 25px;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;
