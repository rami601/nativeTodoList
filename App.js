import { useState } from 'react';
import { StyleSheet, Text, View ,Button,Image ,ImageBackground, Modal, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, ScrollView, Keyboard} from 'react-native';
import Task from './components/Task';

export default function App() {
  // const [isModalVisible, setIsModalVisible] = useState(false)
  const [tasks , setTasks ] = useState([]);
  const [input , setInput] = useState('');
  
  const hanldeTasks = () => {
    Keyboard.dismiss();
    console.log('input ', input)
    console.log(tasks)

    if(input.length > 3 ) {
      setTasks([...tasks,input])
      setInput('')

    }

    

  } 

  const handleInputChange = ( text ) => {
    setInput(text);
  }

  return (


<View style={styles.container}>
      {/* today's tasks */}

      <View style={styles.tasksWrapper}>

        {/* header */}
        <Text style={styles.sectionTitle}> Today's tasks </Text>

        {/* body */}
        <View style={styles.items}>
          {/* this is where the tasks will go! */}

          {
            tasks.map((item , index)=>( 
              <Task key={index} itemText={item}  tasks={tasks} setTasks={setTasks} />


            ))
          }
        </View>

        


      </View>

      {/* footer */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
        >

          <TextInput  
          style={styles.input}
          placeholder={'Write a task'}
          value={input}
          onChangeText={ handleInputChange}
          />

          <TouchableOpacity onPress={hanldeTasks}>
            <View style={styles.addWrapper} >
              <Text style={styles.addText}>+</Text>

            </View>
          </TouchableOpacity>

        </KeyboardAvoidingView>



    </View>

  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
  },
  tasksWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold',
  },
  items:{
    marginTop: 30,
  },
  writeTaskWrapper:{

    position:'absolute',
    bottom: 50,
    flexDirection: 'row-reverse',
    paddingHorizontal: 20,
    width:'100%',
    justifyContent: 'space-between',
    alignItems:'center',


  },
  input :{
    backgroundColor: '#fff',
    color: '#333',
    width:'75%',
    height:40,
    borderRadius: 50,
    textAlign: 'center',
    borderWidth:1,
    borderColor:'#c0c0c0',
    
  },
  addWrapper:{
    backgroundColor: '#fff',
    width:50,
    height:50,
    borderRadius: 50,
    display:'flex',
    flexDirection:'row-reverse',
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderColor:'#c0c0c0'


  },
  addText:{
    color:'grey',
    fontSize:24,
    fontWeight:'200',
    
    
    
    
    
  }
});
