let resultado = '';

const agregarAlResultado = valor => {
    if (valor === '0' && resultado === '0') {
        return;
    }

    const ultimoCaracter = resultado.charAt(resultado.length - 1);
 
    if ('+-*/'.includes(ultimoCaracter) && '+-*/'.includes(valor)) {
        return;
    }

    if ('+-*/'.includes(ultimoCaracter) && valor === '0') {
        return;
    }

    if (valor === '.' && ultimoCaracter === '.') {
        return;
    }

    const partes = resultado.split(/[\+\-\*\/]/);
    const ultimoNumero = partes[partes.length - 1];
    if (valor === '.' && ultimoNumero.includes('.')) {
        return;
    }

    resultado += valor;
    document.getElementById('display').value = resultado;
};

const limpiarPantalla = tipo => {
    if (tipo === 'C') {
        resultado = resultado.slice(0, -1);
    } else if (tipo === 'CE') {
        resultado = '';
    }
    document.getElementById('display').value = resultado;
};

const calcularResultado = () => {
    try {
        resultado = eval(resultado).toString();
        document.getElementById('display').value = resultado;
    } catch (error) {
        document.getElementById('display').value = 'Error';
        resultado = '';
    }
};
