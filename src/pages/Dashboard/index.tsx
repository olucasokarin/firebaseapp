import React, {useEffect, useState} from 'react';
import {FlatList, Text, View, TouchableOpacity } from 'react-native';
import {RectButton } from 'react-native-gesture-handler';
import {useAuth} from '../../hooks/auth';
import {useNavigation} from '@react-navigation/native';


import Icon from 'react-native-vector-icons/Feather';

import database from '@react-native-firebase/database';

import styles from './styles';

interface Post {
  uid: string;
  title: string;
  content: string;
}

const Dashboard: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const { signOut, user } = useAuth();

  const { navigate } = useNavigation();

  async function handleLogout() {
    signOut();
  }

  useEffect(() => {
    const reference = database().ref(`${user.uid}/posts`);

    let postis: Post[] = [];

    reference.on('child_added', (snapshot: any) => {
      postis.push(snapshot.val());
      // console.log(postis);
      setPosts(postis);
    });

    const valueChange = reference.on('child_changed', (snapshot: any) => {
      console.log(snapshot.val());
      //tentar return com map

      const updatedPosts = postis.map((post) => {
        if (post.uid === snapshot.key) return snapshot.val();
        return post;
      });

      postis = updatedPosts.slice();
      setPosts(postis);
      console.log(updatedPosts);
    });

    reference.on('child_removed', (snapshot: any) => {
      const filteredPosts = postis.filter(post => post.uid !== snapshot.key);
      postis = filteredPosts.slice();

      setPosts(postis)
    })

    return () => reference.off('child_changed', valueChange);


  }, [user]);

  function navigationToDetail(post: Post) {
    navigate('NewPost', { post });
  }

  function handleAdd() {
    navigate('NewPost', {});
  }

  function removeToDB(post: Post) {
    const reference = database().ref(`${user.uid}/posts`);
    reference.child(post.uid)
      .remove();
  }

  return (
    <View style={styles.container}>
      {/* <RectButton
        activeOpacity={0.7}
        onPress={handleAdd}
        style={styles.touchableOpacityStyle}>
       <Text>more</Text>

      </RectButton> */}

      <RectButton
        activeOpacity={0.7}
        onPress={handleAdd}
        style={styles.touchableOpacityStyle}>
          <Icon name='plus' size={40} color="#fff" />
      </RectButton>


      <RectButton onPress={handleLogout} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Logout</Text>
      </RectButton>

      <FlatList
        data={posts}
        keyExtractor={(post) => String(post.uid)}
        renderItem={({item: post}) => (
          <View style={styles.post}

          >
            <Text style={styles.title}>{post.title}</Text>
            <Text style={styles.content}>{post.content}</Text>


            <View style={styles.containerButtons}>
              <TouchableOpacity style={styles.detailsButton} onPress={() => navigationToDetail(post)}>
                  <Text style={styles.detailsButtonText}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.detailsButtonRemove} onPress={() => removeToDB(post)}>
                  <Text style={styles.detailsButtonTextRemove}>Excluir</Text>
              </TouchableOpacity>
            </View>

          </View>
        )}
      />
    </View>
  );
};

export default Dashboard;
