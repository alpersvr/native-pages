import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import UserStack from './UserStack'

const isAuth = false

const RootNavigation = () => {
  return (
    <NavigationContainer>
      
        {
          !isAuth 
             ? <AuthStack/> 
             : <UserStack/>
        }


    </NavigationContainer>
  )
}

export default RootNavigation
