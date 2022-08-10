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

  const [errorUser, setErrorUser] = useState(false);

  const [message, setMessage] = useState('');

  const [errorPass, setErrorPass] = useState(false);

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
        setErrorUser(true)
        setErrorPass(true)
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
    setErrorUser(false)
    if (/\W|_/.test(Text)) {
      setUsername(username.replace(Text, ''))
    }
    else {
      setUsername(Text)
    }
  }
  function validInput() {
    setLoading(true)
    if (username === '' && password === '') {
      setErrorUser(true)
      setErrorPass(true)
      setMessage('Preencha todos os campos')
      setLoading(false)
    }
    else if (username === '') {
      setErrorUser(true)
      setMessage('Preencha seu Usuário')
      setLoading(false)
    }
    else if (password === '') {
      setErrorPass(true)
      setMessage('Preencha sua senha')
      setLoading(false)
    }
    else {
      requestApiInputs()
    }
  }
  return (
    <>
      <View style={styles.LoginInput}>
        <Animatable.View
          style={[styles.input, { borderWidth: errorUser ? 1 : 0 }]}
          animation={ errorUser ? 'shake' : null}>
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
        </Animatable.View>
        <Animatable.View
          style={[styles.input, { borderWidth: errorPass ? 1 : 0 }]}
          animation={ errorPass ? 'shake' : null}
        >
          <Icon name='lock'
            size={18}
            color={'rgba(255, 255, 255, 0.5)'} />
          <TextInput
            placeholder='senha'
            placeholderTextColor='rgba(255, 255, 255, 0.5)'
            style={styles.TextStyle}
            onChangeText={(Text) => {
              setPassword(Text)
              setErrorPass(false)
            }}
            secureTextEntry={hidePass}
          />
          <TouchableOpacity style={styles.eye}
            onPress={() => setHidePass(!hidePass)}
          >
            <Icon name={hidePass ? "visibility" : 'visibility-off'} color='rgba(255, 255, 255, 0.5)' size={20} />
          </TouchableOpacity>
        </Animatable.View>
      </View>
      <View style={{ width: '100%', height: 40, alignItems: 'center', justifyContent: 'center' }}>
        {errorUser || errorPass &&
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