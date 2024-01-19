import { View, Image, StyleSheet } from "react-native";
import { Link } from 'expo-router';



export default function RotasInferior() {


    return (
        <View style={styles.main}>
            <Link href="/home" style={{ height:"80%",marginRight:"10%"}}><Image resizeMode="contain" source={require("../assets/icones/Home.png")}/></Link>

            <Link href="/tarefas" style={{ height:"80%",marginRight:"10%"}}><Image source={require("../assets/icones/Tarefas.png")} /></Link>
            <Link href="/rotas_inferior" style={{ height:"80%"}}><Image source={require("../assets/icones/Config.png")} /></Link>

        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        position:"absolute",
        bottom:"0%",
        flexDirection:"row",
        alignItems:"center",
        alignSelf:"center",
        justifyContent:"center",
        width:"100%",
        height:"10%",
        backgroundColor:"#FFF"
    },
    img:{
       
       
       
    }
})