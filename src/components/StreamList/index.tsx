import React from 'react';
import { Text } from 'react-native';

import streamThumbnail from '../../images/stream_thumbnail.jpg';

import { 
  List,
  StreamContainer,
  StreamThumbnail,
  StreamColumn,
  StreamRow,
  StreamHeader,
  StreamAvatar,
  StreamUserName,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText
} from './styles';

const StreamList: React.FC = () => {
  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />
      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUserName numberOfLines={1} >kevyn_oficial</StreamUserName>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            Front-end com ReactJs
          </StreamDescription>
          <StreamCategory numberOfLines={1}>
            Science & Technology
          </StreamCategory>
        </StreamRow>

        <TagRow>
          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>
          <TagView>
            <TagText>Web Development</TagText>
          </TagView>
        </TagRow>
      </StreamColumn>
    </StreamContainer>
  )


  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
