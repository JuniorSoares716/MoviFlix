
import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }

  const [categorias, setCategorias] = useState([]);
  const [Values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...Values,
      [chave]: valor,
    })
  }
  function handleChange(event) {

    const { value } = event.target;
    setValue(
      event.target.getAttribute("name"),
      value
    );


  }
  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {Values.nome}</h1>
      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        setCategorias([
          ...categorias,
          Values
        ]);

        setValues(valoresIniciais)
      }}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={Values.nome}
          onChange={handleChange}
        />

        <div>
          <label>
            Descrição da Categoria:
          <textarea
              type="text"
              value={Values.descricao}
              name="descricao"
              onChange={handleChange}
            />
          </label>
        </div>

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={Values.cor}
          onChange={handleChange}
        />
        {/* <div>
          <label>
            Cor:
          <input
              type="color"
              value={Values.cor}
              name="cor"
              onChange={handleChange}
            />
          </label>

        </div> */}

        <button>
          Cadastrar
        </button>
      </form>
      <ul>
        {categorias.map((categoria, indece) => {
          return (
            <li key={`${categoria}${indece}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para a home
      </Link>
    </PageDefault >
  )
}

export default CadastroCategoria;