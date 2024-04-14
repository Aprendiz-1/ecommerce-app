import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f0f0f0;
`;

export const Banner = styled.View`
  width: 90%;
  height: 180px;
  border-radius: 15px;
  margin: 27px 0 24px 0;
  elevation: 2;
`;

export const TitleContent = styled.View`
  width: 100%;
  padding: 0 5%;
  margin: 20px 0 8px 0;
`;

export const Title = styled.Text`
  font-size: 23px;
  font-weight: bold;
  color: #333;
`;
