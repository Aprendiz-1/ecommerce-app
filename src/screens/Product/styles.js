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

export const ProductImage = styled.Image`
    width: 310px; 
    height: 310px;
    border-radius: 20px; 
    margin-bottom: 10px;
`;

export const TitleContent = styled.View`
    width: 90%;
`;

export const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #000;
    margin-bottom: 5px;
`;

export const SubTitleContent = styled.View`
    width: 120px;
    height: 42px;
    align-items: center;
    justify-content: center;
    background-color: #4E599C;
    border-radius: 25px;
    elevation: 2;
`;

export const SubTitle = styled.Text`
    font-size: 18px;
    color: #fff;
`;

export const DescriptionContent = styled.View`
    width: 90%;
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
    margin: 15px 0;
    elevation: 4;
`;

export const DescriptionTitle = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: #000;
    margin-bottom: 6px;
`;

export const DescriptionText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #222;
`;

export const CheckoutButton = styled.TouchableOpacity`
    width: 90%;
    height: 48px;
    align-items: center;
    justify-content: center;
    background-color: #4E599C;
    border-radius: 25px;
    elevation: 5;
`;

export const ButtonText = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #fff;
`;