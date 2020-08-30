import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions'
import { useEffect } from 'react';
import expoPushTokenApi from '../api/expoPushToken';
export default useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotification();

    if(notificationListener)
    Notifications.addListener(notificationListener);
   },[])

  const registerForPushNotification = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if(!permission.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokenApi.register(token);
    } catch (error) {
      console.log('Error getting a push token', error);
    }
  }
}