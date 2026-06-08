import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput, Image, FlatList } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';
import cardapioJson from '../../assets/data/cardapio.json'

export default function cardapio() {
  
  const imagemCardapio = {
    'cafeexpresso.jpg' : require('../../assets/images/cafeexpresso.jpg'),
    'paofrances.jpg' : require('../../assets/images/cafeexpresso.jpg'), 
    'paoqueijo.jpg' : require('../../assets/images/cafeexpresso.jpg'),
    'suconatural.jpg' : require('../../assets/images/cafeexpresso.jpg')
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