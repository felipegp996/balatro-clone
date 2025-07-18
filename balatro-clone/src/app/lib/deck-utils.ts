export const Modifier = {
  NONE: 0,
  MULT: 1,
  CHIPS: 2,
  LUCKY: 3,
  GLASS: 4,
  GOLD: 5,
  STEEL: 6,
  WILD: 7,
} as const;
export type Modifier = typeof Modifier[keyof typeof Modifier];

export const Suit = {
  HEARTS: 'hearts',
  DIAMONDS: 'diamonds',
  CLUBS: 'clubs',
  SPADES: 'spades',
  STONE: 'stone',
} as const;
export type Suit = typeof Suit[keyof typeof Suit];

export interface Card {
  value: string;
  suit?: Suit;
  chipValue: number;
  isFaceUp: boolean;
  modifier?: Modifier;
}

export function createDefaultDeck(): Card[] {
  const cardValues = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
  const cardSuits = [Suit.HEARTS, Suit.DIAMONDS, Suit.CLUBS, Suit.SPADES]

  const deck: Card[] = []
  
  for (const suit of cardSuits) {
    for (const value of cardValues) {
      deck.push({
        value,
        suit: suit,
        chipValue: 0, // Default chip value, can be modified later
        isFaceUp: false, // Cards are face down by default
        modifier: Modifier.NONE // Default modifier, can be changed later
      })
    }
  }
  return deck
}

export function creteRandomDeck(): Card[] {
  return []
}