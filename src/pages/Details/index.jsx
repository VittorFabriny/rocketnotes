import { Container, Links } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from "../../components/Tags";
import { Content } from "./styles";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir Nota" />

          <h1>Introdução ao React</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit laborum a debitis laudantium odit sunt nam ipsam reprehenderit molestias, ut officiis inventore. Minus omnis incidunt perferendis nihil tenetur quo fuga.</p>

          <Section title="Links úteis">
            <Links>
              <li>https://github.com/VittorFabriny</li>
              <li>https://www.linkedin.com/in/vittorfabriny/</li>
              <li>https://www.rocketseat.com.br/</li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="nodejs" />
            <Tag title="react" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
