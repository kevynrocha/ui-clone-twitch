import React from 'react';
import { Text } from 'react-native';
import data from './data';

import { 
  List,
  CategoryContainer,
  CategoryImage,
  Categoryname,
  CategoryStatus,
  RedCircle,
  Info
} from './styles';

interface ItemProps {
  item: typeof data[0];
}

const CategoryList: React.FC = () => {

  const CategoryItem: React.FC<ItemProps> = ({ item }) => (
    <CategoryContainer>
      <CategoryImage source={item.source} />
      <Categoryname numberOfLines={1}>{item.name}</Categoryname>    
      <CategoryStatus>
        <RedCircle />
        <Info>51.9K</Info>
      </CategoryStatus>
    </CategoryContainer>
  )
  

  return (
    <List>
      {data.map(item => (
        <CategoryItem key={item.name} item={item} />
      ))}
    </List>
  );
};

export default CategoryList;
