import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createContext, useContext, useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

const loggedContext = createContext({
  logged: false,
  setlogged: (status: boolean) => { },
  email: '',
  setEmail: (address: string) => { },
  password: '',
  setPassword: (pass: string) => { },
  alertMsg: '',
  setAlert: (alert: string) => { },

})

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>HOME</Text>
    </View>
  )
}
const Add = () => {
  return (
    <View style={styles.container}>
      <Text>Add</Text>
    </View>
  )
}
const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  )
}

const Login = () => {
  const { setlogged } = useContext(loggedContext)
  const { alertMsg } = useContext(loggedContext)
  const { setPassword } = useContext(loggedContext)
  const { setEmail } = useContext(loggedContext);
  const { setAlert } = useContext(loggedContext);
  return (
    <View style={[styles.container]}>
      <TextInput placeholder='email' keyboardType='email-address' inputMode='email' autoComplete='email' textContentType='emailAddress' style={{ borderColor: 'black', width: '80%', textAlign: 'center' }} onEndEditing={e => {
        let email = e.nativeEvent.text;
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        reg.test(email) ? (setEmail(email),setAlert('')): setAlert("Email format is incorrect");
      }} />
      <Text style={{color:'red',}}>{alertMsg}</Text>
      <TextInput placeholder='password' autoComplete='off' textContentType='password' secureTextEntry={true} style={{ borderColor: 'black', width: '80%', textAlign: 'center' }} onEndEditing={pass => setPassword(pass.nativeEvent.text)} />
      <Text></Text>
      <Button title='Log in' onPress={() => setlogged(true)} />
      <Text></Text>
      <Button title='Register' onPress={() => setlogged(true)} />
    </View>
  )
}

const TabNavigator = () => {
  const tabs = createBottomTabNavigator()
  const { logged } = useContext(loggedContext)
  return (
    <tabs.Navigator screenOptions={{ tabBarShowLabel: false }}>
      {logged ? <>
        < tabs.Screen name='Home' component={Home} options={{ headerShown: false, }} />
        < tabs.Screen name='Add' component={Add} options={{ headerShown: false }} />
        <tabs.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
      </>
        : <tabs.Screen name='login' component={Login} options={{ headerShown: false }} />}
    </tabs.Navigator >
  )
}

const AppNavigator = () => {
  const stack = createStackNavigator()
  const { logged } = useContext(loggedContext)
  const { setlogged } = useContext(loggedContext)
  return (
    <stack.Navigator>
      <stack.Screen name='main' component={TabNavigator} options={{
        headerRight: () => (
          logged && <Button
            onPress={() => setlogged(false)}
            title="log out" />
        ),
        headerTitle: "",
        headerLeft: () => (
          <Image source={{ uri: 'https://img.freepik.com/premium-vector/blue-cupons-icon-shopping-flat-style-icons-red-blue-colors_668389-982.jpg?w=996', }} />
        ),
      }} />
    </stack.Navigator>
  )
}

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
