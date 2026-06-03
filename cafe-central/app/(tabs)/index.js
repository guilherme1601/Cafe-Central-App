import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function index() {
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

      { /*=========== HERO =============*/}
      { /* Seção principal (banner incial) */}

      <View style={styles.hero}>
        <View style={styles.heroContent}>
          { /* Título Principal */}
          <Text style={styles.heroTitulo}>Um dos melhores cafés da nossa região</Text>
          { /* Aviso */}
          <Text style={styles.avisologin}>
            Para a visualização do cardapio, faça Login
          </Text>

          { /* Botão principal */ }
          <Link href='/login'>
            <TouchableOpacity style={styles.bntPrimario}>
              <Text style={styles.textoBotaoPri}> Fazer Login</Text>
            </TouchableOpacity>
          </Link>

          { /* Botão secundario */ }

          <Link href='/contato'>
            <TouchableOpacity style={styles.btnSecundario}>
              <Text style={styles.textoBotaoSec}> Fale Conosco </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
          
      { /*=========== DESTAQUES =============*/}
      { /* Descrição */}
      <View style={styles.destaques}>
        <View style={styles.container}>
        { /* Título da Seção */}

        <Text style={styles.tituloDestaque}>Por que escolher o Café Central?</Text>

        <View style={styles.cards}>

        <View style={styles.card}>
          <Text style={styles.cardTitulo}>Qualidade</Text>
          <Text style={styles.cardDescrição}> Nossos grãos são selecionados cuidadosamente para garantir um sabor excepcional.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitulo}>Ambiente Aconchegante</Text>
          <Text style={styles.cardDescrição}> Nosso café é o lugar perfeito para relaxar, trabalhar ou socializar com amigos.</Text>
        </View>

        <View style={styles.card}> 
            <Text style={styles.cardTitulo}>Atendimento Amigável</Text>
          <Text style={styles.cardDescrição}> Nossa equipe está sempre pronta para oferecer um serviço acolhedor e personalizado.</Text>
        </View>

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

    hero:{
      backgroundColor: '#f5f5f5',
      padding: 30,
      alignItems: 'center',
      justifyContent: 'center',
    },

    heroContent:{
      alignItems: 'center',
      gap: 15,
      width: '100%',
    },

    heroTitulo:{
      fontSize: 28,
      color: '#dab989',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10,
    },

    ativo:{
      color: '#e6b061',
    },

    btnLogin:{
      backgroundColor: '#976739',
      color: '#ffffff',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 7,
      marginTop: 10,
    },

    avisologin:{
      fontSize: 16,
      color: '#222',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 15,
    },

    bntPrimario:{
      backgroundColor: '#976739',
      color: '#ffffff',
      paddingHorizontal: 12,
      paddingVertical: 15,
      marginBottom: 7,
      borderRadius: 8,
      minWidth: 150,
    },

    btnSecundario:{
      backgroundColor: '#ffffff',
      color: '#976739',
      paddingHorizontal: 12,
      paddingVertical: 15,
      borderRadius: 8,
      borderColor: '#976739',
      borderWidth: 2,
      marginTop: 10,
      minWidth: 150,
    },

    textoBotaoPri:{
      color: '#ffffff',
      fontWeight: 'bold',
      textAlign: 'center',
    },

    textoBotaoSec:{
      color: '#976739',
      fontWeight: 'bold',
      textAlign: 'center',
    },

    destaques:{
      padding: 20,
    },

    container:{
      padding: 20,
    },

    tituloDestaque:{
      color: '#976739',
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
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

    cardTitulo:{
      color: '#976739',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10,
    },

    cardDescrição:{
      color: '#333',
      fontSize: 14,
      textAlign: 'center',
      lineHeight: 20,
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
)