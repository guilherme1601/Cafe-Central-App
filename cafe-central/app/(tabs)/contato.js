import {
    View, // Para agrupar elementos (= div)
    Text, // Para exibir textos (= p, h1...)
    TouchableOpacity, // Para botões clicáveis (= button)
    ScrollView, // Para a área principal com scroll,
    StyleSheet // Para aplicar estilo na página
   } from 'react-native'; // Importa os componentes View e Text
   import {Link} from 'expo-router';
   import { useState } from 'react';
import { TextInput } from 'react-native-web';
   
  export default function Contato() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const [mensagemSistema, setMensagemSistema] = useState('');
    const [tipoMensagem, setTipoMensagem] = useState('');  // 'sucesso' ou 'erro'

    function validarFormulario() {
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

      setMensagemSistema('Mensagem enviada com sucesso!');
      setTipoMensagem('sucesso');
      
      setNome('');
      setEmail('');
      setMensagem('');
    };

   return (
      <ScrollView>
          { /*=========== TOPO (HEADER) =============*/}
          { /*=========== Área de cabeçalho com logo e menu =============*/}
          <View style={styles.topo}>
  
          { /* Logo do sistema */}
          <Link href='/'>
            <Text style={styles.logoP1}>Tech</Text>
            <Text style={styles.logoP2}>Educa</Text>
          </Link>
  
            { /* Menu de Navegação */}
            <View style={styles.menu}>
              <Link href='/'>
                <Text style={styles.menuItem}> Início </Text>
              </Link>
              <Link href='/sobre'>
                <Text style={styles.menuItem}> Sobre </Text>
              </Link>
              <Link href='/contato'>
                <Text style={[styles.menuItem, styles.ativo]}> Contato </Text>
              </Link>
            </View>
          </View>

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

              <text style={tipoMensagem=== 'erro' ? styles.mensagemErro : styles.mensagemSucesso}>
                {mensagemSistema}
              </text>
            </View>
          </View>
          

          { /*=========== RODAPÉ =============*/}
          { /* Parte final da página */}
          <View style={styles.rodape}>
            { /* Texto de direitos de autorais */}
            <Text style={styles.textoRodape}> 2026 TechEduca. Todos os direitos reservados.</Text>
  
            { /* Links de Contato */}
            <Link href='/contato'>
              <Text style={styles.linkRodape}>Entre em contato</Text>'
            </Link>
          </View>
  
      </ScrollView>
   );
  }
  
  const styles = StyleSheet.create(
    {
      topo: {
        backgroundColor: '#1a4db3',
        padding:20,
        alignItems: 'center',
        gap: 10,
      },
  
      logoP1: {
        color:'#ffffff',
        fontSize:24,
        fontWeight: 'bold',
      },
  
      logoP2: {
        color:'#ff6a00',
        fontSize:24,
        fontWeight: 'bold',
      },
  
      menu: {
        marginTop: 10,
        alignItems: 'center',
        gap: 10,
      },
  
      menuItem: {
        color: '#ffffff',
        fontWeight: 'bold',
      },
  
      ativo: {
        color: '#ff6a00',
      },
  
     
  
      rodape: {
        backgroundColor: '#1a4db3',
        padding: 20,
        alignItems: 'center',
        gap: 8,
      },
  
      textoRodape: {
        color : '#ffffff',
        textAlign: 'center', 
        marginBottom: 8,
      },
  
      linkRodape: {
        color: '#ff6a00',
        fontWeight: 'bold',
        textDecorationLine: 'none'
      },
  
      tituloDestaque : {
        color: '#1a4db3',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
      }
  
    }
  )