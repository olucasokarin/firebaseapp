import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {Text, TextInput, View} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useAuth } from '../../hooks/auth';

import styles from './styles';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth();

  const { navigate } = useNavigation();


  async function handleConfirme(){
    await signIn({
      email, password
    });
  }

  function navigateToSignUp() {
    navigate('SignUp');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title} >LOGON</Text>

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
          <Text style={styles.submitButtonText} >LOGIN</Text>
        </RectButton>
      </View>


      <RectButton
          onPress={navigateToSignUp}
        >
          <Text style={styles.createText} >Create account?</Text>
        </RectButton>
    </View>


  )
};

export default SignIn;
