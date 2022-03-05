import { parseISO } from "date-fns/esm";
import format from "date-fns/format";
import { events } from "../../../api/events";
import { Footer } from "../EventList/styles";
import {
  Container,
  Content,
  Titles,
  Title,
  Subtitle,
  Action,
  Button,
  Image,
  Date,
  Wrapper,
  Text,
  LinkView,
  Link,
  TextLink,
  LinkButton,
  ButtonImage
} from "./styles";

export function EventDetail({ route, navigation }) {
  const { id } = route.params;
  const item = events.filter((item) => item.id === id);

  //console.log({id, item});

  return (
    <Container>
      {item.map((event) => {
        return (
          <Wrapper key={event.id}>
            <Content>
              <Titles>
                <Date>
                  {format(
                    parseISO(event.dataInicio),
                    "dd/MMM"
                  ).toLocaleUpperCase()}
                </Date>
                <Date style={{ fontWeight: "normal" }}>
                  {format(
                    parseISO(event.dataInicio),
                    "HH:mm"
                  ).toLocaleUpperCase()}
                </Date>
              </Titles>
              <Action>
                <Button onPress={() => navigation.goBack()}>
                  <Image
                    source={require("../../../../assets/Arrow-White.png")}
                  />
                  <Text style={{ color: "#c6c6c6", fontSize: 16 }}>Voltar</Text>
                </Button>
              </Action>
            </Content>
            <Title>{event.titulo}</Title>
            <Subtitle>{event.descricao}</Subtitle>
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
              </Button>
            </Footer>
            <LinkView>
                <Title style={{textAlign: "center"}}>Link do evento</Title>
                <Link>
                    <TextLink>{event.link}</TextLink>
                    <LinkButton>
                        <ButtonImage source={require('../../../../assets/Arrow-White.png')} />
                    </LinkButton>
                </Link>
            </LinkView>
          </Wrapper>
        );
      })}
    </Container>
  );
}
