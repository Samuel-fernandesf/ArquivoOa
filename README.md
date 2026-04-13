# Arquivo Oa - Estante Virtual

Este projeto é uma aplicação mobile desenvolvida em **React Native** para o gerenciamento de uma estante virtual de Histórias em Quadrinhos (HQs), focada na cronologia do Lanterna Verde escrita por Geoff Johns.

O aplicativo permite ao usuário visualizar a lista oficial, adicionar novos títulos, marcar HQs como lidas e remover itens da coleção.

---

## Funcionalidades

- **Listagem de Dados:** Utilização de `FlatList` para renderizar a coleção de HQs de forma otimizada.
- **Entrada de Dados:** `TextInput` para que o usuário possa adicionar novos títulos à sua estante.
- **Gerenciamento de Estado:** Uso intensivo do hook `useState` para criar, ler, atualizar e remover itens (CRUD básico).
- **Estilização Modular:** Separação de responsabilidades com um arquivo de estilos externo (`styles/styles.js`).

## Bônus Implementados

- **Remoção de Itens:** Cada card possui um botão "Remover" que exclui a HQ da lista via `filter`.
- **Status Visual (Badge):** Design de cards com bordas laterais coloridas para identificação visual rápida.
- **Feedback de Leitura:** Função `concludeTitle` que aplica estilização dinâmica (texto riscado e alteração de cor) ao marcar uma HQ como concluída.
- **Empty State:** Mensagem amigável ("Nenhuma HQ cadastrada") exibida automaticamente quando a lista está vazia.
- **Identidade Visual:** Paleta de cores inspirada na Tropa dos Lanternas Verdes (`#2ecc71`).

---
# Funcionalidades Futuras
O projeto foi desenhado para ser escalável, com as seguintes melhorias planejadas:

- **Navegação Hierárquica:** Transição da lista linear para uma estrutura organizada por fases cronológicas (Ex: Fase 1: Renascimento, Fase 2: Guerra da Tropa Sinestro).
- **Detalhamento de Conteúdo:** Implementação de telas de detalhes para cada HQ, incluindo sinopses completas, capas e lista de edições originais.
- **Persistência de Dados:** Integração com um Banco de Dados para que os dados adicionados pelo usuário não sejam perdidos ao fechar o app.
- **Reader Integrado:** Possibilidade de visualização de arquivos digitais ou links externos para leitura das obras.

---
## Instalação e Execução

### Pré-requisitos

*   Python 3.12+
*   MySQL 8.0+
*   Git

### Passo a Passo

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/Samuel-fernandesf/ArquivoOa.git
    cd ArquivoOa
    ```
2.  **Instale as dependências**
    ```bash
    npm install
    ```
3.  **Inicie o servidor do Expo:**
       ```bash
       npx expo start
       ```

       Para visualizar:
        Use o app Expo Go no seu celular e escaneie o QR Code gerado. <br>
        Ou pressione a para abrir no emulador Android ou i para iOS.

---

Este projeto foi desenvolvido como requisito para a disciplina de **Aplicativos Móveis**.

* **Desenvolvedor:** [Samuel Fernandes Filho](https://github.com/Samuel-fernandesf)
* **Instituição:** Instituto Federal de São Paulo (**IFSP**) - Campus Araraquara
