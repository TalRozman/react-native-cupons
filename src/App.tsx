import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import { AppNavigator } from './Navigators';
import { loggedContext } from "./Contexts"

const App = () => {
  const [logged, setlogged] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [alertMsg, setAlert] = useState('')

  return (
    <loggedContext.Provider value={{ logged, setlogged, email, setEmail, password, setPassword, alertMsg, setAlert }}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </loggedContext.Provider>
  );
}

export default App