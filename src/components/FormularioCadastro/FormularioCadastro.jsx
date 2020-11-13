import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import React, { Fragment, useEffect, useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ aoEnviar, validacoes }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDadosColetados] = useState({});

  useEffect(() => {
    if (etapaAtual === etapas.length - 1) {
      aoEnviar(dadosColetados);
    }
  });

  console.log(validacoes);

  const etapas = [
    <DadosUsuario aoEnviar={DadosColetados} validacoes={validacoes} />,
    <DadosPessoais aoEnviar={DadosColetados} validacoes={validacoes} />,
    <DadosEntrega aoEnviar={DadosColetados} validacoes={validacoes}/>,
    <Typography variant="h5" align="center">
      Obrigado pelo Cadastro !
    </Typography>,
  ];

  function DadosColetados(dados) {
    setDadosColetados({ ...dadosColetados, ...dados });
    Proximo();
  }

  function Proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  return (
    <Fragment>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalizacao</StepLabel>
        </Step>
      </Stepper>
      {etapas[etapaAtual]}
    </Fragment>
  );
}

export default FormularioCadastro;
