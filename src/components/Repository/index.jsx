import React from 'react';

import { FontAwesome } from '@expo/vector-icons';

import {
  Container,
  Name,
  Description,
  Stat,
  Stats,
  StatCount,
  Refresh,
  RefreshText
} from './styles';

const Repository = ({ data, onRefresh }) => (
  <Container>
    <Name>
      {data.name}
    </Name>
    <Description>
      {data.description}
    </Description>
    <Stats>
      <Stat>
        <FontAwesome
          name="star"
          size={16}
          color="#333"
        />
        <StatCount>
          {data.stars}
        </StatCount>
      </Stat>
      <Stat>
        <FontAwesome
          name="code-fork"
          size={16}
          color="#333"
        />
        <StatCount>
          {data.forks}
        </StatCount>
      </Stat>
    </Stats>
    <Refresh onPress={onRefresh}>
      <FontAwesome
        name="refresh"
        size={16}
        color="#7159c1"
      />
      <RefreshText>
        Refresh
      </RefreshText>
    </Refresh>
  </Container>
);

export default Repository;
