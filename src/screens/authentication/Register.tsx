import { useContext, useRef } from "react";
import { loggedContext } from "../../Contexts";
import { Button, Text, View } from "react-native";
import { styles } from "../../style";
import { TextInput } from "react-native-gesture-handler";
import { checkMail, checkPass } from "./functions";

export const Register = () => {
  const { setlogged } = useContext(loggedContext);
  const { emailAlertMsg } = useContext(loggedContext);
  const { passwordAlertMsg } = useContext(loggedContext);
  const { setPassword } = useContext(loggedContext);
  const { setEmail } = useContext(loggedContext);
  const { setEmailAlertMsg } = useContext(loggedContext);
  const { setPasswordAlertMsg } = useContext(loggedContext);
  const { setRegisterPressed } = useContext(loggedContext);
  const { setfName } = useContext(loggedContext);
  const { setlName } = useContext(loggedContext);
  const passRef = useRef<any>();
  const lNameRef = useRef<any>();
  const emailRef = useRef<any>();

  return (
    <View style={[styles.screen]}>
      <TextInput placeholder="First Name" textContentType="givenName" style={[styles.input]}
        onEndEditing={e => { setfName(e.nativeEvent.text), lNameRef.current?.focus() }} />
      <Text />
      <TextInput placeholder="Last Name" textContentType="familyName" style={[styles.input]} ref={lNameRef}
        onEndEditing={e => { setlName(e.nativeEvent.text), emailRef.current?.focus() }} />
      <Text />
      <TextInput placeholder='email' keyboardType='email-address' inputMode='email' autoComplete='email' textContentType='emailAddress'
        onEndEditing={e => {
          checkMail(e.nativeEvent.text) ? (setEmail(e.nativeEvent.text), setEmailAlertMsg(''), passRef.current?.focus()) : setEmailAlertMsg("Email format is incorrect");
        }}
        returnKeyType="next"
        style={[styles.input]}
        ref={emailRef}
      />
      <Text style={{ color: 'red', }}>{emailAlertMsg}</Text>
      <TextInput placeholder='password' autoComplete='off' textContentType='password' secureTextEntry={true} ref={passRef}
        onEndEditing={pass => {
          let msg = checkPass(pass.nativeEvent.text)
          msg === 'OK' ? (setPassword(pass.nativeEvent.text), setPasswordAlertMsg('')) : setPasswordAlertMsg(msg)
        }}
        style={[styles.input]} />
      <Text style={{ color: 'red', }}>{passwordAlertMsg}</Text>
      <Button title='Register' onPress={() => setlogged(true)} />
      <Text />
      <Button title='Back to log in screen' onPress={() => { (setRegisterPressed(false), setEmailAlertMsg(''), setPasswordAlertMsg('')) }} />
    </View>
  )
}