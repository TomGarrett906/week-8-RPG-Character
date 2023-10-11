import { Attack, CollectGold, Defend } from './interface'
import Character from './character'

export default class Knight extends Character implements Attack, Defend, CollectGold{
    attack() {
        console.log('Attacks with a sword')
    }

    defend() {
        console.log('Defends with armor')
    }
}