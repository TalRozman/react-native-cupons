import { ReactComponentElement, useContext, useRef } from "react";
import { styles } from "../style";
import { Button, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { loggedContext } from "../Contexts";

export const Login = () => {
  const { setlogged } = useContext(loggedContext)
  const { alertMsg } = useContext(loggedContext)
  const { setPassword } = useContext(loggedContext)
  const { setEmail } = useContext(loggedContext);
  const { setAlert } = useContext(loggedContext);
  const passRef = useRef<any>();
  return (
    <View style={[styles.screen]}>
      <TextInput placeholder='email' keyboardType='email-address' inputMode='email' autoComplete='email' textContentType='emailAddress'
        onEndEditing={e => {
          let email = e.nativeEvent.text;
          let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          reg.test(email) ? (setEmail(email), setAlert(''), passRef.current?.focus()) : setAlert("Email format is incorrect");
        }}
        returnKeyType="next"
        style={[styles.input]}
      />
      <Text style={{ color: 'red', }}>{alertMsg}</Text>
      <TextInput placeholder='password' autoComplete='off' textContentType='password' secureTextEntry={true} ref={passRef} onEndEditing={pass => setPassword(pass.nativeEvent.text)} style={[styles.input]} />
      <Text></Text>
      <Button title='Log in' onPress={() => setlogged(true)} />
      <Text></Text>
      <Button title='Register' onPress={() => setlogged(true)} />
    </View>
  )
}