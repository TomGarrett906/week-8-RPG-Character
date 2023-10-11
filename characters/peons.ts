import { Attack, CollectGold, Defend } from './interface'
import Character from './character'

export default class Peon extends Character implements Attack, Defend, CollectGold{
    attack() {
        console.log('Attacks with a club')
    }

    defend() {
        console.log('Defends with a shield')
    }
}