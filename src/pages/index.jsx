import React, { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';
// import { Icon } from 'react-native-vector-icons/Icon';
import { MaterialIcons } from '@expo/vector-icons';
import Repository from '../components/Repository';
import { Container, Form, Input, Submit, Title, List } from './styles';

import api from '../services/api';
import getRealm from '../services/realm';

export const Home = () => {
  const [input, setInput] = useState('');
  const [repositories, setRepositories] = useState('');
  const [error, setError] = useState(false);

  const saveRepository = async (repository) => {
    const data = {
      id: repository.id,
      name: repository.name,
      fullName: repository.full_name,
      description: repository.description,
      stars: repository.stargazers_count,
      forks: repository.forks_count
    };

    const realm = await getRealm();

    realm.write(() => {
      realm.create('Repository', data, 'modified');
    });

    return data;
  };

  const handleAddRepository = async () => {
    try {
      const response = await api.get(`/repos/${input}`);

      await saveRepository(response.data);

      setInput('');

      setError(false);
      Keyboard.dismiss();
    } catch (error) {
      setError(true);
    }
  };

  const handleRefreshRepository = async (repository) => {
    const response = await api.get(`/repos/${repository.fullName}`);

    const data = await saveRepository(response.data);

    setRepositories(repositories.map((repo) => (repo.id === data.id ? data : repo)));
  };

  useEffect(() => {
    async function loadRepositories() {
      const realm = await getRealm();

      const data = realm.objects('Repository').sorted('stars', true);
      setRepositories(data);
    }

    loadRepositories();
  }, []);

  return (
    <Container>
      <Title>Repositories</Title>

      <Form>
        <Input
          value={input}
          error={error}
          autoCapitalize="none"
          onChangeText={setInput}
          autoCorrect={false}
          placeholder="Search for a repository..."
        />
        <Submit onPress={handleAddRepository}>
          <MaterialIcons
            name="add"
            size={22}
            color="#FFF"
          />
        </Submit>
      </Form>

      <List
        keyboardShouldPersistTaps="handled"
        data={repositories}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Repository
            data={item}
            onRefresh={() => handleRefreshRepository(item)}
          />
        )}
      />
    </Container>
  );
};
