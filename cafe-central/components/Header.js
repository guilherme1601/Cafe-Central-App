import {View, Text, StyleSheet} from 'react-native'
import {Link} from 'expo-router'

export default function Header({ativo}){
  return (
    <View style={styles.topo}>

      <Link href='/'>
        <Text style={styles.logo1}>Café</Text>
        <Text style={styles.logo2}>Central</Text>
      </Link>


        <View style={styles.menu}>
          <Link href='/'>
            <Text style={[styles.menuItem, ativo ==="inicio" && styles.ativo]}> Inicio </Text>
          </Link>
        
          <Link href='/sobre'>
            <Text style={[styles.menuItem, ativo ==="sobre" && styles.ativo]}> Sobre </Text>
          </Link>

          <Link href='/contato'>
            <Text style={[styles.menuItem, ativo ==="contato" && styles.ativo]}> Contato </Text>
          </Link>

        </View>
      </View>

        )  
}

const styles = StyleSheet.create({
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
      fontWeight: 'bold'
    },

    ativo:{
      color: '#e6b061'
    }

})