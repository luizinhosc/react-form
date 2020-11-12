import { Typography } from "@material-ui/core";
import React, { Fragment, useEffect, useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ aoEnviar, validarCpf }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDadosColetados] = useState({});
  useEffect(()=>{
    console.log(dadosColetados);
  })

  const etapas = [
    <DadosUsuario aoEnviar={DadosColetados} />,
    <DadosPessoais aoEnviar={DadosColetados} validarCpf={validarCpf} />,
    <DadosEntrega aoEnviar={DadosColetados} />,
  ];

  function DadosColetados(dados) {
    setDadosColetados({ ...dadosColetados, ...dados });
    Proximo();
  }

  function Proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  return <Fragment>{etapas[etapaAtual]}</Fragment>;
}

export default FormularioCadastro;
