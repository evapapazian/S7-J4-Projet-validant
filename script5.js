const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 0 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("Est-ce que tous les livres ont été empruntés au moins une fois ?")
for (let index in books) {

if (books[index].rented > 0){
console.log(books[index].title)
console.log("Ce livre a déjà été emprunté au moins une fois")}

else {
  console.log(books[index].title)
  console.log("Ce livre n'a pas été emprunté")}

}



console.log("Quel est le livre le plus emprunté?")

/* On trie par emprunt */

function tri(a,b)
{
if (a.rented < b.rented) return -1; // si a<b il sera mis une position en dessous
else if (a.rented == b.rented) return 0; // si a == b il sera laissé à la position
else return 1; // si a>b il sera mis 1 position au dessus
}  console.log(books.sort(tri))



console.log("Trouve le livre avec l'ID 873495 ")

for(let index in books) { /* On parcout l'array */

  if (books[index].id == 873495)
  {
    console.log(books[index].title)

}
}

console.log("Supprime le livre avec l' ID 133712 ") 

for(let index in books){
  if (books[index].id == 133712){
  books.splice(index, 1); }

  console.log(books[index])
}



console.log("Trie les livres par ordre alphabétique")

function tri(a,b)
{
if (a.title < b.title) return -1; // si a<b il sera mis une position en dessous
else if (a.title == b.title) return 0; // si a == b il sera laissé à la position
else return 1; // si a>b il sera mis 1 position au dessus
}  console.log(books.sort(tri))