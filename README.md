# SkillMatch JS

## Sobre o Projeto

O **SkillMatch JS** é um simulador de compatibilidade entre candidatos e vagas de front-end júnior, desenvolvido em JavaScript puro.

O sistema compara as habilidades de uma candidata com os requisitos de vagas fictícias e entrega:

- percentual de compatibilidade por vaga;
- habilidades encontradas e habilidades faltantes;
- vaga com maior compatibilidade;
- recomendação de estudo personalizada.
- resumo de todas as vagas 

> **Contexto:** Este projeto simula o motor de análise (engine) de uma startup de triagem de currículos, desenvolvido para ajudar o time de RH a automatizar a comparação entre perfis técnicos e requisitos de vagas de front-end.

---

## Objetivo

Praticar os conceitos do Módulo 01:

- lógica de programação;
- JavaScript;
- tipos de dados;
- condicionais e operadores;
- escopo e `var` / `let` / `const`;
- laços de repetição;
- funções e arrow functions;
- arrays e métodos de array (`filter`, `map`, `reduce`, `forEach`);
- objetos;
- classes, construtores e herança;
- uso do `this`;
- callbacks;
- closures;
- Promises;
- async/await;
- GitHub e GitHub Desktop;
- Kanban.

---

## Como Executar

Este projeto **não precisa de Node.js** nem de instalação de dependências.

**Opção 1 — Console do navegador (recomendado):**

1. Abra o Google Chrome.
2. Pressione `F12` ou `Ctrl + Shift + J` para abrir o DevTools.
3. Clique na aba **Console**.
4. Copie todo o conteúdo do arquivo `skillmatch.js`.
5. Cole no console e pressione `Enter`.

**Opção 2 — Extensão Code Runner no VS Code:**

1. Instale a extensão **Code Runner** (veja seção de Extensões).
2. Abra o arquivo `skillmatch.js` no VS Code.
3. Pressione `Ctrl + Alt + N` para executar.

---

## Extensões Recomendadas

| Extensão | Para quê serve |
|---|---|
| **Code Runner** | Executa arquivos JavaScript direto no VS Code, sem abrir o navegador |
| **Prettier** | Formata o código automaticamente ao salvar |
| **Live Server** | Serve arquivos HTML localmente com reload automático |

---

## Estrutura do Projeto

```txt
skillmatch-js/
|
|___ skillmatch.js
|___ README.md
```

---

## Organização com Git e Branches

O projeto foi organizado usando um fluxo simples de branches:

- `main`: branch principal, com a versão final e estável do projeto;
- `develop`: branch de desenvolvimento, usada para integrar as alterações antes da versão final;
- `feat/analise-vagas`: branch criada para desenvolver as principais funcionalidades de análise de compatibilidade;
- `docs/readme`: branch criada para atualizar e organizar a documentação do projeto.

O fluxo utilizado foi: desenvolver as funcionalidades na branch de feature, integrar na `develop`, atualizar a documentação na branch `docs/readme` e, por fim, enviar a versão final para a `main`.

## Conceitos de Lógica Aplicados

### `var`, `let` e `const`

No projeto, são priorizados `const` e `let`. O `var` foi evitado pois tem escopo de função (não de bloco), o que pode causar comportamentos inesperados.

**`const`** é usado sempre que o valor não precisa ser reatribuído. Isso inclui objetos e arrays: mesmo que seus conteúdos mudem (como ao usar `.push()`), a referência em memória permanece a mesma, então `const` é o correto.

```js
// Objeto declarado com const — suas propriedades podem mudar, mas a variável não é reatribuída
const candidato = {
  nome: "Carolina",
  habilidades: ["HTML", "CSS", "JavaScript", ...]
};

// Array declarado com const — .push() adiciona itens, mas não reatribui a variável
const vagas = [...];
vagas.push(vagaGenerica); 
```

Resultados de funções e cálculos que não mudam também usam `const`:

```js
const percentual = calcularPercentual(candidato, vaga);
const classificacao = classificarCompatibilidade(percentual);
const vagasCarregadas = await buscarVagasSimuladas();
```

**`let`** é usado apenas quando o valor precisa ser reatribuído após a declaração. No projeto, isso acontece em `calcularCompatibilidade`, `listarHabilidadesFaltantes` e `gerarRecomendacaoDeEstudo`, onde o array retornado pela função auxiliar é substituído por uma string formatada:

```js
// Primeiro recebe o array retornado pela função...
let habEncontradas = calcularHabilidadesEncontradas(candidato, vaga);

// ...depois é reatribuído com o valor final formatado
habEncontradas = habEncontradas.length === 0
  ? "Nenhuma. O candidato não possui nenhuma das habilidades exigidas."
  : habEncontradas.join(", ");
```

Como o valor de `habEncontradas` muda entre as duas linhas, `let` é necessário aqui — usar `const` causaria um erro.

### Métodos de Array

| Método | Onde é usado |
|---|---|
| `filter` | `calcularHabilidadesEncontradas` e `calcularHabilidadesFaltantes` |
| `map` | `gerarResumoDeVagas` |
| `reduce` | `melhorVaga` |
| `forEach` | exibição dos resumos no console |
| `includes` | verificação de habilidades do candidato |
| `push` | adição de novas vagas ao array |

### Classes e Herança

- `Vaga` — classe base com atributos e método `exibirResumo()`.
- `VagaFrontEnd extends Vaga` — herda de `Vaga` e adiciona o atributo `nivel` e o método `exibirNivel()`.

### Closure

`criarContadorDeAnalises()` retorna uma função interna que mantém o estado da variável `total` entre chamadas — sem expô-la ao escopo externo.

### Callback

`finalizarAnalise(nomeCandidato, callback)` recebe `exibirMensagemFinal` como argumento e a chama ao final da análise.

### Promise e Async/Await

`buscarVagasSimuladas()` retorna uma `Promise` que resolve após 1 segundo, simulando uma requisição assíncrona a uma API. `iniciarSistema()` usa `await` para pausar a execução até que os dados estejam disponíveis.

---

## Como a Internet Funciona (Resumo Técnico)

Quando você acessa um site ou consome uma API, seu navegador envia uma **requisição HTTP** a um servidor. O servidor processa e devolve uma **resposta** (geralmente em JSON ou HTML). Esse modelo é chamado de **arquitetura cliente-servidor**.

No SkillMatch JS, `buscarVagasSimuladas()` imita esse comportamento: a `Promise` com `setTimeout` representa o tempo de espera de uma chamada real a um servidor. Em vez de dados chegando instantaneamente, a aplicação aguarda — exatamente como acontece em sistemas reais que consultam APIs externas.

---

## Links

- 📋 **Quadro Kanban (Trello):** [Acessar quadro no Trello](https://trello.com/invite/b/6a0b0c626e161ed934c0f6a7/ATTI34167681310228e3446891a5f6de132f0D3FCE0A/skillmatch-js-simulador-de-compatibilidade)

- 🎥 **Vídeo explicativo do projeto:**
  - [Assistir no YouTube](https://youtu.be/TzRjym90JDU?feature=shared)
  - [Assistir pelo Google Drive](https://drive.google.com/file/d/1BLv7pGvetEJRj0301jw1NKtuf5YHqH6T/view?usp=drivesdk)

---

## Autora

Desenvolvido por **Carolina** como projeto prático do Módulo 01.