import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput, Image, FlatList } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';
import cardapioJson from '../../assets/data/cardapio.json'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function cardapio() {
  
  const imagemCardapio = {
    'cafeexpresso.jpg' : require('../../assets/images/cafeexpresso.jpg'),
    'paofrances.jpg' : require('../../assets/images/paofrances.jpg'), 
    'paoqueijo.jpg' : require('../../assets/images/paoqueijo.jpg'),
    'suconatural.jpg' : require('../../assets/images/suconatural.jpg')
  };

  const cardapio = cardapioJson.map((cardapio) =>
  (
    {
      ...cardapio,
      img: imagemCardapio[cardapio.img],
    }
  )
);

  const [busca, setBusca] = useState('');

  const filtrarCardapio = cardapio.filter((cardapio) => {
    return cardapio.titulo.toLowerCase().includes(busca.toLowerCase());
  }

)

  return (
   <ScrollView contentContainerStyle={styles.corpo}>
     <Header ativo="cardapio"></Header>
      
      { /* Conteudo da pagina*/}
      <View style={styles.cardapios}>
        <Text style={styles.tituloPagina}> Cardápio </Text>
        <TextInput style={styles.BuscaItemCardapio} placeholder='Buscar item no cardapio' onChangeText={setBusca} value={busca}></TextInput>
        <FlatList
        data={filtrarCardapio}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cardapio}>
            <Image style={styles.cardapioImg} source={item.img}></Image>
            <Text style={styles.cardapioDescricao}>{item.descricao}</Text>
            <Text style={styles.cardapioPreco}>{item.preco}</Text>

            <Link style={styles.cardapioLink} href={{
              pathname: '/cardapioDetalhes',
              params: {
                id: item.id,
                titulo: item.titulo,
                descricao: item.descricao,
                preco: item.preco,
              },

            }} asChild>

              <TouchableOpacity style={styles.btnCardapio}>
                <Text style={styles.textoBtnCardapio}>Ver Detalhes</Text>
              </TouchableOpacity>

            </Link>
          </View>
          )}
        />
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
    
    cardapios:{
      alignItems: 'center',
      backgroundColor: 'white'
    },

    tituloPagina:{
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },

    buscaItemCardapio:{
      backgroundColor: 'white',
      textAlign: 'center',
      alignItems: 'center',
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 8,
      width: '80%'
    },
    
    cardapio:{
      backgroundColor: '#ffffff',
      padding: 20,
      borderRadius: 8,
      marginBottom: 15,
      elevation: 3,
    },

    cardapioImg:{
      width: '101%',
      height: 200,
      backgroundColor: '#dcdada',
      borderRadius: 8,
      marginBottom: 10,
      resizeMode: 'contain',
    },
    
    cardapioDescricao:{
      textAlign: 'center',
      color: 'black',
      fontSize: 16,
      margin: 10,
    },

    cardapioPreco:{
      textAlign: 'center',
      color: '#black',
      fontSize: 18,
      fontWeight: 'bold',
    },

    btnCardapio:{
      backgroundColor: '#976739',
      padding: 10,
      borderRadius: 8,
      marginTop: 10,
    },

    cardapioLink:{
      alingnItems: 'center',
    },

    textoBtnCardapio:{
      color: '#ffffff',
      textAlign: 'center',
      fontWeight: 'bold',
    },

    corpo: { 
      flexGrow: 1,
      justifyContent: 'space-between',
    },
    

  }
);