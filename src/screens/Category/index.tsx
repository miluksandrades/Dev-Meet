import { ScrollView, Text } from "react-native";
import {
  Container,
  Content,
  Title,
  Subtitle,
  Button,
  Image,
  Titles,
  Action,
} from "../Category/styles";
import { EventList } from "./EventList";

export function Category({ navigation }) {
  return (
    <ScrollView>
      <Container>
        <Content>
          <Titles>
            <Title>Eventos disponíveis</Title>
            <Subtitle numberOfLines={2}>
              Selecione o evento desejado. &nbsp; E espere sua data.
            </Subtitle>
          </Titles>
          <Action>
            <Button onPress={() => navigation.goBack()}>
              <Image source={require("../../../assets/Arrow-White.png")} />
              <Text style={{ color: "#c6c6c6", fontSize: 16 }}>Voltar</Text>
            </Button>
          </Action>
        </Content>
        <EventList navigation={navigation} />
      </Container>
    </ScrollView>
  );
}
