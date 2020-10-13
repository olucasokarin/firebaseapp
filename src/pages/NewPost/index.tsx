import React, { useEffect, useState } from 'react'
import { Alert, Platform, Text, TextInput, ToastAndroid, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useAuth } from '../../hooks/auth';
import { useNavigation, useRoute } from '@react-navigation/native';

import database from '@react-native-firebase/database';

import styles from './styles'


const NewPost: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const { user } = useAuth();
  const { goBack } = useNavigation();

  const route = useRoute();

  const post = route.params.post;

  useEffect(()=>{
    if(post){
      setTitle(post.title);
      setContent(post.content);
    }
  }, [post])

  function handleAdd() {

    const reference = database()
    .ref(`${user.uid}/posts`)

    const key = reference.push().key;

    if(key)
      reference.child(key).set({
        uid: key,
        title: title,
        content: content,
      })
      .then(()=> {
        showMessage('Success on create note');
        goBack();
      })
      .catch(() => showMessage('Error on create note'))
    else {
      showMessage('Error on create note')
    }
   }

   function handleUpdate() {
    const reference = database()
    .ref(`${user.uid}/posts`)

    reference.child(post.uid)
      .update({
        title,
        content
      })
      .then(()=> {showMessage('Success on update note')})
      .catch(() => showMessage('Error on update note'))
   }

   function handleAct() {
     if(post)
      handleUpdate();
    else
      handleAdd();
   }

   function showMessage(msg: string) {
    //  Alert.alert(
    //    'Alert title',
    //    'alert msg',

    //  )
    if(Platform.OS === 'android')
    ToastAndroid.show(msg, ToastAndroid.LONG)
   }

  return (
    <View style={styles.container}>

      <View style={styles.searchForm}>
        <TextInput
          style={styles.input}
          placeholder="Digite o titulo"
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite o conteudo"
          numberOfLines={12}
          multiline
          textAlignVertical='top'
          value={content}
          onChangeText={text => setContent(text)}
        />

        <RectButton
          onPress={handleAct}
          style={styles.submitButton}
        >
          <Text style={styles.submitButtonText}>Salvar</Text>
        </RectButton>


        </View>
    </View>
  )
}


export default NewPost;
