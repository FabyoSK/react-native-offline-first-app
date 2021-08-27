import React from 'react';
// import { Icon } from 'react-native-vector-icons/Icon';
import { MaterialIcons } from '@expo/vector-icons';
import Repository from '../components/Repository';
import { Container, Form, Input, Submit, Title, List } from './styles';

export const Home = () => (
  <Container>
    <Title>Repositories</Title>
    <Form>
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        placeHolder="Search for a repository..."
      />
      <Submit onPress={() => {}}>
        <MaterialIcons
          name="add"
          size={22}
          color="#FFF"
        />
      </Submit>
    </Form>
    <List
      keyboardShouldPersistTaps="handled"
      data={[]}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <Repository data={item} />
      )}
    />
  </Container>
);
