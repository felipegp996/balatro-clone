import {create} from 'zustand';

export interface GameState {
  round: number;
  ante: number;
  minimalScore: number;
  currentBlind: 'small' | 'big' | 'boss';
}

const initialGameState: GameState = {
  round: 1,
  ante: 0,
  minimalScore: 300,
  currentBlind: 'small',
};

interface GameStore {
  gameState: GameState;
  updateAnte: (amount: number) => void;
  updateMinimalScore: (amount: number) => void;
  nextRound: () => void;
  setCurrentBlind: (blind: 'small' | 'big' | 'boss') => void;
}

const useGameStore = create<GameStore>((set) => ({
  gameState: initialGameState,
  updateAnte: (amount: number) => set((state) => ({
    gameState: {
      ...state.gameState,
      ante: state.gameState.ante + amount
    }
  })),
  updateMinimalScore: (amount: number) => set((state) => ({
    gameState: { ...state.gameState , minimalScore: state.gameState.minimalScore + amount }
  })),
  nextRound: () => set((state) => ({
    gameState: {
      ...state.gameState,
      round: state.gameState.round + 1,
      ante: 0, // Reset ante for the next round
      minimalScore: initialGameState.minimalScore // Reset round score for the next round
    }
  })),
  setCurrentBlind: (blind: 'small' | 'big' | 'boss') => set((state) => ({
    gameState: {
      ...state.gameState,
      currentBlind: blind
    }
  }))
}))

export default useGameStore