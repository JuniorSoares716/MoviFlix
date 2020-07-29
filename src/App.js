import React from 'react';
import Menu from './components/Menu';
import dadosInicias from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';


function App() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />
      <BannerMain
        videoTitle={dadosInicias.categorias[0].videos[0].titulo}
        url={dadosInicias.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosInicias.categorias[0]}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosInicias.categorias[1]}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosInicias.categorias[2]}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosInicias.categorias[3]}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosInicias.categorias[4]}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosInicias.categorias[5]}
      />
      <Footer />
    </div >
  );
}

export default App;
