import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from './app/navigation/navigationTheme';
import OfflineNotice from './app/components/OfflineNotice';
import AuthNavigator from './app/navigation/AuthNavigator';
import AuthContext from './app/auth/context';
import AppNavigator from './app/navigation/AppNavigator';
import authStorage from './app/auth/storage';
import jwtDecode from 'jwt-decode';

export default function App() {
  const [ user, setUser ] = useState();

  const resotreToken = async () => {
    const token = await authStorage.getToken();
    if(!token) return;
    setUser(jwtDecode(token));
  }

  useEffect(() => {
    resotreToken();
  },[]);

  return (
   <AuthContext.Provider value={{user, setUser}}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator/>}
      </NavigationContainer>
   </AuthContext.Provider>
  )
}

