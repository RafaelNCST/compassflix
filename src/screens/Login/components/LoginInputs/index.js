import React, { useState } from "react";
import { View, TextInput, TouchableOpacity} from "react-native";
import { styles } from "./style";
import Icon from 'react-native-vector-icons/MaterialIcons';

export const LoginInputs = () => {

  const [hidePass, setHidePass] = useState(true);

  return (
    <View style={styles.LoginInput}>
      <View style={styles.input}>
        <Icon name='account-circle'
          size={20}
          color={'rgba(255, 255, 255, 0.5)'} />
        <TextInput
          placeholder='e-mail'
          placeholderTextColor='rgba(255, 255, 255, 0.5)'
          style={styles.TextStyle}
        />
      </View>
      <View style={styles.input}>
        <Icon name='lock'
          size={18}
          color={'rgba(255, 255, 255, 0.5)'} />
        <TextInput
          placeholder='senha'
          placeholderTextColor='rgba(255, 255, 255, 0.5)'
          style={styles.TextStyle}
          secureTextEntry={hidePass}
        />
        <TouchableOpacity style={styles.eye}
          onPress={() => setHidePass(!hidePass)}
        >
          <Icon name={hidePass ? "visibility" : 'visibility-off'} color='rgba(255, 255, 255, 0.5)' size={20} />
        </TouchableOpacity>
      </View>
    </View>
  )
}