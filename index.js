import React, {useLayoutEffect,useState} from 'react';
import { View, Text, StyleSheet, Button , TextInput, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Sobre(){
    const [showSexoInput, setShowSexoInput] = useState(false);
    const [nome, setNome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [idade, setIdade] = useState('');
    const [registro, setRegistro] = useState('');
    const [sexo, setSexo] = useState('');
    const [corPele, setCorPele] = useState('');
    const [naturalidade, setNaturalidade] = useState('');
    const [residencia, setResidencia] = useState('');
    const [procedencia, setProcedencia] = useState('');
    const [dataInternacao, setDataInternacao] = useState('');
  
    const handleSubmit = () => {
      // Aqui você pode adicionar a lógica para enviar o formulário
      // para o servidor ou fazer o que desejar com os dados do formulário.
      console.log({
        nome,
        dataNascimento,
        idade,
        registro,
        sexo,
        corPele,
        naturalidade,
        residencia,
        procedencia,
        dataInternacao,
      });
    };

    return (
        <ScrollView>
          <Button
        title={showSexoInput ? "Mostrar menos" : "Mostrar mais"}
        onPress={() => setShowSexoInput(!showSexoInput)}
      />
          <View style={styles.container}>
            <Text style={styles.label}>Nome</Text>
            <TextInput
              style={styles.input}
              value={nome}
              onChangeText={setNome}
              placeholder="Digite o nome completo"
            />
    
            <Text style={styles.label}>Data de nascimento</Text>
            <TextInput
              style={styles.input}
              value={dataNascimento}
              onChangeText={setDataNascimento}
              placeholder="DD/MM/AAAA"
            />
    
            <Text style={styles.label}>Idade</Text>
            <TextInput
              style={styles.input}
              value={idade}
              onChangeText={setIdade}
              keyboardType="numeric"
            />
    
            <Text style={styles.label}>Registro</Text>
            <TextInput
              style={styles.input}
              value={registro}
              onChangeText={setRegistro}
              keyboardType="numeric"
            />
    
            <Text style={styles.label}>Sexo</Text>
            <TextInput
              style={styles.input}
              value={sexo}
              onChangeText={setSexo}
              placeholder="Homem, mulher ou outro"
            />
    
            <Text style={styles.label}>Cor da pele</Text>
         <Picker
          selectedValue={corPele}
          onValueChange={(itemValue) => setCorPele(itemValue)}
          style={{ width: 200, borderWidth: 1 }}
        >
          <Picker.Item label="Branco" value="branco" />
          <Picker.Item label="Preto" value="preto" />
          <Picker.Item label="Pardo" value="pardo" />
          <Picker.Item label="Amarelo" value="amarelo" />
          <Picker.Item label="Indígena" value="indigena" />
        </Picker>
    
            <Text style={styles.label}>Naturalidade</Text>
            <TextInput
              style={styles.input}
              value={naturalidade}
              onChangeText={setNaturalidade}
            />
    
            <Text style={styles.label}>Residência</Text>
            <TextInput
              style={styles.input}
              value={residencia}
              onChangeText={setResidencia}
            />
    
            <Text style={styles.label}>Procedência</Text>
            <TextInput
              style={styles.input}
              value={procedencia}
              onChangeText={setProcedencia}
            />
    
            <Text style={styles.label}>Data da internação</Text>
            <TextInput
              style={styles.input}
              value={dataInternacao}
              onChangeText={setDataInternacao}
              placeholder="DD/MM/AAAA"
            />

{showSexoInput ? (
        <TextInput
          placeholder="Sexo"
          onChangeText={(text) => setSexo(text)}
          value={sexo}
        />
      ) : null}
    
            <Button title="Enviar" onPress={handleSubmit} />
          </View>
        </ScrollView>
      );
    }
    

const styles = StyleSheet.create({
container: {
flex: 1,
padding: 10,
},
label: {
marginTop: 10,
fontSize: 16,
fontWeight: 'bold',
},
input: {
height: 40,
borderColor: 'gray',
borderWidth: 1,
borderRadius: 5,
paddingHorizontal: 10,
marginBottom: 20,
},
});