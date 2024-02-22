import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import { AppNavigator } from './Navigators';
import { loggedContext } from "./Contexts"

const App = () => {
  const [logged, setlogged] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailAlertMsg, setEmailAlertMsg] = useState('')
  const [registerPressed, setRegisterPressed] = useState(false)
  const [passwordAlertMsg, setPasswordAlertMsg] = useState('')
  const [fName, setfName] = useState('')
  const [lName, setlName] = useState('')

  return (
    <loggedContext.Provider value={{ logged, setlogged, email, setEmail, password, setPassword, emailAlertMsg, setEmailAlertMsg, registerPressed, setRegisterPressed, passwordAlertMsg, setPasswordAlertMsg, fName, setfName, lName, setlName }}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </loggedContext.Provider>
  );
}

export default App