import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {ICONS, IMAGES} from '../../../common/Images';
import styles from '../../screens/detail/styles/styles';

export default function Description(props) {
  const [count, setCount] = useState(0);
  return (
    <View>
      {/* Image + button */}
      <View style={styles.content}>
        <Image style={styles.content__img} source={props.img} />
        <View style={styles.content__btn}>
          <TouchableOpacity
            onPress={() =>
              count == 0 ? setCount(count - 0) : setCount(count - 1)
            }>
            <Text style={styles.content__btn_text}>-</Text>
          </TouchableOpacity>
          <Text style={styles.content__btn_text}>{count}</Text>
          <TouchableOpacity onPress={() => setCount(count + 1)}>
            <Text style={styles.content__btn_text}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* End Image + button */}
      <View style={styles.content__desc}>
        <Text style={styles.text20w5}>
          {props.title} - ${props.price}
        </Text>
        <Text style={styles.mTop}>{props.desc}</Text>
        <View style={[styles.content__desc__cal, styles.mTop]}>
          <Image style={styles.icon16} source={ICONS.fire} />
          <Text>{props.calo} cal</Text>
        </View>
      </View>
    </View>
  );
}
