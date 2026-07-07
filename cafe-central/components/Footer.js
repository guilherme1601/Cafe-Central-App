import {View, Text, StyleSheet} from 'react-native'
import {Link} from 'expo-router'

export default function Footer(){
    return (
                <View style={styles.rodape}>
                    <Text style={styles.textoRodape}>®2026 Café Central. Todos os Direitos Reservados</Text>
                    <Link href='/contato'>
                    <Text style={styles.linkRodape}>Entre em contato</Text>
                    </Link>
                </View>

    )

}

const styles = StyleSheet.create({
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

    
})