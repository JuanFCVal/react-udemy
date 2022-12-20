import { getHeroById } from "./bases/exports";

// const promise = new Promise(
//     (resolve, reject) => {
//         setTimeout(() => {
//             const hero = getHeroById(1);
//             if(hero){
//                 resolve(hero)
//             }
//             if(!hero){
//                 reject(false)
//             }
//         }, 1000);
//     }
// );

// promise.then(
//     (res) => {
//         console.log(res)
//         console.log('Heroe');
//     }
// ).catch(err => console.log("Error"))

const getHeroByIDAsync = (id) => {
    return new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroById(id);
            if(hero){
                resolve(hero)
            }
            if(!hero){
                reject(false)
            }
        }, 1000);
    }
);
}

// getHeroByIDAsync(1).then(
//     (hero) => console.log
// ).catch(
//     (err) => {
//         console.log(err)
//     }
// )
//Do the same that last method but print by reference
getHeroByIDAsync(1).then(
    console.log
).catch(
    console.log
)