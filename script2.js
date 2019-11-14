function factoriel()

	{
	let number = prompt("De quel nombre veux-tu calculer la factorielle ?");
	let x = 1 // on initialise à 1  parce que factoriel 0 = 1

	var a = 1 ;
	while (a < number) {
	a = a + 1
	x = x * a
	
	
	
		}
		console.log(`La factorielle de ton nombre est ${x}`);
}

factoriel()