import { RiShutDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import { Container, Profile, Logout } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/VittorFabriny.png" alt="Foto do Usuário" />

        <div>
          <span>Bem-Vindo</span>
          <strong>Vittor Fabriny</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
