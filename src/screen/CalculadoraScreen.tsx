import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { Boton } from '../components/Boton';
import { useCalculator } from '../hooks/useCalculator';
export const CalculadoraScreen = () => {
    const {
        numeroAnterior,
        numero,
        fnOperacion,
        fnlimpiar,        
        fnborrarUltimaPosicion,
        fnpositivoNegativo,
        fncalcular,
        fnarmarNumero         
         } = useCalculator();
        
    return (

        <View style={styles.container}>            
            {
                (numeroAnterior !=='0') && (<Text style={styles.resultadoPequenio}>{numeroAnterior}</Text>)
            }
            <Text style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            >{numero}</Text>
            <View>
                <View style={styles.fila}>
                    <Boton texto='C' accion={fnlimpiar}  ></Boton>
                    <Boton texto='+/-' accion={fnpositivoNegativo}  ></Boton>
                    <Boton texto='del' accion={fnborrarUltimaPosicion}  ></Boton>
                    <Boton texto='/' accion={fnOperacion} color="#FF9427"></Boton>
                </View>
                <View style={styles.fila}>
                    <Boton texto='7' accion={fnarmarNumero} ></Boton>
                    <Boton texto='8' accion={fnarmarNumero}  ></Boton>
                    <Boton texto='9' accion={fnarmarNumero}  ></Boton>
                    <Boton texto='x' accion={fnOperacion} color="#FF9427"></Boton>
                </View>
                <View style={styles.fila}>
                    <Boton texto='4' accion={fnarmarNumero}   ></Boton>
                    <Boton texto='5' accion={fnarmarNumero}   ></Boton>
                    <Boton texto='6' accion={fnarmarNumero}  ></Boton>
                    <Boton texto='-' accion={fnOperacion} color="#FF9427"></Boton>
                </View>
                <View style={styles.fila}>
                    <Boton texto='1' accion={fnarmarNumero}   ></Boton>
                    <Boton texto='2' accion={fnarmarNumero}   ></Boton>
                    <Boton texto='3' accion={fnarmarNumero}  ></Boton>
                    <Boton texto='+' accion={fnOperacion} color="#FF9427"></Boton>
                </View>
                <View style={styles.fila}>
                    <Boton texto='0' accion={fnarmarNumero} ancho ></Boton>
                    <Boton texto='.' accion={fnarmarNumero}  ></Boton>
                    <Boton texto='=' accion={fncalcular} color="#FF9427"></Boton>
                </View>


            </View>

        </View>
    )
}
