import { parseISO } from "date-fns";
import format from "date-fns/format";
import { Image, Text } from "react-native";
import { events } from "../../../api/events";
import {
  Container,
  Content,
  Date,
  Description,
  Timer,
  Title,
  Footer,
  Button,
} from "./styles";

export function EventList({ navigation }) {
  return (
    <Container>
      {events.slice(0, 10).map((event) => {
        return (
          <Content key={event.id}>
            <Timer>
              <Date>
                {format(
                  parseISO(event.dataInicio),
                  "dd/MMM - HH:mm"
                ).toLocaleUpperCase()}
              </Date>
            </Timer>
            <Title>{event.titulo}</Title>
            <Description numberOfLines={3}>{event.descricao}</Description>
            <Footer>
              <Text>
                Organizado por:
                <Text style={{ fontWeight: "bold" }}>{event.organizador}</Text>
              </Text>
              <Button
                onPress={() =>
                  navigation.navigate("EventDetail", { id: event.id })
                }
              >
                <Image
                  source={require("../../../../assets/Arrow-Orange.png")}
                />
              </Button>
            </Footer>
          </Content>
        );
      })}
      <Text style={{textAlign: "center", color: "#fff", paddingTop: 30}}>Sem mais eventos...</Text>
    </Container>
  );
}
