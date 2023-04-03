import React from "react";
import { SafeAreaView, StyleSheet, View, Image, Text } from "react-native";

import fotoRetanguloPequeno from '../../assets/img/retangulo-pequeno.png';
import Icon from 'react-native-vector-icons/Feather';

const Results = () => {
  return (
    <SafeAreaView style={styles.page}>
        <View style={styles.container_fundo_triangulo_pequeno}>
          <Image source={fotoRetanguloPequeno} />
        </View>

    </SafeAreaView>
  )
}

export default Results

const styles = StyleSheet.create({
  page: {
    flex: 1,  
    alignItems: "center",
    justifyContent: "center"
  },

  
  

});
