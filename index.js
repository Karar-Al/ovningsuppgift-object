/**
 * ```
 * function stringEcho(str) {
 *   console.log(str + str)
 * }
 * stringEcho("hej")
 * ```
 * 
 * 1. Redigera koden för LÖ1 ovan så att
 *    1. stringEcho returnerar en array istället
 *    2. stringEcho tar emot en sträng s och ett heltal x och returnerar 
 *  en array med x element som alla är strängen s
 */
function stringEcho(s, x) {
  return Array(x).fill(s)
}
stringEcho("hej")

/**
 * ```
 * function soundLikeACat(times) {
 *   for(let i=0; i < times; i++)
 *     console.log("meow")
 * }
 * soundLikeACat(5)
 * ```
 * 2. Gör om LÖ2 ovan så att
 *     1. soundLikeACat skriver ut alla ljuden på en rad, med 
 *   mellanslag emellan: "meow meow"... 
 */
function soundLikeACat(times) {
  console.log(Array(times).fill("meow").join(' '))
}
soundLikeACat(5)

/**
 * ```
 * function soundLikeAnAnimal(sound, times) {
 *   for(let i=0; i < times; i++)
 *     console.log("meow")
 * }
 * soundLikeAnAnimal("bark", 3)
 * ```
 * 
 * 3. Gör om LÖ3 ovan så att
 *     1. fixa buggen!
 */
function soundLikeAnAnimal(sound, times) {
  for (let i = 0; i < times; i++)
    console.log(sound)
}
soundLikeAnAnimal("bark", 3)

/**
 * ```
 * let animals = ["dog", "cat", "zebra", "horse", "cow"]
 * animals.unshift("elephant")
 * if (animals.indexOf("pig") === -1)
 *   animals.push("pig")
 * else
 *   animals[animals.length - 1] = "pig";
 * console.log("My favourite animal is " + animals[0])
 * ```
 * 
 * 4. Gör om LÖ5 ovan så att
 *     1. det finns en "pig" i listan
 *     2. else-satsen byter plats på "pig" och det sista elementet i listan, 
 *   i stället för att ersätta det
 */
let animals = ["dog", "cat", "zebra", "pig", "horse", "cow"]
animals.unshift("elephant")
if (animals.indexOf("pig") === -1)
  animals.push("pig")
else
  let temp = animals[animals.indexOf("pig")]
animals[animals.indexOf("pig")] = animals[animals.length - 1]
animals[animals.length - 1] = temp
console.log("My favourite animal is " + animals[0])

const PIG = 0
const COW = 1
const DOG = 2
const CAT = 3
/**
 * ```
 * const PIG = 0
 * const COW = 1
 * const DOG = 2
 * function makeAnimals(animalId, numberOfAnimals) {
 *   let animals = []
 *   for (let i = 0; i < numberOfAnimals; i++) {
 *     switch (animalId) {
 *       case PIG:
 *         animals.push("pig")
 *         break
 *       case COW:
 *         animals.push("cow")
 *         break
 *       case DOG:
 *         animals.push("dog")
 *         break
 *       default:
 *         return ["Error!"]
 *     }
 *   }
 *   return animals
 * }
 * let arr = makeAnimals(DOG, 3)
 * console.log(arr)
 * ```
 * 
 * 5. Gör om LÖ7 ovan så att
 *     1. lägg till ett nytt djur
 */
function makeAnimals(animalId, numberOfAnimals) {
  let animals = []
  for (let i = 0; i < numberOfAnimals; i++) {
    switch (animalId) {
      case PIG:
        animals.push("pig")
        break
      case COW:
        animals.push("cow")
        break
      case DOG:
        animals.push("dog")
        break
      case CAT:
        animals.push("cat")
      default:
        return ["Error!"]
    }
  }
  return animals
}
let arr = makeAnimals(CAT, 3)
console.log(arr)

const METAL = 0
const WOOD = 1
const FIRE = 2
const DOOM = 3
const DAGGER = 4
const SWORD = 5
const FIRE_SWORD = 6
const WATER_DAGGER = 7
const TORCH = 8
const WATER_FIRE_DAGGER = 9
const ITEM_NAME = 0
const ITEM_COMPONENTS = 1
let items = [
  ["Metal", []],
  ["Wood", []],
  ["Fire", []],
  ["Doom", []],
  ["Dagger", [METAL, WOOD]],
  ["Sword", [DAGGER, METAL]],
  ["Flaming Sword", [SWORD, FIRE]],
  ["Dagger of Doom", [DAGGER, DOOM]],
  ["Torch", [FIRE, WOOD]],
  ["Flaming Dagger of Doom", [FIRE, DAGGER, DOOM]]
]
console.log("The " + items[SWORD][ITEM_NAME] + " is made of " + items[SWORD][ITEM_COMPONENTS])
/**
 * ```
 * const METAL = 0
 * const WOOD = 1
 * const FIRE = 2
 * const DOOM = 3
 * const DAGGER = 4
 * const SWORD = 5
 * const FIRE_SWORD = 6
 * const WATER_DAGGER = 7
 * const TORCH = 8
 * const ITEM_NAME = 0
 * const ITEM_COMPONENTS = 1
 * let items = [
 *   ["Metal", []],
 *   ["Wood", []],
 *   ["Fire", []],
 *   ["Doom", []],
 *   ["Dagger", [METAL, WOOD]],
 *   ["Sword", [DAGGER, METAL]],
 *   ["Flaming Sword", [SWORD, FIRE]],
 *   ["Dagger of Doom", [DAGGER, DOOM]],
 *   ["Torch", [FIRE, WOOD]]
 * ]
 * console.log("The " + items[SWORD][ITEM_NAME] + " is made of " + items[SWORD][ITEM_COMPONENTS])
 * ```
 * 
 * 6. Gör om LÖ11 ovan så att
 *     1. det finns en Flaming Dagger of Doom
 *     2. det finns en rekursiv funktion som tar emot ett items id som 
 *   heltal och returnerar en array med strängar på namnen på alla 
 *   items som behövs för att skapa det efterfrågade föremålet
 */
function recipeForItemId(itemId) {
  const recipeArr = items[itemId][ITEM_COMPONENTS]
  const recipeArrL = recipeArr.length

  // Can be done without for loop?
  for (let index = 0; index < recipeArrL; index++) {
    const itemId = recipeArr[index]
    res.push(recipeForItemId(itemId))
  }

  if (recipeArr.length === 0) {
    return items[itemId][0]
  } else {
    return res.flat() // I cheated.
  }
} // This can be done differently, and in an easier way.

recipeForItemId(9)
