import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import AppBar from '../../components/Detail/Appbar';
import Description from '../../components/Detail/Description';
import Order from '../../components/Detail/Order';
import styles from './styles/styles';
import {useRoute} from '@react-navigation/native';

export default function DetailPage() {
  const route = useRoute();
  const params = route.params;
  console.log(params);
  return (
    <SafeAreaView style={styles.container}>
      <AppBar />
      <Description
        img={params.item.photo}
        title={params.item.name}
        price={params.item.price}
        desc={params.item.description}
        calo={params.item.calories}
      />
      <Order />
    </SafeAreaView>
  );
}
