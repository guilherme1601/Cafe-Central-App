import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
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


      { /* Conteudo da pagina*/}

        <View style={styles.container}>
            <View style={styles.paginaAuth}>
                <Text style={styles.tituloAuth}>
                  Cadastro
                </Text>
                <Text style={styles.textoAuth}>
                  Crie sua conta para acessar os cursos
                </Text>

                <View style={styles.blocoAuth}>
                  <Text style={styles.label}>Nome</Text>
                  <TextInput placeholder='Digite seu nome' 
                            style={styles.input}>
                  </TextInput>
                
                  <Text style={styles.label}>Email</Text>
                  <TextInput placeholder='Digite seu email' 
                             keyboardType='email-address'
                             style={styles.input}>
                  </TextInput>

                  <Text style={styles.label}>Senha</Text>
                  <TextInput placeholder='Digite sua senha' 
                             secureTextEntry={true}
                             style={styles.input}>
                  </TextInput>

                  <Text style={styles.label}>Confirma senha</Text>
                  <TextInput placeholder='Digite sua senha novamente' 
                             secureTextEntry={true}
                             style={styles.input}>
                  </TextInput>

                  <TouchableOpacity style = {styles.btnPrimario}>
                    <Text style= {styles.textoBotao}>
                      Cadastrar
                    </Text>
                  </TouchableOpacity>

                  <Text style={styles.mensagemAuth}></Text>

                  <Text style={styles.linkAuth}>
                    Já possui uma conta?
                  </Text>
                  <Link style={styles.linkAuthDestaque} href='/login'>
                    <Text>
                      Fazer Login
                    </Text>
                  </Link>
                

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
    
    container:{
      padding: 20,
    },

    paginaAuth:{
        paddingVertical: 40,
        paddingHorizontal: 20,
    },

    tituloAuth:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#976739',
        textAlign: 'center',
        marginBottom: 10,
    },

    textoAuth:{
        textAlign: 'center',
        marginBottom: 20,
        color: '#333',
        fontSize: 16
    },

    blocoAuth:{
        backgroundColor: '#f2f2f2',
        gap: 15,
        padding: 20,
        borderRadius: 8,
        elevation: 2,

        shadowOffset: {width: 0, height: 2},
    },

    label:{
        fontWeight: 'bold',
        color: '#976739',
    },

    input:{
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        backgroundColor: '#fff',
    },

    btnPrimario:{
        backgroundColor: '#976739',
        paddingVertical: 15,
        paddingHorizontal: 12,
        borderRadius: 8,
        marginTop: 10,
    },

    textoBotao:{
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center', 
    },

    mensagemAuth:{
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 10,
        marginHeight: 20,
        
    },

    linkAuth:{
        color: '#000000',
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center'
    },
  
    linkAuthDestaque: {
        color: "#222",
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,
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