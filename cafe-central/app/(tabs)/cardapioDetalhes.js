import { View, Text,TouchableOpacity, ScrollView, StyleSheet, Image, FlatList, TextInput } from 'react-native';
import { Link,  useLocalSearchParams } from 'expo-router';
import { useState } from 'react';

export default function cardapioDetalhes() {
    const {nome, descricao, preco} = useLocalSearchParams();

  return (
    <ScrollView>
      <View style={styles.topo}>

      <Link href='/'>
        <Text style={styles.logo1}>Café</Text>
        <Text style={styles.logo2}>Central</Text>
      </Link>


        <View style={styles.menu}>
          <Link href='/'>
            <Text style={[styles.menuItem,styles.ativo]}> Inicio </Text>
          </Link>
        
          <Link href='/sobre'>
            <Text style={styles.menuItem}> Sobre </Text>
          </Link>

          <Link href='/contato'>
            <Text style={styles.menuItem}> Contato </Text>
          </Link>

        </View>
      </View>


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


      <View style={styles.rodape}>
        <Text style={styles.textoRodape}>®2026 Café Central. Todos os Direitos Reservados</Text>
        <Link href='/contato'>
          <Text style={styles.linkRodape}>Entre em contato</Text>
        </Link>
      </View>

     

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

    cardNome:{},

    cardDescricao:{},

    cardPreco:{},

    btnVoltar:{},

    textoBtnVoltar:{},

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