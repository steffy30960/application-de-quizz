// fonction principale//
start();
async function start()
{
   const data = await getJson(); // Récupère le tableau json
   // Affiche pour tester les question dans la console
console.log(data)
}
//je crée une fonction pour recuperer mon fichier json qui contient le quizz//
async function getJson()
{
    // Récupère les données avec la fonction fetch()
    // Ici le fichier s'appelle quiz.json et il est situé à la racine "/" du dossier projet
    const data = await fetch("http://localhost:5500//quizz.json");
    return data.json(); // Retourne les données au format Json
}
// Fonction de MÉLANGE ALÉATOIRE d’un tableau
function shuffleArray(array) {
    return array.sort(() => 0.5 - Math.random());
}

//je cree un tableau vide afin de pouvoir inserer les donées de mon json  par la suite //
var array =[]
//je stocke les valeurs dans mon tableau//

