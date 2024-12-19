import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Reward {
  id: string;
  name: string;
  neededPoints: number;
  image?: string;  
  }

interface RewardsState {
  availableRewards: Reward[];
  collectedRewards: Reward[];
}

const initialState: RewardsState = {
  availableRewards: [],
  collectedRewards: [],
};

const rewardsSlice = createSlice({
  name: "rewards",
  initialState,
  reducers: {
    setAvailableRewards(state, action: PayloadAction<Reward[]>) {
      const newRewards = action.payload.filter(
        (reward) => !state.availableRewards.some((r) => r.id === reward.id)
      );
      state.availableRewards = [...state.availableRewards, ...newRewards];
    },
    collectReward(state, action: PayloadAction<Reward>) {
      const alreadyCollected = state.collectedRewards.some(
        (reward) => reward.id === action.payload.id
      );

      if (!alreadyCollected) {
        state.collectedRewards.push(action.payload);
      }
      
    },
  },
});

export const { setAvailableRewards, collectReward } = rewardsSlice.actions;
export default rewardsSlice.reducer;
