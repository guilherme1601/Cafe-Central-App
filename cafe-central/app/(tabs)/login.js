import { View, Text, ScrollView, StyleSheet, TouchableOpacity,TextInput } from 'react-native';
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
                    <Text style={styles.tituloAuth}>Login</Text>
                    <Text style={styles.textoAuth}>
                        Entre com seu e-mail e senha para
                        acessar os cursos.
                    </Text>
                    <View style={styles.blocoAuth}>
                        { /* CAMPO DE E-MAIL */}
                        <Text style={styles.label}>Email</Text>
                        <TextInput placeholder='Digite seu e-mail'
                                    keyboardType='email-address'
                                    style={styles.input} ></TextInput>

                        { /* CAMPO DE SENHA */}
                        <Text style={styles.label}>Senha</Text>
                        <TextInput placeholder='Digite sua senha'
                                    secureTextEntry = {true}
                                    style={styles.input} ></TextInput>
                        
                        <TouchableOpacity style={styles.btnPrimario}>
                            <Text style={styles.textoBotao}>Login</Text>
                        </TouchableOpacity>

                        <Text style={styles.mensagemAuth}></Text>

                        <Text style={styles.linkAuth}>
                            Ainda não possui uma conta?
                        </Text>
                      
                        <Link style={styles.linkAuthDestaque} href='/cadastro'>
                            <Text>
                                Fazer Cadastro
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


    container: {
        padding: 20,
      },

    paginaAuth: {
        paddingVertical: 40,
        paddingHorizontal: 20,
      },

    blocoAuth: {
        backgroundColor: '#fffff',
        gap: 10,
        padding: 30,
        borderRadius: 8,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: {
        width: 0,
        height: 2,
        },

        },

    mensagemAuth: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 10,
        marginHeight: 20,
        },

    linkAuth: {
        textAlign:'center',
        marginTop: 20,
        color: '#222',
        fontWeight: 'bold'
        },

    linkAuthDestaque: {
        color: "#222",
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,
     },

    tituloAuth: {
        color: '#976739',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        },

    textoAuth: {
        textAlign: 'center',
        marginBottom: 20,
        color: '#555',
        fontSize: 16
        },

    label: {
        fontWeight: 'bold',
        color: '#976739'
        },

    input: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
        fontSize: 16,
        backgroundColor: '#ffffff'
        },

    btnPrimario: {
        backgroundColor: '#976739',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginTop: 10
        },

    textoBotao: {
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign: 'center'
        },

    rodape:{
      backgroundColor: '#976739',
      textAlign: 'center',
      marginbottom: 0,
      width: '100%',
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      
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