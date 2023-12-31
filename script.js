/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokite ES6), kuri sukuria objektus 3 savybėm ir 1 metodu. Tuomet, atspausdinkite du filmus,
kurių vienas duotų false, kitas true ir atspausdintų atitinkamus variantus. Pvz., 
"Avengers: Endgame" biudžetas viršyjo 100 mln. USD
"Mr. Nobody" biudžetas neviršyjo 100 mln. USD

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kitu atveju false 
------------------------------------------------------------------------------------------------------*/

class Movie {
    constructor(title, director, budget){
        this.title = title
        this.director = director
        this.budget = budget    
    }
    wasExpensive() {
        return this.budget > 100000000
    }
}
const Movie1 = new Movie("Avengers: Endgame", "Anthony Russo, Joe Russo", 356000000)
const Movie2 = new Movie("Mr. Nobody", "Jaco Van Dormael", 35000000)

console.log(`${Movie1.title}: biudžetas ${Movie1.wasExpensive() ? "viršijo" : "neviršijo"} 100 mln. USD`)
console.log(`${Movie2.title}: biudžetas ${Movie2.wasExpensive() ? "viršijo" : "neviršijo"} 100 mln. USD`)
