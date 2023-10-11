// character.ts
import { Attack, Defend, CollectGold } from './interface'

export default abstract class Character implements Attack, Defend, CollectGold {
    constructor(_attack: string) {
    }

    abstract attack(): void
    abstract defend(): void

    collectGold() {
        console.log('Collects gold')
    }
}