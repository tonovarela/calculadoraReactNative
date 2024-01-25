import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { Boton } from '../components/Boton';

export const CalculadoraScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.resultado}>Calculadora</Text>
            <Text style={styles.resultadoPequenio}>Calculadora</Text>
            <View>
                <View style={styles.fila}>
                    <Boton texto='C' ></Boton>
                    <Boton texto='+/-' ></Boton>
                    <Boton texto='del'></Boton>
                    <Boton texto='/' color="#FF9427"></Boton>                    
                </View>
                <View style={styles.fila}>
                    <Boton texto='7' ></Boton>
                    <Boton texto='8' ></Boton>
                    <Boton texto='9'></Boton>
                    <Boton texto='X' color="#FF9427"></Boton>                    
                </View>
                <View style={styles.fila}>
                    <Boton texto='4' ></Boton>
                    <Boton texto='5' ></Boton>
                    <Boton texto='6'></Boton>
                    <Boton texto='-' color="#FF9427"></Boton>                    
                </View>
                <View style={styles.fila}>
                    <Boton texto='1' ></Boton>
                    <Boton texto='2' ></Boton>
                    <Boton texto='3'></Boton>
                    <Boton texto='+' color="#FF9427"></Boton>                    
                </View>
                <View style={styles.fila}>
                    <Boton texto='0' ancho ></Boton>
                    <Boton texto='.' ></Boton>
                    
                    <Boton texto='=' color="#FF9427"></Boton>                    
                </View>


            </View>

        </View>
    )
}
