let lastPlayCardId = 0

const numberedCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10']
const faceCards = ['jack', 'queen', 'king']
// we use this to sort and identify straights
const cardRanks = [...numberedCards, ...faceCards, 'ace']

export class PlayCard {
  name: string
  uid: number
  suit: string
  constructor(name: string, suit: string) {
    lastPlayCardId++
    this.uid = lastPlayCardId
    this.name = name
    this.suit = suit
  }

  isFace() {
    return faceCards.includes(this.name)
  }

  isNumbered() {
    return numberedCards.includes(this.name)
  }

  getRank() {
    return cardRanks.indexOf(this.name)
  }

  points() {
    if (this.isNumbered()) {
      return Number(this.name)
    }
    return 10
  }
}