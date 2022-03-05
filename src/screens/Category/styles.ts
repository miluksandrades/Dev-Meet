import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #282828;
  align-items: center;
  padding: 100px 20px;
  
`;

export const Content = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Titles = styled.View`
  display: flex;
  flex-direction: column;  
  width: 75%;

`;

export const Action = styled.View`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Title = styled.Text`
  color: #fff;
  font-size: 35px;
  font-weight: bold;
  line-height: 50px;
`;

export const Subtitle = styled.Text`
  padding: 25px 0px;
  color: #c6c6c6;
  font-size: 20px;
`;

export const Button = styled.TouchableOpacity`
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const Image = styled.Image`
  transform: rotate(180deg);
`

