import { Container, Form, Input,Button } from "./style";

export default function App() {
  return (
    <Container>
      <Form>
        <Input placeholder = "e-mail"></Input>
        <Input placeholder="senha" type="password"></Input>
        <Button>Entrar</Button>
      </Form>
    </Container>
  );
}
//npm install styled-components
