import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";

import { ButtonText } from "../../components/ButtonText";

export function Home() {
  return (
    <Container>
      <Header />
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Menu>
        <li>
          <ButtonText title="Todos" $isactive></ButtonText>
        </li>
        <li>
          <ButtonText title="React"></ButtonText>
        </li>
        <li>
          <ButtonText title="Node"></ButtonText>
        </li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>

      <Content>
        <Section title="Minhas Notas">
          <Note
            data={{
              title: "React",
              tags: [
                { id: "1", name: "react" },
                { id: "2", name: "rocketseat" },
              ],
            }}
          />
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar Nota
      </NewNote>
    </Container>
  );
}
