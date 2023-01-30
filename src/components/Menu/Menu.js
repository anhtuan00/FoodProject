import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {menuData, categoryData} from '../../../common/Constant';
import styles from '../../screens/menu/styles/styles';

import {ICONS, IMAGES} from '../../../common/Images';
import {useNavigation} from '@react-navigation/native';

export default function Menu(props) {
  const navigation = useNavigation();
  getNameCategoryById = id => {
    let listCategory = categoryData.filter(value => value.id == id);
    let categoryName = '';
    listCategory.forEach(value => {
      categoryName += value.name;
    });
    return categoryName;
  };

  renderItem = ({item}) => {
    console.log('Item: ', item);
    console.log('Image sample: ', IMAGES.hawaiian_pizza);
    return (
      <TouchableOpacity
        style={styles.menu}
        onPress={() => navigation.push('detail', {item})}>
        <View>
          <Image style={styles.menu__img} source={item.photo} />
          <View style={styles.menu__duration}>
            <Text>{item.duration}</Text>
          </View>
        </View>
        <Text style={styles.menu__title}> {item.name}</Text>
        <View style={[styles.menu__type, styles.mTop8]}>
          <Image style={styles.icon16} source={ICONS.star} />
          <Text style={styles.mLeft8}>{item.star}</Text>
          <Text style={styles.mLeft8}>
            {getNameCategoryById(item.categoryId)}
          </Text>
          <Text style={styles.mLeft8}>${item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return <FlatList data={props.data} renderItem={renderItem} />;
}
