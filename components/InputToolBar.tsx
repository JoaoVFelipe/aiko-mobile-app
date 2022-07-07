import { Button, Icon } from '@rneui/base';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function HomePage() {
  const [message, setMessage] = useState("");

  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <View style={styles.container}>
        <TextInput
            placeholder="Digite sua mensagem/comando aqui:"
            value={message}
            onChangeText={(text) => setMessage(text)}
            keyboardType="default"
            style={styles.input}
        />
       <TouchableOpacity  style={styles.button}>
            <Icon
                name='send'
                type='ionicon'
                size={24}
                color={Colors.primaryColor}
                style={styles.icon}
                onPress={onPress}
            />
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15
  },
  input: {
      backgroundColor: "#fff",
      padding: 10,
      width: "80%",
      color: "#000",
  },
  button: {
    elevation: 8,
    backgroundColor: "#009688",
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  icon: {
  }
});

