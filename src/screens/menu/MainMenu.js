import {View, Text, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import AppBar from '../../components/Menu/AppBar';
import Categories from '../../components/Menu/Categories';
import Menu from '../../components/Menu/Menu';
import styles from './styles/styles';
import {menuData, categoryData} from '../../../common/Constant';

export default function MainMenu() {
  // Hook chi su dung functon component
  const [categorySelected, setCategorySelected] = useState(1);
  let listMenu = menuData.filter(value => value.categoryId == categorySelected);

  _onSelectedCategory = id => {
    setCategorySelected(id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppBar />
      <Categories
        onSelectedCategory={_onSelectedCategory}
        categorySelected={categorySelected}
      />
      <Menu data={listMenu} />
    </SafeAreaView>
  );
}
