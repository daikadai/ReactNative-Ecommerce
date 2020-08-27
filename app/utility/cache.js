import { AsyncStorage } from "react-native";
import moment from "moment";

const prefix = 'cache';
const expiryInMinutes = 5;

const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Data.now()
    }
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item))
  } catch (error) {
    console.log(error);
  }
}

const isExpired = (item) => {
  const now = moment(Data.now());
  const storeTime = moment(item.timestamp);
  return now.diff(storeTime, 'minutes') > expiryInMinutes;
}

const get = async (key) => {
  try {
    const value = await AsyncStorage.get(prefix + key);
    const item = JSON.parse(value);

    if(!item) return null;

    if(isExpired(item)) {
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }

    return item.value;
  } catch (error) {
    console.log(error);
  }
} 

export default {
  store,
  get
}