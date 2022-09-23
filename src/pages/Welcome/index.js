import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Animatable.Image animation="fadeInDown" delay={600} style={styles.logo} source={require('../../assets/uniceplac-logo-green.png')}/>
      </View>

        <Animatable.Text onPress={() => navigation.navigate('Inicio')} animation="fadeInUp" delay={900} style={{color: '#fff', fontWeight:'bold' }}>Toque aqui para iniciar app</Animatable.Text>
      <View style={styles.message}>
        <Animatable.Text animation="fadeInUp" delay={1000} style={styles.texto}>Feito com &#x2764; por Startup de T.I.</Animatable.Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3b7355',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#ffffff',
    fontWeight: "bold"
  },
  message: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: '10%',
  },
  logo: {
    maxWidth: "50%",
    resizeMode: "contain"
  }
});
