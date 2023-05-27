import styled from 'styled-components';

export const HeaderContainer = styled.SafeAreaView`
    width: 100%;
    height: 60px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: 0 15px;
`;

export const NavButton = styled.TouchableOpacity`
    width: 45px;
    height: 45px;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 5px;
    elevation: 2;
`;

export const AmountCircle = styled.View`
    width: 18px;
    height: 18px;
    align-items: center;
    justify-content: center;
    background-color: #4E599C;
    border-radius: 10px;
    position: absolute;
    top: 0;
    right: 0;
`;

export const AmountText = styled.Text`
    font-size: 10px;
    color: #fff;
`;