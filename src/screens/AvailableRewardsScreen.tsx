import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Text,
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchRewards} from '../api/rewardsApi';
import {setAvailableRewards, collectReward} from '../redux/rewardsSlice';
import {RootState} from '../redux/store';
import RewardItem from '../components/RewardItem';

const AvailableRewardsScreen = () => {
  const dispatch = useDispatch();
  const {availableRewards} = useSelector((state: RootState) => state.rewards);
  const [loading, setLoading] = useState(false);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [page, setPage] = useState(1);

  const loadRewards = async (page: number) => {
    setLoading(true);
    try {
      const rewards = await fetchRewards(page);
      console.log('Fetched data:', rewards);

      if (rewards) {
        setHasMoreData(rewards?.next !== null);
        dispatch(setAvailableRewards(rewards?.results));
      }
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRewards(page);
  }, [page]);

  const handleEndReached = () => {
    if (!loading && hasMoreData) {
      setPage(prevPage => prevPage + 1);
    }
  };
  const renderFooter = () => {
    if (!loading) return null;
    return (
      <View style={styles.footer}>
        <ActivityIndicator size="large" color="#fff" />
        <Text>Mehr laden...</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      {loading && <ActivityIndicator size="large" />}
      <FlatList
        data={availableRewards || []}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <RewardItem reward={item} />;
        }}
        onEndReached={() => handleEndReached()}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  footer: {
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default AvailableRewardsScreen;
