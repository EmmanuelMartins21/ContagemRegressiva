import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, StatusBar} from 'react-native';
import { Constants } from 'expo';

export default function App() {
  const dataFinal = new Date('August 15, 2023').getTime();
  const dataAtual = new Date().getTime();
  const tempoRestante = dataFinal - dataAtual;

  const [segundos, setSegundos] = useState(Math.floor(tempoRestante / 1000));

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundos(prevSeconds => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const dias = Math.floor(segundos / (3600 * 24));
  const horas = Math.floor((segundos % (3600 * 24)) / 3600);
  const minutos = Math.floor((segundos % 3600) / 60);
  const segundosFaltantes = Math.floor(segundos % 60);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Contagem regressiva de 15 de Agosto de 2023</Text>
      
      <Text style={styles.texto}>{formatTime(dias)}:{formatTime(horas)}:{formatTime(minutos)}:{formatTime(segundosFaltantes)}</Text>
    <StatusBar/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0c4491',
  },
  texto:{
    color: '#fff',
    fontSize: 24,
    fontStyle: 'bold',
    margin:20
  }
});
