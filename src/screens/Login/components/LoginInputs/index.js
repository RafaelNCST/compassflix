import React, { useState, useContext } from "react";
import { LoginContext } from '../../../../contexts/loginContext';
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { styles } from "./style";
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import { instance, apiKey } from '../../../../services/api';
import Lottie from 'lottie-react-native';

export const LoginInputs = () => {

  const [hidePass, setHidePass] = useState(true);

  const [username, setUsername] = useState('');

  const { requestKey, sessionID } = useContext(LoginContext);

  const [loading, setLoading] = useState(false);

  const [password, setPassword] = useState('');

  const [error, setError] = useState(false);

  const [message, setMessage] = useState('');

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
        setError(true)
        if (error?.response?.status === 422 || error?.response?.status === 400) {
          console.log('Usuário ou senha inválidos!')
          setMessage('Usuário ou senha inválidos!')
        } else if (error?.response?.status === 401) {
          console.log('Usuário ou senha inválidos!')
          setMessage('Usuário ou senha inválidos!')
        } else {
          console.log('Falha no Login, tente mais tarde')
          setMessage('Falha no Login, tente mais tarde')
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
  const changeCharSpecial = (Text) => {
    if (/\W|_/.test(Text)) {
      setUsername(username.replace(Text, ''))
    }
    else {
      setUsername(Text)
    }
  }
  function validInput() {
    setLoading(true)
    if (username !== '' && password !== '') {
      requestApiInputs()
    }
    else {
      console.log('aconteceu um erro')
    }
  }
  return (
    <>
      <View style={styles.LoginInput}>
        <Animatable.View animation={error ? 'shake' : null} >
          <View style={[styles.input, { borderWidth: error ? 1 : 0 }]}>
            <Icon name='account-circle'
              size={20}
              color={'rgba(255, 255, 255, 0.5)'} />
            <TextInput
              placeholder='Username'
              placeholderTextColor='rgba(255, 255, 255, 0.5)'
              style={styles.TextStyle}
              onChangeText={(Text) => changeCharSpecial(Text)}
              value={username}
            />
          </View>
          <View style={[styles.input, { borderWidth: error ? 1 : 0 }]}>
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
          </View></Animatable.View>
      </View>
      <View style={{ width: '100%', height: 40, alignItems: 'center', justifyContent: 'center' }}>
        {error &&
          <Text style={{ color: '#ef5350' }}>
            {message}
          </Text>
        }
      </View>
      {loading ? (<View style={styles.loading}>
        <Lottie
          source={require('../../../../assets/lottie/red-spinner.json')}
          resizeMode='contain'
          loop={true}
          autoPlay
        />
      </View>
      ) : (
        <TouchableOpacity onPress={validInput} style={styles.Button}>
          <Text style={styles.Enter}>Entrar</Text>
        </TouchableOpacity>
      )
      }
    </>
  )
}