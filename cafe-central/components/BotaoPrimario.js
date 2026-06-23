import {TouchableOpacity, StyleSheet, Text} from 'react-native'
import {Link} from 'expo-router'


export default function BotaoPrimario({texto,funcao}){
    return(
        <TouchableOpacity style={styles.btnPrimario} onPress={funcao}>
            <Text style={styles.textoBotao}>{texto}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    bntPrimario:{
      backgroundColor: '#976739',
      color: '#ffffff',
      paddingHorizontal: 12,
      paddingVertical: 15,
      marginBottom: 7,
      borderRadius: 8,
      minWidth: 150,
    },

    textoBotaoPri:{
      color: '#ffffff',
      fontWeight: 'bold',
      textAlign: 'center',
    },
})