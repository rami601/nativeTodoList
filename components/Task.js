import React from 'react'
import { StyleSheet ,View, Text, TouchableOpacity} from 'react-native';

const Task = ({itemText,tasks , setTasks}) => {
    


    const hanldeDelete = ( ) => {
        setTasks(tasks.filter( task => task !== itemText))
    }


  return (



                                <View style={styles.item}>
                                        <View  style={styles.itemLeft}>
                                            <TouchableOpacity  onPress={hanldeDelete} style={styles.square} ></TouchableOpacity>
                                            <Text style={styles.itemText}>{itemText}</Text>
                                        </View>
                                        <View style={styles.circular} ></View>
                        
                        
                                </View>






  




   
  )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    square:{
        width:24,
        height:24,
        backgroundColor: '#55bcf6',
        borderRadius: 5,
        opacity: .4,
    },
    itemLeft:{
        flexDirection:'row-reverse',
        columnGap: 20,
        alignItems: 'center',
    },
    itemText: {
        maxWidth: '80%',
    },
    circular:{
        width: 15,
        height: 15,
        backgroundColor: 'transparent',
        borderRadius: 12,
        borderWidth: 3,
        borderColor: '#55bcf6',
        
        
    }

})
export default Task