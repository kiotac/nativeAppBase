import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Header,
  View,
  Text,
  Content,
  Form,
  Item,
  Label,
} from 'native-base';
import { useSelector, useDispatch } from 'react-redux';
import * as loginActions from '../../action-reducer/login/loginActions';
import Input from '../../components/Input/index'
import Button from '../../components/Button/index'

function Login({ navigation }) {
  const login = useSelector((state) => state.login.login);
  const dispatch = useDispatch();
  console.log('s-s-s>>>>>>>>>>>logigngn>>>>>>', login);
  useEffect(() => {
    if (login) {
      navigation.navigate('Home');
      //   dispatch(LoginaAction(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [login]);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ width: '90%' }}>
        <Input placeholder="UID/Email/Phone" />
        <Input placeholder="PIN" itemStyle={{ marginTop: 10 }} />
      </View>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
        }}>
        <Button
          onPress={() => {}}
          // eslint-disable-next-line react-native/no-inline-styles
          buttonStyle={{
            width: '80%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          buttonText='Login'
          >
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  content: {
    flex: 1,
    justifyContent: 'center',
    width: '90%',
  },
  form: {
    width: '100%',
  },
  item: {},
});

export default Login;
