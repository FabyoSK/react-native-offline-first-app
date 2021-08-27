import React from 'react';

import { FontAwesome } from '@expo/vector-icons';

import { Container, Name, Description, Stat, Stats, StatCount } from './styles';

const Repository = ({ data }) => (
  <Container>
    <Name>
      {data.title}
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

  </Container>
);

export default Repository;
