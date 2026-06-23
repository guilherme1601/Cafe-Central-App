import { View, Text,TouchableOpacity, ScrollView, StyleSheet, Image, FlatList, TextInput } from 'react-native';
import { Link,  useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function cardapioDetalhes() {
    const {nome, descricao, preco} = useLocalSearchParams();

  return (
    <ScrollView>
      <Header ativo="cardapioDetalhes"></Header>

      { /* Conteudo da pagina*/}
        <View style={styles.container}>
          <View style={styles.cardDetalhes}>
            <Text style={styles.cardTitulo}>MENU CAFÉ CENTRAL</Text>
                <View style={styles.tituloNome}>
                    <Text style={styles.cardNome}>{nome}</Text>
                </View>
                    <Text style={styles.cardDescricao}>{descricao}</Text>
                    <Text style={styles.cardPreco}>{preco}</Text>
                <Link href='/cardapio' asChild>
                    <TouchableOpacity style={styles.btnVoltar}>
                        <Text style={styles.textoBtnVoltar}>Voltar para o cardápio</Text>
                    </TouchableOpacity>
                </Link>
          </View>
        </View>

      { /*=========== rodape =============*/}


      <Footer></Footer>
    </ScrollView>
  );
}


const styles = StyleSheet.create(
  {
    topo:{
      backgroundColor: '#976739',
      padding: 20,
      alignItems: 'center',
      gap: 10
    },

    logo1:{
      color: '#ffffff',
      fontSize: 24,
      fontWeight:'bold'
    },

    logo2:{
      color: '#e6b061',
      fontSize: 24,
      fontWeight:'bold'
    },

    menu:{
      marginTop: 10,
      alignItems: 'center',
      gap: 20,
    },

    menuItem:{
      color: '#ffffff',
      fontSize: 16,
    },

    container:{
      backgroundColor: '#f5f5f5',
      padding: 20,
    },

    cardDetalhes:{
      backgroundColor: '#f5f5f5',
      borderRadius: 10,
      padding: 20,
    },
    
    cardTitulo:{
      fontSize: 25,
      fontWeight:'bold',
      color: '#976739',
      textAlign: 'Center'
    },

    tituloNome:{
      color:'#black',
      fontSize: 20,
      fontWeight:'bold',
      marginBottom: 8,
      marginTop: 10,
      alignItems: 'center'
    },

    cardNome:{
      color: '#976739',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },

    cardDescricao:{
      textAlign: 'center',
      color: 'black',
      fontSize: 16,
      margin: 10
    },

    cardPreco:{
      textAlign: 'center',
      color: 'black',
      fontSize: 16,
      margin: 10,
      fontWeight: 'bold'
    },

    btnVoltar:{ 
        backgroundColor: '#976739',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginTop: 10
        },

    textoBtnVoltar:{
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign: 'center'},

    rodape:{
      backgroundColor: '#976739',
      textAlign: 'center',
      marginbottom: 0,
      width: '100%',
      height: 80,
      alignItems: 'center',
    },
    textoRodape:{
      color: '#ffffff',
      textAlign: 'center',
      marginbottom: 7,
    },

    linkRodape:{
      color: '#e6b061',
      fontWeight: 'bold',
      textDecorationLine: 'none',
      textAlign: 'center',
    },

  }
);