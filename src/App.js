import { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import { validarCpf, validarSenha } from "./modelos/cadastro";
import ValidacoesCadastro from "./contexts/ValidacaoCadastro";

class App extends Component {
  render() {
    return (
      <Container maxWidth="sm">
        <Typography variant="h3" align="center">
          Formulário de cadastro
        </Typography>
        <ValidacoesCadastro.Provider
          value={{ cpf: validarCpf, senha: validarSenha }}
        >
          <FormularioCadastro aoEnviar={aoEnviarForm} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}
function aoEnviarForm(dados) {
  console.log({ dados });
}

export default App;
