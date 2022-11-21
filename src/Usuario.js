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
        <div class="usuario" data-test="user">
            <img onClick={trocarImagem} src={imagem} data-test="profile-image"/>
            <div class="texto">
                <strong data-test="name">catanacomics</strong>
                <span onClick={trocarNome} data-test="edit-name">
                    {nome}
                    <ion-icon name="pencil" ></ion-icon>
                </span>
            </div>
        </div>
    )
} 