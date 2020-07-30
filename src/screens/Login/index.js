import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  Header,
  View,
  Button,
  Text,
  Content,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';
import * as loginActions from '../../action-reducer/login/loginActions';
function Login({navigation}) {
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
    <Container>
      <Content contentContainerStyle={styles.content}>
        <Form>
          <Item fixedLabel>
            <Label>Username</Label>
            <Input />
          </Item>
          <Item fixedLabel last>
            <Label>Password</Label>
            <Input />
          </Item>
        </Form>
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
            onPress={() => dispatch(loginActions.LoginaAction(true))}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: '80%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            primary>
            <Text> Login </Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {},
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  form: {
    width: '100%',
  },
  item: {},
});

export default Login;
