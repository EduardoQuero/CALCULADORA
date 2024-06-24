document.addEventListener('DOMContentLoaded', function() {
  const alavancagemSlider = document.getElementById('alavancagem');
  const alavancagemValor = document.getElementById('alavancagemValor');
  const comprarBtn = document.getElementById('comprarBtn');
  const venderBtn = document.getElementById('venderBtn');
  
  alavancagemSlider.addEventListener('input', function() {
    alavancagemValor.textContent = `${alavancagemSlider.value}x`;
  });

  comprarBtn.addEventListener('click', function() {
    highlightButton(comprarBtn);
    calcularLucro('compra');
  });

  venderBtn.addEventListener('click', function() {
    highlightButton(venderBtn);
    calcularLucro('venda');
  });

  function highlightButton(button) {
    comprarBtn.classList.remove('active');
    venderBtn.classList.remove('active');
    button.classList.add('active');
  }

  function calcularLucro(tipoOperacao) {
    const preco1 = parseFloat(document.getElementById('preco1').value);
    const preco2 = parseFloat(document.getElementById('preco2').value);
    const valorInvestido = parseFloat(document.getElementById('quantidadeInvestida').value);
    const alavancagem = parseFloat(alavancagemSlider.value);

    let precoEntrada, precoSaida;

    if (tipoOperacao === 'compra') {
      precoEntrada = preco1;
      precoSaida = preco2;
    } else if (tipoOperacao === 'venda') {
      precoEntrada = preco2;
      precoSaida = preco1;
    }

    try {
      fetch('https://api.exchangerate-api.com/v4/latest/USD')
        .then(response => response.json())
        .then(data => {
          if (data && data.rates && data.rates.BRL) {
            const taxaCambio = data.rates.BRL;

            document.getElementById('cotacaoAtual').textContent = taxaCambio.toFixed(2);

            const lucroUsd = ((precoSaida - precoEntrada) * valorInvestido) * alavancagem;

            const lucroBrl = lucroUsd * taxaCambio;

            document.getElementById('lucroUsd').textContent = lucroUsd.toFixed(2);
            document.getElementById('lucroBrl').textContent = lucroBrl.toFixed(2);
          } else {
            alert('Não foi possível obter a cotação do dólar atual. Tente novamente mais tarde.');
          }
        });
    } catch (error) {
      console.error('Erro ao buscar a cotação do dólar:', error);
      alert('Ocorreu um erro ao buscar a cotação do dólar. Verifique sua conexão ou tente novamente mais tarde.');
    }
  }
});
