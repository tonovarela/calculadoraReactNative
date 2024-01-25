import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

interface Props {
    texto: string;
    color?: string;
    ancho?:boolean
}

export const Boton = ({ texto, color="#2D2D2D",ancho=false }: Props) => {
    return (
        <TouchableOpacity onPress={() => console.log(texto)}>
        <View style={{ ...styles.boton, backgroundColor: color,width:(ancho)?180:80}}>
            <Text style={{...styles.botonTexto,color:(color==="#9B9B9B"?'black':'white')}}>{texto}</Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    boton: {
        height: 80,
        width: 80,
        marginHorizontal: 10,
        borderRadius: 100,
        backgroundColor: '#333333',
        justifyContent: 'center',
    },
    botonTexto: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'
    },

});
