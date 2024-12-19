import React from 'react';
import {
  View,
  FlatList,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import RewardItem from '../components/RewardItem';

const CollectedRewardsScreen = () => {
  const {collectedRewards} = useSelector((state: RootState) => state.rewards);

  return (
    <SafeAreaView style={{flex: 1}}>
      {collectedRewards.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Image
            source={{
              uri: 'https://media.giphy.com/media/3o7btXgplPZZpJbPoc/giphy.gif',
            }}
            style={styles.emptyImage}
          />
          <Text style={styles.emptyText}>
            Keine gesammelten Belohnungen verfügbar
          </Text>
        </View>
      ) : (
        <FlatList
          data={collectedRewards}
          keyExtractor={item => item.id}
          renderItem={({item}) => <RewardItem reward={item} />}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyImage: {
    width: 200,
    height: 150,
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
  },
});

export default CollectedRewardsScreen;
