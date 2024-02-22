import { createStackNavigator } from "@react-navigation/stack"
import { useContext } from "react"
import { loggedContext } from "./Contexts"
import { Home } from "./screens/Home"
import { Add } from "./screens/AddCupon"
import { Profile } from "./screens/Profile"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Button } from "react-native"
import { Login } from "./screens/Login"

export const TabNavigator = () => {
    const tabs = createBottomTabNavigator()
    const { logged } = useContext(loggedContext)
    return (
      <tabs.Navigator screenOptions={{ tabBarShowLabel: false }}>
        < tabs.Screen name='Home' component={Home} options={{ headerShown: false, }} />
        < tabs.Screen name='Add' component={Add} options={{ headerShown: false }} />
        <tabs.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
      </tabs.Navigator >
    )
  }
  
export const AppNavigator = () => {
    const stack = createStackNavigator()
    const { logged } = useContext(loggedContext)
    const { setlogged } = useContext(loggedContext)
    return (
      <stack.Navigator>
        {logged ?
          <stack.Screen name='main' component={TabNavigator} options={{
            headerRight: () => (
              logged && <Button
                onPress={() => setlogged(false)}
                title="log out" />
            ),
            headerTitle: "My Cupons",
          }} />
          : <stack.Screen name='login' component={Login} options={{ headerShown: false }} />}
      </stack.Navigator>
    )
  }