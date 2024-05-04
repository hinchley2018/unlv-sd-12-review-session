import { MenuItem } from "../interfaces/MenuItem"

export function getMenuItems(): Promise<Array<MenuItem>> {
    const menuItems: Array<MenuItem> = [
        {title: 'Pizza', description: 'Margirita pizza from our stone oven, made with fresh tomato sauce mozerella cheese and basil', price: 3.99, allergens: ["gluten", "dairy", "tomato sauce"]},
        {title: 'Peporoni Calzone', description: 'Garlic crusted calzone from our stone oven, made with fresh tomato sauce mozerella cheese and basil', price: 6.99, allergens: ["gluten", "dairy", "tomato sauce", "garlic"]}
      ]
      //fake the fetch
    return new Promise(() => {return menuItems})
}