import { useState} from "react";
import CarrinhoContext from "./CarrinhoContext";


// Preenche com dados e funções
export function CarrinhoProvider({children}) {
  const [itens, setItens] = useState([]);

  function adicionarItem(item) {
    setItens((prev) => {
      const existe = prev.find((i) => i.id === item.id && i.tipo === item.tipo);

      if (existe) {
        return prev.map((i) =>
          i.id === item.id && i.tipo === item.tipo
            ? {...i, quantidade: i.quantidade + 1}
            : i,
        );
      }

      return [...prev, {...item, quantidade: 1}];
    });
  }

  function removerItem(id, tipo) {
    setItens((prev) => prev.filter((i) => !(i.id === id && i.tipo === tipo)));
  }

  function aumentarQuantidade(id, tipo) {
    setItens((prev) =>
      prev.map((i) =>
        i.id === id && i.tipo === tipo
          ? {...i, quantidade: i.quantidade + 1}
          : i,
      ),
    );
  }

  function diminuirQuantidade(id, tipo) {
    setItens((prev) => 
        prev.map((i) =>
            i.id === id && i.tipo === tipo && i.quantidade > 1
            ? { ...i, quantidade: i.quantidade - 1 }
            : i 
        )
    );
  }

  function limparCarrinho() {
    setItens([]);
  }

  const total = itens.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
  const totalItens = itens.reduce((acc, item) => acc + item.quantidade, 0);

  return (
    <CarrinhoContext.Provider
    value={{
        itens,
        total,
        totalItens,
        adicionarItem,
        removerItem,
        aumentarQuantidade,
        diminuirQuantidade,
        limparCarrinho,
    }}
    >
        {children}
    </CarrinhoContext.Provider>
  );
}


