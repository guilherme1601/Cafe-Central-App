import {
    View, // Para agrupar elementos (= div)
    Text, // Para exibir textos (= p, h1...)
    TouchableOpacity, // Para botões clicáveis (= button)
    ScrollView, // Para a área principal com scroll,
    StyleSheet,// Para aplicar estilo na página
    TextInput
   } from 'react-native'; // Importa os componentes View e Text
  import {Link, router} from 'expo-router';
  import { useState } from 'react';
  import Header from '../../components/Header'
  import Footer from '../../components/Footer'
  
  const API_URL = "http://localhost:3000"
  

  export default function Contato() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const [mensagemSistema, setMensagemSistema] = useState('');
    const [tipoMensagem, setTipoMensagem] = useState('');  
    const API_URL = "http://localhost:3000"

  async function validarFormulario() {
    if (nome === '') {
      setMensagemSistema('Digite seu nome.');
      setTipoMensagem('erro');
      return false;
    }
    if (/\d/.test(nome)) {
      setMensagemSistema('O nome não pode conter números.');
      setTipoMensagem('erro');
      return false;
    }

    if (email === '') {
      setMensagemSistema('Digite seu email.');
      setTipoMensagem('erro');
      return false;
    }

    if (email.includes('@') === false || email.includes('.com') === false) {
      setMensagemSistema('Digite um email válido.');
      setTipoMensagem('erro');
      return false;
    }

    if (mensagem === '') {
      setMensagemSistema('Digite sua mensagem.');
      setTipoMensagem('erro');
      return false;
    }

    if (mensagem.length < 10) {
      setMensagemSistema('A mensagem deve conter pelo menos 10 caracteres.');
      setTipoMensagem('erro');
      return false;
    }

    try{
      const resposta = await fetch (`${API_URL}/contato`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials:'include',
        body: JSON.stringify({
          nome: nome,
          email: email,
          mensagem: mensagem
        })
      });
      const dados = await resposta.json()

      if(resposta.ok){
        setMensagemSistema(dados.mensagem || "Mensagem enviada")
        // Define o "estilo" da mensagem como sucesso
        setTipoMensagem("sucesso")
        setNome('');
        setEmail('');
        setMensagem('');
      } else{
        setMensagemSistema(dados.erro || "Erro ao ao enviar mensagem")
        setTipoMensagem("erro") 
      }
    } catch(erro){
      setMensagemSistema("Erro ao conectar com o servidor")
      setTipoMensagem("erro")
    }

  }

   return (
      <ScrollView>
          { /*=========== TOPO (HEADER) =============*/}
          { /*=========== Área de cabeçalho com logo e menu =============*/}
         <Header ativo="contato"></Header>
  
          { /*=========== CONTEÚDO DA PÁGINA =============*/}
          <View style = {styles.container}>
            {/* Card branco que envolve o form */}
            <View style={styles.cardContato}>
              <Text style={styles.tituloDestaque}>
                Entre em contato
              </Text>
              <Text style={styles.subtitulo}>
                Envie sua mensagem para nossa equipe.
              </Text>

              <TextInput style={styles.TextInput}
               placeholder= 'Digite seu nome'
               value={nome} // exibe o estado da variavel
               onChangeText={setNome} // Atualiza o estado da variavel
               ></TextInput>

              <TextInput style={styles.TextInput}
               placeholder= 'Digite seu email'
               keyboardType='email-address'
               value={email}
               onChangeText={setEmail}
              ></TextInput>

              <TextInput style={styles.TextInput}
               placeholder= 'Digite sua mensagem'
               multiline={true} 
               value={mensagem} 
               onChangeText={setMensagem}
              ></TextInput>

              <TouchableOpacity style={styles.btnEnviar} 
                onPress={validarFormulario}>
                <Text style={styles.textobtn}>
                  Enviar Mensagem
                </Text>
              </TouchableOpacity>

              <Text style={tipoMensagem=== 'erro' ? styles.mensagemErro : styles.mensagemSucesso}>
                {mensagemSistema}
              </Text>
            </View>
          </View>
          

          { /*=========== RODAPÉ =============*/}
          { /* Parte final da página */}
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

    cardContato: {
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

    tituloDestaque: {
        color: '#976739',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        },

    subtitulo: {
        textAlign: 'center',
        marginBottom: 20,
        color: '#555',
        fontSize: 16
        },

    label: {
        fontWeight: 'bold',
        color: '#976739'
        },

    TextInput: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
        fontSize: 16,
        backgroundColor: '#ffffff'
        },

    btnEnviar: {
        backgroundColor: '#976739',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginTop: 10
        },

    textobtn: {
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