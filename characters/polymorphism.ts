import { Attack, Defend, CollectGold } from './interface'
import Character from './character'
import Ogre from './ogres'
import Peon from './peons'
import Knight from './knights'
import Archer from './archers'

const characters: Character[] = []

const ogre = new Ogre('')
const knight = new Knight('')
const peon = new Peon('')
const archer = new Archer('')

characters.push(ogre, knight, peon, archer)



// testing
ogre.attack() 
ogre.defend() 
ogre.collectGold()
console.log()

peon.attack() 
peon.defend() 
peon.collectGold()
console.log() 

knight.attack() 
knight.defend() 
knight.collectGold()
console.log() 

archer.attack() 
archer.defend() 
archer.collectGold()
console.log() 