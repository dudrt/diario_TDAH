
import { StyleSheet, ActivityIndicator, View, Image, Text, TextInput } from "react-native";
import { Link } from 'expo-router';
import { useCallback } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from 'expo-splash-screen';
export default function Page() {
  
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('../assets/fonts/static/Inter-Black.ttf'),
  });
  const [fonts] = useFonts({
    'Inter-Medium': require('../assets/fonts/static/Inter-Medium.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded && fonts) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded,fonts]);

  if (!fontsLoaded && !fonts) {
    return null;
  }



  return (
    <View style={styles.body}>
    <StatusBar backgroundColor="#9E8EFF"/>

      <View style={styles.view_top}>
        <Text style={styles.view_top_wel_text}>Olá, bem-vindo!</Text>
        <View style={{ flexDirection: "row", marginStart: 30 }}>
          <View style={styles.profile_img_view}>
            <Image resizeMode="contain" style={styles.profile_image} source={require("../assets/icones/user.png")}  ></Image>
          </View>
          <Text style={styles.view_top_username_text}>Maria Silva</Text>
        </View>
      </View>
      <View style={styles.view_middle}>
        <Text style={{ fontFamily:"Inter-Black", color: "#000000", fontSize: 30, marginTop: 20, marginStart: 10 }}>Minhas Tarefas</Text>
        <View style={styles.views_todo}>
          <View style={styles.view_afazer}>

            <View style={styles.circle_todo}>

            </View>

            <Text style={styles.first_text_todo}>
              Para Fazer
            </Text>
            <Text style={styles.second_text_todo}>
              Veja as suas tarefas que não foram concluídas
            </Text>
          </View>
          <View style={styles.view_concluidas}>
            <LinearGradient
              // Background Linear Gradient
              colors={['#9E8EFF', '#8EC9FF']}
              style={styles.gradiente}>
              
              <View style={styles.circle_concluido}></View>
              <Text style={styles.first_text_todo}>
                Concluídas
              </Text>
              <Text style={styles.second_text_todo}>
                Veja as suas tarefas que foram concluídas
              </Text>
            </LinearGradient>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    
  },
  view_top: {
    backgroundColor: "#9E8EFF",
    borderBottomEndRadius: 60,
    borderBottomStartRadius: 60,
    paddingTop: 40,
    paddingBottom: 30
  },
  profile_img_view: {
    backgroundColor: "#FFF",
    borderRadius: 65,
    padding: 12
  },
  profile_image: {
    width: 100,
    height: 100,
  },
  view_top_wel_text: {
    fontFamily:"Inter-Medium",
    color: "#FFFFFF",
    fontSize: 24,
    marginStart: 30,
    marginBottom: 20
  },
  view_top_username_text: {
    fontFamily:"Inter-Medium",
    color: "#FFFFFF",
    fontSize: 30,
    marginStart: 10
  },
  view_middle: {

  },
  views_todo: {
    alignContent: "center",
    flexDirection: "row",

  },
  view_afazer: {
    alignItems: "center",
    width: "47%",
    height: "100%",
    backgroundColor: "#EBE7FF",
    borderRadius: 30,
    marginLeft: "2%"
  },
  view_concluidas: {
    alignItems: "center",
    width: "47%",
    height: "100%",
    backgroundColor: "#9E8EFF",
    borderRadius: 30,
    marginLeft: "2%"
  },
  gradiente: {
    alignItems: "center",
    borderRadius: 30,
    width: "100%",
    paddingBottom: 15


  },
  first_text_todo: {
    fontFamily:"Inter-Black",
    paddingTop:10,
    color: "#454752",
    fontSize: 28
  },
  second_text_todo: {
    fontFamily:"Inter-Medium",
    color: "#454752",
    fontSize: 14,
    paddingLeft:10,
    paddingRight:10
  },
  circle_todo: {
    marginTop: 10,
    height: 100,
    width: 100,
    backgroundColor: "transparent",
    borderCurve: "circular",
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#454752",
    borderStyle: "solid",
    borderWidth: 6
  },
  circle_concluido: {
    marginTop: 10,
    height: 100,
    width: 100,
    backgroundColor: "transparent",
    borderCurve: "circular",
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#FFFFFF",
    borderStyle: "solid",
    borderWidth: 6
  },

})
