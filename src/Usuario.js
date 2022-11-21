import React from 'react'

export default function Usuario() {
    const [nome, setNome] = React.useState("Catana")
    const [imagem, setImagem] = React.useState("assets/img/catanacomics.svg")

    function trocarNome() {
        const novoNome = prompt("Escolha um novo nome")
        setNome(novoNome)
    }

    function trocarImagem() {
        const novaImagem = prompt("Escolha uma nova imagem")
        setImagem(novaImagem)
    }

    return (
        <div class="usuario">
            <img onClick={trocarImagem} src={imagem} />
            <div class="texto">
                <strong>catanacomics</strong>
                <span onClick={trocarNome}>
                    {nome}
                    <ion-icon name="pencil" ></ion-icon>
                </span>
            </div>
        </div>
    )
} 