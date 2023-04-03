import React from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView
} from "react-native";

import fotoRetanguloCima from '../../assets/img/retangulo-cima.png';
import logo from '../../assets/img/logo.png';
import fotoRetanguloBaixo from '../../assets/img/retangulo-baixo.png';

const Home = () => {
  return (
    <>
      <SafeAreaView style={styles.page}>
        <View style={styles.container_fundo_triangulo_cima}>
          <Image source={fotoRetanguloCima} />
        </View>

        <View style={styles.header}>
          <Text style={styles.boas_vindas}> Sejam Bem-Vindos!</Text>
          <Image source={logo} />
        </View>

        <View style={styles.conteudo}>
          <Text style={styles.descricao}>
            O pré-dimensionamento para uma estação de tratamento de esgoto,
            específica para o sistema australiano, nunca foi tão fácil!
          </Text>
        </View>

        <View style={styles.conteudo_botao}>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.descricao_botao}>Avançar</Text>
          </TouchableOpacity>
          </View>

        <View  style={styles.container_fundo_triangulo_baixo}>
          <Image source={fotoRetanguloBaixo} style={styles.fundo_triangulo_baixo} />
        </View>
      </SafeAreaView>
      </>
    
  )
}

export default Home

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },

  container_fundo_triangulo_cima: {
    position: "absolute",
    flex:1,
  },

  container_fundo_triangulo_baixo: {
    flex:1,
   
  },
  fundo_triangulo_baixo:{
    flex:1
  },

  header: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },

  boas_vindas: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 26,
    color: "#FFFFFF",
    marginBottom: 40,
  },

  conteudo: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 128,
    paddingHorizontal: 55,
  },

  descricao: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 18,
    justifyContent: "center",
    alignItems: "center",
  },

  conteudo_botao:{
    justifyContent: "center",
    alignItems: "center",
    marginTop: 150
  },

  botao: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2980B9",
    width: '40%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },

  descricao_botao: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
});
