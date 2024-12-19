import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {collectReward} from '../redux/rewardsSlice';
import {RootState} from '../redux/store';

interface RewardItemProps {
  reward: {
    id: string;
    name: string;
    neededPoints: number;
    image?: string;
  };
}

const RewardItem: React.FC<RewardItemProps> = ({reward}) => {
  const dispatch = useDispatch();
  const {collectedRewards} = useSelector((state: RootState) => state.rewards);

  const isCollected = collectedRewards.some(item => item.id === reward.id);

  // Handle the collect action
  const handleCollect = () => {
    if (!isCollected) {
      dispatch(collectReward(reward));
    }
  };
  const fallbackImage =
    'https://img.freepik.com/free-vector/realistic-gift-box-with-red-ribbon_52683-25700.jpg';
  const rewardImage = reward.image || fallbackImage;

  return (
    <View style={[styles.card, isCollected && styles.collected]}>
      <Image source={{uri: rewardImage}} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.name}>{reward.name}</Text>
        <Text style={styles.pointsText}>
          {reward.neededPoints > 0
            ? `${reward.neededPoints} Punkte benötigt`
            : 'Kostenlos'}
        </Text>

        {!isCollected && (
          <TouchableOpacity style={styles.button} onPress={handleCollect}>
            <Text style={styles.buttonText}>Sammeln</Text>
          </TouchableOpacity>
        )}

        {isCollected && <Text style={styles.collectedText}>Gesammelt</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    margin: 10,
    padding: 10,
    overflow: 'hidden',
    alignItems: 'center',
  },
  collected: {
    opacity: 0.6,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  pointsText: {
    fontSize: 14,
    color: '#ff9800',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  collectedText: {
    color: '#4CAF50',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default RewardItem;
