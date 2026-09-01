# Calculadora de Lucro com Alavancagem

Aplicação web estática para simular o resultado de operações compradas ou vendidas, com alavancagem e conversão automática de USD para BRL.

## Funcionalidades

- seleção entre compra e venda;
- alavancagem de 1x a 100x;
- cálculo do resultado estimado em USD;
- conversão para BRL usando cotação obtida por API pública.

## Executar localmente

```bash
git clone https://github.com/EduardoQuero/CALCULADORA.git
cd CALCULADORA
python -m http.server 8000
```

Acesse `http://localhost:8000`.

## Como usar

1. Escolha a alavancagem.
2. Informe os dois preços da operação.
3. Informe o valor investido em USD.
4. Clique em **Comprar** ou **Vender**.
5. Confira o resultado estimado em USD e BRL.

## Estrutura

```text
index.html   interface
styles.css  estilos
script.js   cálculo e consulta do câmbio
```

> A simulação não considera taxas, financiamento, spread, slippage, liquidação ou regras específicas da corretora.