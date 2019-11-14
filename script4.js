 const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];




console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70:");

for(let index in entrepreneurs) { /* On parcout l'array */

  if (entrepreneurs[index].year > 1969 && entrepreneurs[index].year < 1980) /* Si l'entrep est né entre 69 et 80, on affiche nom/prénom/date de naissance */
  {
    console.log(entrepreneurs[index].last);
    console.log(entrepreneurs[index].first);

    console.log(entrepreneurs[index].year);

}
}

console.log("Sors un array qui contient le prénom et le nom des entrepreneurs");


for (let index in entrepreneurs) {

console.log(entrepreneurs[index].first + " " + entrepreneurs[index].last) }

 
console.log("Quel âge aurait chaque inventeur aujourd'hui ?");

for (let index in entrepreneurs) {
console.log(`${entrepreneurs[index].last} aurait ${2020 - entrepreneurs[index].year} ans aujourd'hui`)

}

console.log("Trie les entrepreneurs par ordre alphabétique de nom de famille")

function tri(a,b)
{
if (a.last < b.last) return -1; // si a<b il sera mis une position en dessous
else if (a.last == b.last) return 0; // si a == b il sera laissé à la position
else return 1; // si a>b il sera mis 1 position au dessus
}  console.log(entrepreneurs.sort(tri))

// donc il prend la ligne 1 et la compare à la ligne 2, puis la 2 à la 3, et en fonction il monte la ligne ( return 1) si le nom est avant dans l'ordre alphabétique, autrement il reste à la même place (0) ou descend (-1)
