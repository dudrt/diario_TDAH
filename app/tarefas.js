import { View, Text, StyleSheet, Touchable } from "react-native"
import RotasInferior from "./rotas_inferior"
import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native-gesture-handler";


export default function Tarefas() {
    const [ViewDays, setViewDays] = useState()
    const [Data, setData] = useState()
    useEffect(() => {
        const PegarDate = () => {
            var dataAtual = new Date();
            var anoAtual = dataAtual.getFullYear();
            var mesAtual = (dataAtual.getMonth() + 1).toString().padStart(2, '0');
            var diaAtual = dataAtual.getDate().toString().padStart(2, '0'); 
            
            setData(anoAtual + "-" + mesAtual + "-" + diaAtual)
            console.log(Data)
        }
        PegarDate()
        GerarDiasDaSemana()

    }, []);
    

    const GerarDiasDaSemana = async () => {
        let selecionado = new Date(Data).getDay()
        let arrayDias = ["D","S","T","Q","Q","S","S"]

        let arrayView = []
        console.log("rodou")

        for (let i=0;i<arrayDias.length;i++){

            if(i===selecionado){
                arrayView.push(
                    <View key={i} style={styles.view_dia_selecionado}>
                       <TouchableOpacity onPress={() =>GerarDiasDaSemana(i)}>
                       <Text style={styles.text_dia_selecionado}>
                            {arrayDias[i]}
                        </Text>
                       </TouchableOpacity>
                    </View>
                )
            }else{
                arrayView.push(
                    <View key={i} style={styles.view_dia}>
                        <TouchableOpacity onPress={() =>GerarDiasDaSemana(i)}>
                        <Text style={styles.text_dia}>
                            {arrayDias[i]}
                        </Text>
                        </TouchableOpacity>
                    </View>
                )
            }
            
        }
        setViewDays(arrayView)
    }


    return (
        <View style={styles.body}>
            <StatusBar backgroundColor="#9E8EFF" />
            <View style={styles.view_top}>
                <View style={styles.top_info}>
                <Text style={styles.data_atual}>
                    {new Date(Data).toLocaleString('pt-BR', { month: 'long', day: 'numeric' }).toUpperCase()}

                </Text>
                <TouchableOpacity style={styles.add_button}>
                    <Text style={styles.add_text}>+</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.dias_view_main}>
                {ViewDays}
                </View>
            </View>
            <View style={styles.view_down}>

            </View>
            <RotasInferior />
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#9E8EFF",

    },
    view_top: {
        height: "30%",
    },
    view_down: {
        backgroundColor: "#FFF",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        height: "70%"
    },
    data_atual:{
        fontFamily: "Inter-Medium",
        color:"#FFF",
        fontSize:30,
        
    },
    top_info:{
        flexDirection:"row",
        marginLeft:"5%",
        marginTop:"10%"
    },
    add_button:{
        marginLeft:"45%",
        backgroundColor:"#FFF",
        width:40,
        height:40,
        borderRadius:60,
        justifyContent:"center",
        alignItems:"center"
    },
    add_text:{
        fontSize:30,
        color:"#9E8EFF"
    },
    dias_view_main:{
        flexDirection:"row",
        justifyContent:"center",
        marginTop:"6%",
        
        // backgroundColor:"#000"
    },
    view_dia_selecionado:{
        backgroundColor:"#FFF",
        marginRight:"2%",
        width:"10%",
        height:"80%",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:15
        
    },
    text_dia_selecionado:{
        color:"#9E8EFF",
        fontFamily:"Inter-Medium",
        fontSize:20,

    },
    view_dia:{
        marginRight:"2%",
        width:"10%",
        height:"80%",
        alignItems:"center",
        justifyContent:"center",

    },
    text_dia:{
        fontFamily:"Inter-Medium",
        color:"#FFF",
        fontSize:20,
    }
})