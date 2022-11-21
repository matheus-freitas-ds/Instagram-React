export default function Stories() {
    const dados = [
        { texto: "9gag", imagem: "assets/img/9gag.svg" },
        { texto: "meowed", imagem: "assets/img/meowed.svg" },
        { texto: "barked", imagem: "assets/img/barked.svg" },
        {
            texto: "nathanwpylestrangeplanet",
            imagem: "assets/img/nathanwpylestrangeplanet.svg",
        },
        { texto: "wawawicomics", imagem: "assets/img/wawawicomics.svg" },
        { texto: "respondeai", imagem: "assets/img/respondeai.svg" },
        { texto: "filomoderna", imagem: "assets/img/filomoderna.svg" },
        { texto: "memeriagourmet", imagem: "assets/img/memeriagourmet.svg" },
    ]

    return (
        <div class="stories">
            {dados.map((d) => (
                <Story texto={d.texto} imagem={d.imagem} />
            ))}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

function Story(props) {
    return (
      <div class="story">
        <div class="imagem">
          <img src={props.imagem}/>
        </div>
        <div class="usuario">{props.texto}</div>
      </div>
    )
  }