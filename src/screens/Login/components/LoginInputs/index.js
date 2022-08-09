import React, { useState, useContext } from "react";
import { LoginContext } from '../../../../contexts/loginContext';
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { styles } from "./style";
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import { instance, apiKey } from '../../../../services/api'

export const LoginInputs = () => {

  const [hidePass, setHidePass] = useState(true);

  const [username, setUsername] = useState('');

  const { requestKey, sessionID } = useContext(LoginContext);

  const [loading, setLoading] = useState(false);

  const [password, setPassword] = useState('');

  const requestApiInputs = async () => {
    await instance.post(`authentication/token/validate_with_login?api_key=${apiKey}`, {
      'username': username,
      'password': password,
      'request_token': requestKey,
    })
      .then(resp => {
        createSession(resp?.data?.request_token)
      })
      .catch(error => {
        setLoading(false)
        if (error?.response?.status === 422 || error?.response?.status === 400) {
          console.log('Usuário ou senha inválidos!')
        } else if (error?.response?.status === 401) {
          console.log('Autorização negada!')
        } else {
          console.log('Falha no Login, tente mais tarde')
        }
      })
  }

  const createSession = async (requestToken) => {
    await instance.post(`authentication/session/new?api_key=${apiKey}`, {
      "request_token": requestToken
    })
      .then(resp => {
        sessionID(resp?.data?.session_id)
      })
      .catch(error => console.log(error))
  }

  function ValidateEmail() {
    if (/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(username)) {
      return true
    }
    alert("Você inseriu um usuário inválido!")
    return false
  }
  function validInput() {
    if (ValidateEmail()) {
      requestApiInputs()
    }
    else {
      console.log('aconteceu um erro')
    }
  }
  return (
    <>
      <View style={styles.LoginInput}>
        <View style={styles.input}>
          <Icon name='account-circle'
            size={20}
            color={'rgba(255, 255, 255, 0.5)'} />
          <TextInput
            placeholder='Username'
            placeholderTextColor='rgba(255, 255, 255, 0.5)'
            style={styles.TextStyle}
            onChangeText={(Text) => setUsername(Text)}
            value={username}
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
            onChangeText={(Text) => setPassword(Text)}
            secureTextEntry={hidePass}
          />
          <TouchableOpacity style={styles.eye}
            onPress={() => setHidePass(!hidePass)}
          >
            <Icon name={hidePass ? "visibility" : 'visibility-off'} color='rgba(255, 255, 255, 0.5)' size={20} />
          </TouchableOpacity>
        </View>
      </View>
      {loading ? (
        <View style={styles.loading}>
          <Text style={{ color: 'white' }}> spinner :D </Text>
        </View>

      ) : (
        <TouchableOpacity onPress={requestApiInputs} style={styles.Button}>
          <Text style={styles.Enter}>Entrar</Text>

        </TouchableOpacity>
      )
      }
    </>
  )
}