type InventoryItem = {
    id: string;
    name: string;
    description: string;
    value: number
}

type Armor extends InventoryItem = {
    id: string;
    name: string;
    description: string;
    value: number,
    defense: string
    
}

type Weapeon extends InventoryItem = {
    id: string;
    name: string;
    description: string;
    value: number,
    damage: string
}

