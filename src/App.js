import { Garagem } from './Componentes/Garagem'
import { GlobalStyled } from './GlobalStyled'
import { useState } from 'react'

export default function App() {
// Declarar o estado
//    [estado, função que modifica o valor do estado]
  const [nome, setNome] = useState("Labenu");

  const mudaNome = () => {
    setNome("Conway");
  };
// Criar um estado na garagem com o  carro, passar os valores para dentro do componente Carro  

  return (
    <div className="App">
      <GlobalStyled />
      <Garagem nome={nome} mudaNome={mudaNome} />
    </div>
  )
}
