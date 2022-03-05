import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Content = styled.View`
  margin-top: 32px;
  padding: 16px;
  background-color: #fff;
  border-radius: 9px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  line-height: 24px;
  padding: 10px 0px;
`;

export const Description = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #c6c6c6;
  text-align: justify;
`;

export const Timer = styled.View`
    width: 100%;
`;

export const Date = styled.Text`
  font-size: 23px;
  font-weight: bold;
  line-height: 25px;
  color: #ff5100;
`;

export const Footer = styled.View`
    padding: 15px 0px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Button = styled.TouchableOpacity`

`
