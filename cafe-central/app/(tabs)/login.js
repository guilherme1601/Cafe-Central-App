import { View, Text, ScrollView, StyleSheet, TouchableOpacity,TextInput } from 'react-native';
import { Link, router } from 'expo-router';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
const API_URL = "http://localhost:3000"


export default function login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagemSistema, setMensagemSistema] = useState('');
  const [tipoMensagem, setTipoMensagem] = useState(''); // 'sucesso' ou 'erro'
  const API_URL = "http://localhost:3000"

  async function validarLogin() {
    if (email === ''){
      setMensagemSistema('Digite seu email.');
      setTipoMensagem('erro');
      return
    }

    if (!email.includes('@') || !email.includes('.com')){
      setMensagemSistema('Digite um email válido.');
      setTipoMensagem('erro');
      return
    }
  
    if (senha === ''){
      setMensagemSistema('Digite sua senha.');
      setTipoMensagem('erro');
      return
    }

    if (senha.length < 6){
      setMensagemSistema('A senha deve ter pelo menos 6 caracteres.');
      setTipoMensagem('erro');
      return
    }

    //Tenta executar o bloco, se houver erro de rede, o código vai para o catch
    try{
      // Faz uma requisição HTTP para a rota da API usando o método POST
      const resposta = await fetch(`${API_URL}/login`,{
        method: 'POST', // Define que a requisição vai ENVIAR DADOS
        headers: {'Content-Type': 'application/json'}, // Informa que o corpo da requisição está JSON
        credentials:'include', // Inclui cookies e sessão na requisição, útil para autenticação
        body: JSON.stringify({
          email: email,
          senha: senha
        }) // Converte os dados de JavaScript para texto JSON antes de enviar
      });
      // Converte a resposta recebida da API de JSON para objeto JavaScript
      const dados = await resposta.json() 

      // Verifica se a resposta HTTP foi de sucesso
      if(resposta.ok){
        // Mostra a mensagem de sucesso vinda da API, 
          //ou um texto padrão se ela não enviar nada
        setMensagemSistema(dados.mensagem || "Login realizado com sucesso")
        // Define o "estilo" da mensagem como sucesso
        setTipoMensagem("sucesso")
        // Limpa os campos do formulário
        setEmail('')
        setSenha('')
        router.push('/cardapio')
      } else{
        // Mostra a mensagem de erro vinda da API,
          // ou um texto padrão se ela não enviar nada
        setMensagemSistema(dados.erro || "Erro ao fazer login")
        // Define o "estilo" da mensagem como erro
        setTipoMensagem("erro") 
      }
    }catch(erro){
      //  Executado quando acontece falha na conexão,
        // como internet fora do ar ou servidor indisponivel
      setMensagemSistema("Erro ao conectar com o servidor")
      // Define o "estilo" da mensagem como erro
      setTipoMensagem("erro")
    }
  }

  return (
    <ScrollView>
      <Header ativo="login"></Header>

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
                                    value={email}
                                    onChangeText={setEmail}
                                    style={styles.input} ></TextInput>

                        { /* CAMPO DE SENHA */}
                        <Text style={styles.label}>Senha</Text>
                        <TextInput placeholder='Digite sua senha'
                                    secureTextEntry = {true}
                                    value={senha}
                                    onChangeText={setSenha}
                                    style={styles.input} ></TextInput>
                        
                        <TouchableOpacity style={styles.btnPrimario} onPress={validarLogin}>
                            <Text style={styles.textoBotao}>Login</Text>
                        </TouchableOpacity>

                        <Text style={tipoMensagem === "erro" ? 
                                   styles.mensagemErro : styles.mensagemSucesso}>{mensagemSistema}</Text>

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

    mensagemErro: {
        color: 'red',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 10,
        marginHeight: 20,
    },

    mensagemSucesso: {
        color: 'green',
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