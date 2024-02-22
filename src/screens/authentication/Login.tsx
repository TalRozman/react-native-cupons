import { useContext, useRef } from "react";
import { styles } from "../../style";
import { Button, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { loggedContext } from "../../Contexts";
import { createStackNavigator } from "@react-navigation/stack";
import { checkMail, checkPass } from "./functions";
import { Register } from "./Register";

export const LoginLayout = () => {
  const { registerPressed } = useContext(loggedContext)
  return (
    <stack.Navigator>
      {!registerPressed ?
        <stack.Screen component={Login} name="loginScreen" options={{ headerShown: false, }} />
        :
        <stack.Screen component={Register} name="register" options={{ headerShown: false, }} />
      }
    </stack.Navigator>
  )
}

const stack = createStackNavigator()

const Login = () => {
  const { setlogged } = useContext(loggedContext);
  const { setPassword } = useContext(loggedContext);
  const { setEmail } = useContext(loggedContext);
  const { emailAlertMsg } = useContext(loggedContext);
  const { setEmailAlertMsg } = useContext(loggedContext);
  const { setRegisterPressed } = useContext(loggedContext);
  const { passwordAlertMsg } = useContext(loggedContext);
  const { setPasswordAlertMsg } = useContext(loggedContext);
  const passRef = useRef<any>();

  return (
    <View style={[styles.screen]}>
      <TextInput
        placeholder='email'
        keyboardType='email-address'
        inputMode='email'
        autoComplete='email'
        textContentType='emailAddress'
        onEndEditing={e => {
          checkMail(e.nativeEvent.text) ?
            (setEmail(e.nativeEvent.text), setEmailAlertMsg(''), passRef.current?.focus())
            : setEmailAlertMsg("Email format is incorrect");
        }}
        returnKeyType="next"
        style={[styles.input]}
      />
      <Text style={{ color: 'red', }}>{emailAlertMsg}</Text>
      <TextInput
        placeholder='password'
        autoComplete='off'
        textContentType='password'
        secureTextEntry={true}
        ref={passRef}
        onEndEditing={pass => setPassword(pass.nativeEvent.text)}
        style={[styles.input]} />
      <Text style={{ color: 'red', }}>{passwordAlertMsg}</Text>
      <Button
        title='Log in'
        onPress={() => setlogged(true)} />
      <Text />
      <Button
        title='Register'
        onPress={() => { (setRegisterPressed(true), setEmailAlertMsg(''), setPasswordAlertMsg('')) }} />
    </View>
  )
}