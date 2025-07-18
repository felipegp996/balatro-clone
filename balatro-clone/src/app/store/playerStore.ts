import {create} from 'zustand'

export interface PlayerState {
  handSize: number;
  discards: number;
  hands: number;
  money: number;
}

const initialPlayerState: PlayerState = {
  handSize: 8,
  discards: 3,
  hands: 3,
  money: 0,
}

interface PlayerStore {
  player: PlayerState;
  updateDiscards: () => void;
  updateHands: () => void;
  updateMoney: (amount: number) => void;
  resetHandsAndDiscards: () => void;
}

const usePlayerStore = create<PlayerStore>((set) => ({
  player: initialPlayerState,
  updateDiscards: () => set((state) => ({
    player: {
      ...state.player,
      discards: state.player.discards - 1
    }
  })),
  updateHands: () => set((state) => ({
    player: {
      ...state.player,
      hands: state.player.hands - 1
    }
  })),
  updateMoney: (amount: number) => set((state) => ({
    player: {
      ...state.player,
      money: state.player.money + amount
    }
  })),
  resetHandsAndDiscards: () => set((state) => ({
    player: {
      ...state.player,
      discards: initialPlayerState.discards,
      hands: initialPlayerState.hands
    }
  }))
}));
export default usePlayerStore