import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from '../../screens/menu/styles/styles';
import {categoryData} from '../../../common/Constant';

export default function Categories(props) {
  return (
    <View style={styles.category}>
      <Text style={styles.category__text}>Main</Text>
      <Text style={styles.category__text}>Categories</Text>
      <CategoriesList
        onSelectedCategory={props.onSelectedCategory}
        categorySelected={props.categorySelected}
      />
    </View>
  );
}

export const CategoriesList = props => {
  let currentCategory = props.categorySelected;

  renderItem = ({item}) => (
    <TouchableOpacity
      style={[
        styles.categoryList,
        item.id == currentCategory ? styles.categoryList_selected : '',
      ]}
      onPress={() => props.onSelectedCategory(item.id)}>
      <View
        style={[
          styles.categoryList__circle,
          item.id == currentCategory
            ? styles.categoryList__circle_selected
            : '',
        ]}>
        <Image style={styles.icon} source={item.icon} />
      </View>
      <Text
        style={[
          styles.categoryList__title,
          item.id == currentCategory ? styles.categoryList__title_selected : '',
        ]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categoryData}
      renderItem={renderItem}
    />
  );
};
