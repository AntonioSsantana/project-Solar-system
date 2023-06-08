# Projeto Solar System

O Solar System é um projeto React simples que gera o nome e a imagem dos planetas do sistema solar.

## Funcionalidades

- Geração automática de nomes e imagens dos planetas do sistema solar.

## Dependências

O projeto utiliza as seguintes dependências:

- `react`: Biblioteca principal para o desenvolvimento de interfaces de usuário em React.
- `react-dom`: Responsável por manipular a árvore de elementos do DOM para renderizar os componentes React.
- `react-scripts`: Conjunto de scripts e configurações predefinidos para criar, desenvolver e executar aplicativos React.
- `@testing-library/jest-dom`: Biblioteca de suporte para testes com Jest, oferecendo funcionalidades extras para asserções DOM.
- `@testing-library/react`: Biblioteca de utilidades para testes unitários de componentes React.
- `@testing-library/user-event`: Biblioteca que fornece funções de simulação de eventos do usuário para testes de integração.

```json
"dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "5.0.0",
    "web-vitals": "^1.1.2"
  }
```

## Scripts

O projeto possui os seguintes scripts:

- `start`: Inicia o aplicativo em ambiente de desenvolvimento.
- `build`: Realiza o build do aplicativo para produção.
- `test`: Executa os testes utilizando o Jest.
- `lint:styles`: Executa a verificação de linting nos arquivos CSS utilizando o Stylelint.
- `lint`: Executa a verificação de linting nos arquivos JavaScript e JSX utilizando o ESLint.

```json
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "lint:styles": "npx stylelint '**/*.css'",
    "lint": "eslint --no-inline-config --no-error-on-unmatched-pattern -c .eslintrc.json . --ext .js,.jsx"
  }
```

## Configuração do ESLint

O projeto utiliza a configuração "react-app" do ESLint, que é uma configuração padrão recomendada para projetos React.

## Browserslist

O projeto possui a seguinte configuração do Browserslist:

```json
"browserslist": {
  "production": [
    ">0.2%",
    "not dead",
    "not op_mini all"
  ],
  "development": [
    "last 1 chrome version",
    "last 1 firefox version",
    "last 1 safari version"
  ]
}
```

## Dependências de Desenvolvimento

Além das dependências mencionadas acima, o projeto possui as seguintes dependências de desenvolvimento:

- `@testing-library/dom`: Biblioteca de utilidades para testes DOM.
- `@testing-library/user-event`: Biblioteca que fornece funções de simulação de eventos do usuário para testes de integração.
- `eslint`: Ferramenta de linting para JavaScript.
- `eslint-config-trybe-frontend`: Configuração de linting específica da Trybe para projetos frontend.
- `eslint-plugin-sonarjs`: Plugin do ESLint para detectar problemas de código com base nas regras do SonarJS.
- `prop-types`: Biblioteca para checagem de tipos de propriedades em componentes React.
- `stylelint`: Ferramenta de linting para estilos CSS.
- `stylelint-config-standard`: Configuração padrão para o stylelint.
- `stylelint-order`: Plugin para stylelint que impõe uma ordem específica para as propriedades CSS.

```json
"devDependencies": {
    "@testing-library/dom": "^8.1.0",
    "@testing-library/user-event": "^12.8.3",
    "eslint": "7.32.0",
    "eslint-config-trybe-frontend": "1.2.3",
    "eslint-plugin-sonarjs": "0.10.0",
    "prop-types": "^15.7.2",
    "stylelint": "^13.8.0",
    "stylelint-config-standard": "^20.0.0",
    "stylelint-order": "4.1.0"
  }
```