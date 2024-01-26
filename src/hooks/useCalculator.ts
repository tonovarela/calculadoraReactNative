import { useRef, useState } from "react";
enum Operadores {
    sumar = '+',
    restar = '-',
    multiplicar = 'x',
    dividir = '/'
}
export const useCalculator = () => {
    const [numero, setNumero] = useState('100');
    const [numeroAnterior, setNumeroAnterior] = useState('0');
    const ultimaOperacion = useRef<Operadores>();
    const fnlimpiar = () => {
        setNumero('0');
    }
    const fnpositivoNegativo = () => {

        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''));
        } else {
            setNumero('-' + numero);
        }

    }
    const fncambiarNumeroPorAnterior = () => {
        setNumero('0');
        if (numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0, -1));
            return;
        }
        setNumeroAnterior(numero);

    }
    const fnborrarUltimaPosicion = () => {
        let negativo = "";
        let numeroTemp = numero;
        if (numero.includes("-")) {
            negativo = "-";
            numeroTemp = numero.substring(1);
        }
        if (numero.length == 1) {
            setNumero('0');
            return;
        }
        setNumero(negativo + numeroTemp.slice(0, -1))

    }
    const fnarmarNumero = (numeroTexto: string) => {
        //No aceptar doble punto
        if (numero.includes('.') && numeroTexto === ".") return;
        if (numero.startsWith('0') || numero.startsWith('-0')) {
            if (numeroTexto === ".") {
                setNumero(numero + numeroTexto);
            } else if (numeroTexto === "0" && numero.includes(".")) {
                setNumero(numero + numeroTexto)
            } else if (numeroTexto !== "0" && !numero.includes(".")) {
                setNumero(numeroTexto);
            } else if (numeroTexto === "0" && !numero.includes(".")) {
                setNumero(numero);
            }
        } else {
            setNumero(numero + numeroTexto);
        }



    }
    const fnOperacion = (operacion: string) => {
        fncambiarNumeroPorAnterior();
        console.log(operacion);
        switch (operacion) {
            case '+':
                ultimaOperacion.current = Operadores.sumar;
                break;
            case '-':
                ultimaOperacion.current = Operadores.restar;
                break;
            case 'x':
                ultimaOperacion.current = Operadores.multiplicar;
                break;
            case '/':
                ultimaOperacion.current = Operadores.dividir;
                break;
            default:
                ultimaOperacion.current = undefined;
                break;

        }
    }

    const fncalcular = () => {
        if (ultimaOperacion.current === undefined) {
            return;
        }
        const numero1 = Number(numeroAnterior);
        const numero2 = Number(numero);
        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumero(`${numero1 + numero2}`);
                break;
            case Operadores.restar:
                setNumero(`${numero1 - numero2}`);
                break;
            case Operadores.multiplicar:
                setNumero(`${numero1 * numero2}`);
                break;
            case Operadores.dividir:
                if (numero2 === 0) {
                    setNumero('No existe división entre cero');
                } else {
                    setNumero(`${numero1 / numero2}`);
                }

                break;
            default:
                break;
        }
        ultimaOperacion.current = undefined;
        setNumeroAnterior('0');
    }

    return {
        numero,
        numeroAnterior,
        fnlimpiar,
        fnpositivoNegativo,
        fncambiarNumeroPorAnterior,
        fnborrarUltimaPosicion,
        fnarmarNumero,
        fnOperacion,
        fncalcular


    }
}