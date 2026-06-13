import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Link } from 'expo-router';

export default function sobre() {
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
      <View style={styles.sobre}>

          <Text style={styles.titulo}>Bem-Vindo ao Café Central</Text>

          <View style={styles.cards}>

        <View style={styles.card}>
        <Text style= {styles.subtitulo}>Sobre o Café Central</Text>
        <Text style={styles.texto}>O Café Central está localizado em uma região de grande circulação de pessoas, oferecendo praticidade e qualidade no dia a dia.</Text>
        </View>

        <View style={styles.card}>
        <Text style={styles.subtitulo}>Nosso Ambiente</Text>
        <Text style={styles.texto}>Nosso espaço é acolhedor e pensado para todos. Um lugar ideal para estudar, conversar ou simplesmente relaxar. .</Text>
        </View>
  
        <View style={styles.card}>
        <Text style={styles.subtitulo}>Sobre nosso Serviço</Text>
        <Text style={styles.texto}>Aqui, cada detalhe é pensado para tornar sua rotina mais leve com café rápido, funcionarios educados, ambiente confortavel e bem limpo!</Text>
        </View>


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

    titulo:{
      color: '#976739',
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
    },

    subtitulo:{
      color: '#976739',
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
    },

    cards:{
      marginTop: 20,
      gap: 15,
    },

    card:{
      backgroundColor: '#f5f5f5',
      padding: 15,
      borderRadius: 8,
      marginBottom: 10,
      elevation: 3,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 3 },
    },

    

    texto:{
      color: '#000000',
      fontSize: 16,
      marginBottom: 20,
      textAlign: 'center',
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