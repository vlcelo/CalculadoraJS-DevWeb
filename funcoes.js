// Formata o número para adicionar separadores de milhares
function formatNumber(value) {
    return new Intl.NumberFormat('pt-BR').format(value);
}

// Insere o valor no display, mantendo a funcionalidade de exponenciação e sem formatar o número enquanto digita
function pressKey(key) {
    const display = document.getElementById("display");

    // Tratamento específico para o operador de potência
    if (key === "^") {
        display.value += "**";
    } else {
        display.value += key;
    }
}

// Função para calcular o resultado da expressão no display e formatá-lo
function calculaResultado() {
    const display = document.getElementById("display").value;
    try {
        // Avalia a expressão
        const result = eval(display);
        // Formata o resultado
        document.getElementById("display").value = formatNumber(result);
    } catch (error) {
        document.getElementById("display").value = "zaralhou pa";
    }
}

// Limpa o display da calculadora
function clearDisplay() {
    document.getElementById("display").value = '';
}