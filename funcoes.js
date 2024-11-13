let display = document.getElementById('display');

function pressKey(key) {
    if (key === 'sin') {
        // Função seno
        display.value += 'Math.sin(';
    } else if (key === 'cos') {
        // Função cosseno
        display.value += 'Math.cos(';
    } else if (key === 'tan') {
        // Função tangente
        display.value += 'Math.tan(';
    } else if (key === 'sqrt') {
        // Função raiz quadrada
        display.value += 'Math.sqrt(';
    } else if (key === '^') {
        // Exponenciação, inserindo "**" para usar com eval()
        display.value += '**';
    } else if (key === 'π') {
        // Inserir o valor de Pi diretamente
        display.value += Math.PI;
    } else if (key === 'e') {
        // Inserir o valor de Euler diretamente
        display.value += Math.E;
    } else if (key === '%') {
        // Operação de porcentagem
        try {
            display.value = eval(display.value) / 100;
        } catch (error) {
            display.value = 'Erro';
        }
    } else {
        // Adiciona outros números ou operadores ao display
        display.value += key;
    }
}

function clearDisplay() {
    display.value = '';
}

function calculaResultado() {
    try {
        // Calcula o resultado usando eval
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Erro';
    }
}

function chamaCientifica() {
    const sciFunctions = document.querySelector('.funcoes-cientificas');
    sciFunctions.style.display = sciFunctions.style.display === 'none' ? 'block' : 'none';
}