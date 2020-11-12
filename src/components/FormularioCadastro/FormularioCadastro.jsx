import { Typography } from "@material-ui/core";
import React, { Fragment, useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ aoEnviar, validarCpf }) {
  const [etapa, setEtapa] = useState(0);

  function Proximo(){
    setEtapa(etapa+1)
  }

  function FormularioAtual(etapa) {
    switch (etapa) {
      case 0:
        return <DadosUsuario aoEnviar={Proximo}/>;
      case 1:
        return <DadosPessoais aoEnviar={Proximo} validarCpf={validarCpf} />;
      case 2:
        return <DadosEntrega aoEnviar={aoEnviar}/>;
      default:
        <Typography>"Erro desconhecido!!"</Typography>;
    }
  }

  return <Fragment>{FormularioAtual(etapa)}</Fragment>;
}

export default FormularioCadastro;
