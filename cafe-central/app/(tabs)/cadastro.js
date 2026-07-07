import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Link, router} from 'expo-router';
import { useState } from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
const API_URL = "http://localhost:3000"

export default function cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');

  const [mensagemSistema, setMensagemSistema] = useState('');
  const [tipoMensagem, setTipoMensagem] = useState(''); // 'sucesso' ou 'erro'


  async function validarCadastro() {
    if (nome === ''){
      setMensagemSistema('Digite seu nome.');
      setTipoMensagem('erro');
      return
    }

    if (/\d/.test(nome)){
      setMensagemSistema('O nome não pode conter números.');
      setTipoMensagem('erro');
      return
    }

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

    if (confirmaSenha === ''){
      setMensagemSistema('Confirme sua senha.');
      setTipoMensagem('erro');
      return
    }

    if (confirmaSenha.length < 6){
      setMensagemSistema('A senha deve ter pelo menos 6 caracteres!.');
      setTipoMensagem('erro');
      return
    }

    if (senha !== confirmaSenha){
      setMensagemSistema('As senhas não coincidem.');
      setTipoMensagem('erro');
      return
    }

    try{
      const resposta = await fetch (`${API_URL}/cadastro`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials:'include',
        body: JSON.stringify({
          nome: nome,
          email: email,
          senha: senha
        })
      });

      const dados = await resposta.json()

      if (resposta.ok){
        setMensagemSistema(dados.mensagem || "Cadastro realizado")
        setTipoMensagem("sucesso")
        setNome('')
        setEmail('')
        setSenha('')
        setConfirmaSenha('')
      } else{
        setMensagemSistema(dados.erro || "Erro ao se cadastrar")
        setTipoMensagem("erro")
      }
    }catch(erro){
      setMensagemSistema("Erro ao conectar com o servidor")
      setTipoMensagem("erro")
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.corpo}>

     <Header ativo = "cadastro"> </Header>

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
                            value={nome}
                            onChangeText={setNome}
                            style={styles.input}>
                  </TextInput>
                
                  <Text style={styles.label}>Email</Text>
                  <TextInput placeholder='Digite seu email' 
                             keyboardType='email-address'
                              value={email}
                              onChangeText={setEmail}
                             style={styles.input}>
                  </TextInput>

                  <Text style={styles.label}>Senha</Text>
                  <TextInput placeholder='Digite sua senha' 
                             secureTextEntry={true}
                             value={senha}
                             onChangeText={setSenha}
                             style={styles.input}>
                  </TextInput>

                  <Text style={styles.label}>Confirma senha</Text>
                  <TextInput placeholder='Digite sua senha novamente' 
                             secureTextEntry={true}
                             value={confirmaSenha}
                             onChangeText={setConfirmaSenha}
                             style={styles.input}>
                  </TextInput>

                  <TouchableOpacity style = {styles.btnPrimario}
                                    onPress={validarCadastro}>
                    <Text style= {styles.textoBotao}>
                      Cadastrar
                    </Text>
                  </TouchableOpacity>

                  <Text style={tipoMensagem === "erro" ? 
                              styles.mensagemErro : styles.mensagemSucesso}>{mensagemSistema}</Text>

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
      fontWeight: 'bold',
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
        backgroundColor: '#ffffff',
        gap: 10,
        padding: 30,
        borderRadius: 8,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 4,
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
        backgroundColor: '#ffffff',
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

    mensagemErro:{
        color: 'red',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 10,
        marginHeight: 20,
    },

    mensagemSucesso:{
        color: 'green',
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

    corpo: { 
      flexGrow: 1,
      justifyContent: 'space-between',
    },
    
  }
);