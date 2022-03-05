import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #282828;
  align-items: center;
  padding: 100px 20px;
`;

export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Titles = styled.View`
  display: flex;
  flex-direction: column;
`;

export const Action = styled.View`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 35px;
  font-weight: bold;
  line-height: 50px;
  padding: 16px 0px;
`;

export const Subtitle = styled.Text`
  padding: 25px 0px;
  color: #c6c6c6;
  text-align: justify;
  font-size: 20px;
`;

export const Button = styled.TouchableOpacity`
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const Date = styled.Text`
  font-size: 23px;
  font-weight: bold;
  line-height: 25px;
  color: #ff5100;
  line-height: 30px;
`;

export const Image = styled.Image`
  transform: rotate(180deg);
`;

export const Text = styled.Text`
  color: #fff;
`;

export const LinkView = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 0px;
  text-align: center;
`;

export const Link = styled.View`
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #323232;
  border-radius: 5px;
`;

export const TextLink = styled.Text`
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
`;

export const LinkButton = styled.TouchableOpacity`
  background: rgba(4, 211, 97, 0.2);
  border-radius: 7px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const ButtonImage = styled.Image`
    width: 25px;
    height: 25px;
`
