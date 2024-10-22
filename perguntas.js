const perguntas = [
    {
        pergunta: "Qual é a expectativa média de vida de um cão de porte pequeno?",
        opcoes: [
            "5-7 anos",
            "8-10 anos",
            "12-15 anos",
            "16-20 anos"
        ],
        resposta: 2 // índice da resposta correta
    },
    {
        pergunta: "Qual é a principal razão pela qual os cães latem?",
        opcoes: [
            "Para chamar atenção",
            "Para se comunicar com outros cães",
            "Para marcar território",
            "Todas alternaternativas anteriores"
        ],
        resposta: 3
    },
    {
        pergunta: "Qual dessas raças é conhecida por sua habilidade de pastoeiro?",
        opcoes: [
            "Poodle",
            "Shih Tzu",
            "Pastor Alemão",
            "Border collie"
        ],
        resposta: 3
    },
    {
        pergunta: "Qual é a raça de cachorro mais rapida do mundo?",
        opcoes: [
            "Greyhound",
            "Labrador",
            "Pit Bull Monster",
            "Husky Siberino"
        ],
        resposta: 0
    },
    {
        pergunta: "Qual é a maior raça de cachorro do mundo em questão de altura?",
        opcoes: [
            "São Bernado",
            "Dogue Alemão",
            "Martim Ingles",
            "Terra-Nova"
        ],
        resposta: 1
    },
    {
        pergunta: "Qual a menor raça de cachorro?",
        opcoes: [
            "Chihuahuas",
            "Pinscher",
            "Poodle",
            "Pug"
        ],
        resposta: 0
    }
];

// Função para gerar os flashcards
function criarFlashcards() {
    const container = document.getElementById("container");

    perguntas.forEach((pergunta, index) => {
        const cartao = document.createElement("article");
        cartao.classList.add("cartao");

        cartao.innerHTML = `
            <div class="cartao__conteudo">
                <h3>Questão ${index + 1}</h3>
                <div class="cartao__conteudo__pergunta">
                    <p>${pergunta.pergunta}</p>
                </div>
                <div class="cartao__conteudo__opcoes">
                    ${pergunta.opcoes.map((opcao, i) => `
                        <label>
                            <input type="radio" name="pergunta${index}" value="${i}">
                            ${opcao}
                        </label>
                    `).join('')}
                </div>
                <button onclick="verificarResposta(${index})">Responder</button>
                <div class="resultado" id="resultado${index}" style="display:none;"></div>
            </div>
        `;
        
        container.appendChild(cartao);
    });
}

// Função para verificar a resposta
function verificarResposta(index) {
    const opcoes = document.getElementsByName(`pergunta${index}`);
    const resultadoDiv = document.getElementById(`resultado${index}`);
    let respostaSelecionada;

    opcoes.forEach((opcao, i) => {
        if (opcao.checked) {
            respostaSelecionada = i;
        }
    });

    if (respostaSelecionada === undefined) {
        resultadoDiv.innerHTML = "Por favor, selecione uma opção.";
    } else if (respostaSelecionada === perguntas[index].resposta) {
        resultadoDiv.innerHTML = "Resposta correta!";
    } else {
        resultadoDiv.innerHTML = "Resposta errada! A resposta correta é: " + perguntas[index].opcoes[perguntas[index].resposta];
    }

    resultadoDiv.style.display = "block";
}

// Chama a função para criar os flashcards ao carregar a página
window.onload = criarFlashcards;

