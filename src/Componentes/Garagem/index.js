import { Carro } from '../Carro'
import { Botao, Estacionamento, GaragemContainer } from './styles'
import { useState } from 'react';

export function Garagem({ nome, mudaNome }) {
  // modificar o carro com a a função setCarro, enviar para o componente e mudar o carro no clique do botão
  const [carro, setCarro] = useState({
    cor: "rosa",
    ano: 1993,
    flex: false,
    adicionadoPor: "Conway",
    modelo: "Fusca"
  });

  const novoCarro = {
    modelo: "Fiesta",
    cor: "branco",
    ano: 2002,
    adicionadoPor: "Clara",
    flex: true
  };

  const carInho = {
    modelo: "Smart",
    cor: "branco",
    ano: 2015,
    adicionadoPor: "Eloísa",
    flex: false
  };
  const [carro2, setCarro2] = useState(carInho);

  const carAo = {
    modelo: "Onix",
    cor: "azul",
    ano: 2020,
    adicionadoPor: "Eloísa",
    flex: true
  };
  const [carro3, setCarro3] = useState(carAo);

  const carO = {
    modelo: "C3",
    cor: "prata",
    ano: 2022,
    adicionadoPor: "Eloísa",
    flex: true
  };
  const [carro4, setCarro4] = useState(carO);

  return (
    <GaragemContainer>
      <h1>Garagem da {nome}</h1>
      <Botao onClick={mudaNome}>Muda nome</Botao>

      <Estacionamento>
      <Carro
          modelo={carro.modelo}
          cor={carro.cor}
          ano={carro.ano}
          adicionadoPor={carro.adicionadoPor}
          flex={carro.flex}
          setCarro={setCarro}
          novoCarro={novoCarro}
        />
        <Carro
          modelo={carro2.modelo}
          cor={carro2.cor}
          ano={carro2.ano}
          adicionadoPor={carro2.adicionadoPor}
          flex={carro2.flex}
          setCarro={setCarro2}
          novoCarro={carO}
        />
        <Carro
          modelo={carro3.modelo}
          cor={carro3.cor}
          ano={carro3.ano}
          adicionadoPor={carro3.adicionadoPor}
          flex={carro3.flex}
          setCarro={setCarro3}
          novoCarro={carInho}
        />
        <Carro
          modelo={carro4.modelo}
          cor={carro4.cor}
          ano={carro4.ano}
          adicionadoPor={carro4.adicionadoPor}
          flex={carro4.flex}
          setCarro={setCarro4}
          novoCarro={carAo}
        />
      </Estacionamento>
    </GaragemContainer>
  )
}
