import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from '../../screens/detail/styles/styles';
import {ICONS} from '../../../common/Images';

export default function Order() {

  return (
    <View style={styles.order}>
      <View style={styles.order__item}>
        <Text style={styles.text15W5}>4 Item in cart</Text>
        <Text style={styles.text15W5}>$46.98</Text>
      </View>
      <View style={styles.line}></View>
      <View style={[styles.order__location, styles.row]}>
        <View style={styles.row}>
          <Image style={styles.icon16} source={ICONS.location} />
          <Text style={[styles.text15W5, styles.mLeft]}>7745 Lincoln PI</Text>
        </View>
        <View style={styles.row}>
          <Image style={styles.icon16} source={ICONS.mastercard} />
          <Text style={[styles.text15W5, styles.mLeft]}>**** 5491</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.btnOrder}>
        <Text style={[styles.textColorWhite, styles.text15W5]}>Order</Text>
      </TouchableOpacity>
    </View>
  );
}
