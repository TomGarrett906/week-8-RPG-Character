// archers.ts
import { Attack, CollectGold, Defend } from './interface'
import Character from './character'

export default class Archer extends Character implements Attack, Defend, CollectGold{

    attack() {
        console.log('Attacks with a bow and arrow')
    }

    defend() {
        console.log('Defends with a tunic')
    }
}