import Interstellarimg from "./assets/Interstellar_Filme.png"
import ImdbInter from "./assets/IMDB_Inter.png"

import JamesBond from "./assets/007.png"
import imdbjames from "./assets/IMDB_007.png"

import Sorria from "./assets/sorria2.webp"
import Imdbsorria from "./assets/IMDB_sorria.png"

import chihiro from "./assets/chihiro.jpg"
import imdbChihiro from "./assets/IMDB_chihiro.png"

import tenet from "./assets/tenet.png"
import ImdbTenet from "./assets/IMDB_tenet.png"

import Castelo from "./assets/casteloanimado.jpg"
import ImdbAnimado from "./assets/IMDB_castelo.png"

import "./Style.scss"

export default function App(){

  const filmes = [
    {
      titulo: "Interstellar",
      imagem: Interstellarimg,
      descricao: "Uma jornada épica pelo espaço em busca de um novo lar para a humanidade, enquanto um pai luta para voltar para sua filha.",
      alt: "Pôster do filme Interstellar, mostrando um astronauta em um planeta desconhecido.",
      img: ImdbInter,
    },

    {
      titulo: "007",
      imagem: JamesBond,
      descricao: "James Bond sai da aposentadoria para enfrentar um vilão implacável que ameaça milhões de vidas com uma nova tecnologia mortal.",
      alt: "Pôster do filme 007 - Sem Tempo para Morrer, com James Bond segurando uma arma e um fundo azul estilizado.",
      img: imdbjames,
    },

    {
      titulo: "Sorria 2",
      imagem: Sorria,
      descricao: "O terror psicológico retorna com novas vítimas, trazendo sorrisos macabros e uma presença maligna que se espalha como um pesadelo.",
      alt: "Pôster do filme Sorria 2, com um rosto sorridente de forma sinistra em um fundo escuro.",
      img: Imdbsorria,
    },
  ]
  const filmes2 = [
    {
      titulo: "A viagem de Chihiro",
      imagem: chihiro,
      descricao: "Chihiro, uma garota de 10 anos, se vê presa em um mundo mágico de espíritos e precisa encontrar coragem para resgatar seus pais e voltar para casa.",
      alt: "Pôster do filme A Viagem de Chihiro, mostrando Chihiro ao lado do misterioso mundo dos espíritos.",
      img: imdbChihiro,
    },


    {
      titulo: "TeneT",
      imagem: tenet,
      descricao: "Um agente secreto precisa manipular o tempo para impedir uma ameaça global, em uma trama cheia de reviravoltas e ação intensa.",
      alt: "Pôster do filme Tenet, com cenas de ação e o protagonista em meio a uma distorção temporal.",
      img: ImdbTenet,
    },

    {
      titulo: "O Castelo Animado",
      imagem: Castelo,
      descricao: "Sophie, transformada em idosa por uma bruxa, embarca em uma aventura mágica ao lado do misterioso mago Howl e seu castelo ambulante.",
      alt: "Pôster do filme O Castelo Animado, mostrando o castelo flutuante e os personagens principais.",
      img: ImdbAnimado,
    },
  ]

  return(
    <>
    <header>   
     <h1> Filmes Favoritos </h1>
    </header>
    <main>
    <section className="primeirobox">
      {filmes.map((index,id) => (
        <article key={id}>
          <h1>{index.titulo}</h1>
          <img className="capa" src={index.imagem} alt={index.alt} />
          <h4>{index.descricao}</h4>
          <img className="IMDB" src={index.img} alt="" />
        </article>
      ))}
    </section>
    <section className="segundobox">
      {filmes2.map((index,id) => (
        <article key={id}>
          <h1>{index.titulo}</h1>
          <img className="capa" src={index.imagem} alt={index.alt} />
          <h4>{index.descricao}</h4>
          <img className="IMDB" src={index.img} alt="" />
        </article>
      ))}
    </section>
    </main>
    </>
  )
}