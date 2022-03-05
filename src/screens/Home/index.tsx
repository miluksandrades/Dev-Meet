import { Image } from "react-native";
import {
  Button,
  Container,
  Content,
  Detail,
  Subdetail,
  Subtitle,
  Title,
} from "./styles";

export function Home({ navigation }) {
  return (
    <Container>
      <Content>
        <Title>
          Olá, DEV<Detail>!</Detail>
        </Title>
        <Subtitle>
          Encontre o seu <Subdetail>próximo</Subdetail> evento de programação!
        </Subtitle>
      </Content>
      <Image source={require("../../../assets/person.png")} width={30} />
      <Button onPress={() => navigation.push("Category")}>
        <Image source={require("../../../assets/Arrow-White.png")} />
      </Button>
    </Container>
  );
}
