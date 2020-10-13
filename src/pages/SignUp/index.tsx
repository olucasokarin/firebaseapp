import React, { useState } from 'react';
import {Text, TextInput, View} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useAuth } from '../../hooks/auth';

import styles from './styles';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signUp } = useAuth();


  async function handleConfirme(){
    await signUp({
      email, password
    });
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title} >CREATE ACCOUNT</Text>

      <View style={styles.searchForm}>
        <TextInput
          style={styles.input}
          placeholder="Digite o email"
          autoCapitalize="none"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite a senha"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />

        <RectButton
          onPress={handleConfirme}
          style={styles.submitButton}
        >
          <Text style={styles.submitButtonText} >Create Account</Text>
        </RectButton>


      </View>
    </View>


  )
};

export default SignUp;
