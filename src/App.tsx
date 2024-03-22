import { Container, Form, Input, Button } from "./style";
import {ThemeProvider} from 'styled-components'
import { theme } from "./theme/theme";
export default function App() {
  return (
    <ThemeProvider theme={theme}>
    <Container>
      <Form>
        <Input placeholder="e-mail"></Input>
        <Input placeholder="senha" type="password"></Input>
        <Button>Entrar</Button>
      </Form>
    </Container>
    </ThemeProvider>
  );
}
//npm install styled-components
