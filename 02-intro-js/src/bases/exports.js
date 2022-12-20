import {heroes} from '../data/heroes'
console.log(heroes)

// const getHeroById = (id) => {
//     return heroes.find((hero) => 
//          hero.id === id
//     )
// }
export const getHeroById = (id) => heroes.find((hero) => 
         hero.id === id
    )


