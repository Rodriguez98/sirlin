
import React from "react";
import { ImageBackground, TouchableOpacity, View, Text, SafeAreaView, StyleSheet, TextInput } from "react-native";
import RNPickerSelect from 'react-native-picker-select';

const Traductor = ({ navigation }) => {
  return (
    < View style= {styles.container}>
      <ImageBackground source={require('../img/plantilla.png')} style={styles.image}>
        <View style={styles.viewPickerSelect}>
          <RNPickerSelect
            placeholder={{
              label: 'Seleccione un lenguaje',
              value: null,
            }}
            style={picketSelectStyles.inputAndroid}
            onValueChange={(value) => console.log(value)}
            items={[
              { label: 'Español', value: 'Español' },
              { label: 'Miskitu', value: 'Miskitu' },
              { label: 'Rama', value: 'Rama' },
              { label: 'Mayagna', value: 'Mayagna' },
              { label: 'Ulwa', value: 'Ulwa' },
              { label: 'Garifuna', value: 'Garifuna' },
            ]}
          />

          <RNPickerSelect
            placeholder={{
              label: 'Seleccione un lenguaje',
              value: null,
            }}
            style={picketSelectStyles.inputAndroid}
            onValueChange={(value) => console.log(value)}
            items={[
              { label: 'Español', value: 'Español' },
              { label: 'Miskitu', value: 'Miskitu' },
              { label: 'Rama', value: 'Rama' },
              { label: 'Mayagna', value: 'Mayagna' },
              { label: 'Ulwa', value: 'Ulwa' },
              { label: 'Garifuna', value: 'Garifuna' },
            ]}
          />
        </View>

        <View  style={styles.viewInputs}>
          <TextInput
            style={styles.Input}
            placeholder="Escriba texto..."
          />

          <TextInput
            style={styles.Input}
            placeholder="Escriba texto..."
          />
        </View>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Menu')}>

            <Text style={styles.text}> Explorar </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
    resizeMode: "cover",
  },
  viewInputs: {
    // flexDirection: 'row',
    marginTop: '15%',
  },
  viewPickerSelect:{
    marginTop: '30%',
  },
  Input: {
    height: 100,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: '#2c2c2c',
    width: "100%",
    marginTop: -10,
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: "white",
    paddingHorizontal: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:12,
    paddingHorizontal:32,
    marginTop: '-15%',
    marginBottom: '10%',
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    width: '40%',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: '100%',
    height: '100%',
  },
});

const picketSelectStyles = StyleSheet.create({
  inputAndroid: {
    width: '40%',
    marginTop: 2,
    marginBottom: 2,
    marginRight: 3,
    marginLeft: 3,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
    backgroundColor: 'red',
  },
});


export default Traductor;