import React, { useEffect } from 'react'
import Screen from '../components/Screen'
import { FlatList, StyleSheet } from 'react-native'
import Card from '../components/Card';
import colors from '../config/colors';
import routes from '../navigation/routes';
import listingApi from '../api/listing';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import ActivityIndicator from '../components/ActivityIndicator';
import useApi from '../hooks/useApi';

const ListingsScreen = ({ navigation }) => {
  const getListingsApi = useApi(listingApi.getListings);

  useEffect(() => {
    getListingsApi.request();
  },[])

  
  return (
    <Screen style={styles.screen}>
      {getListingsApi.error && <>
        <AppText>Couldn't retrieve the listing</AppText>
        <AppButton title="Retry" onPress={getListingsApi.request} />
      </>}
      <ActivityIndicator visible={getListingsApi.loading}/>
      <FlatList
        data = {getListingsApi.data}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({item}) => 
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        }
       />
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light
  }
})

export default ListingsScreen
