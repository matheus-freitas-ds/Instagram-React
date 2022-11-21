import React from 'react'

export default function Posts(){
  const dados = [
    {
      perfilimg: "assets/img/meowed.svg",
      perfil: "meowed",
      conteudoimg: "assets/img/gato-telefone.svg",
      curtidoporimg: "assets/img/respondeai.svg",
      curtidopor: "respondeai",
      numerocurtidas: 101523,
    },
    {
      perfilimg: "assets/img/barked.svg",
      perfil: "barked",
      conteudoimg: "assets/img/dog.svg",
      curtidoporimg: "assets/img/adorable_animals.svg",
      curtidopor: "adorable_animals",
      numerocurtidas: 99159,
    },
  ];

  return (
    <div class="posts">
      {dados.map((d) => (
        <Post
          perfilimg={d.perfilimg}
          perfil={d.perfil}
          conteudoimg={d.conteudoimg}
          curtidoporimg={d.curtidoporimg}
          curtidopor={d.curtidopor}
          numerocurtidas={d.numerocurtidas}
        />
      ))}
    </div>
  )
}

function Post(props) {
  const [curtiu, setCurtiu] = React.useState(false);
  const [namecurtiu, setNamecurtiu] = React.useState(
    <ion-icon onClick={curtir} name="heart-outline" data-test="like-post"></ion-icon>
  );
  const [likes, setLikes] = React.useState(props.numerocurtidas);

  const [salvou, setSalvou] = React.useState(false);
  const [namesalvou, setNamesalvou] = React.useState("bookmark-outline");

  function curtir() {
    if (curtiu === false) {
      setNamecurtiu(
        <ion-icon class="corRed" onClick={curtir} name="heart"></ion-icon>
      );
      setLikes(likes + 1);
      setCurtiu(true);
    } else {
      setNamecurtiu(
        <ion-icon
          onClick={curtir}
          name="heart-outline"
        ></ion-icon>
      );
      setLikes(likes - 1);
      setCurtiu(false);
    }
  }

  function salvar() {
    if (salvou === false) {
      setSalvou(true);
      setNamesalvou("bookmark");
    } else {
      setSalvou(false);
      setNamesalvou("bookmark-outline");
    }
  }

  return (
    <div class="post" data-test="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.perfilimg} />
          {props.perfil}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={props.conteudoimg} onClick={curtir} data-test="post-image"/>
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            {namecurtiu}
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon onClick={salvar} name={namesalvou} data-test="save-post"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.curtidoporimg} />
          <div class="texto">
            Curtido por <strong>{props.curtidopor}</strong> e{" "}
            <strong data-test="likes-number">outras {likes} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}