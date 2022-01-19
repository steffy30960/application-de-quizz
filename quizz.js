var prenom =prompt("entrez votre votre prénom");
start();

// Évènement lorsque le formulaire est validé, la fonction validation() est déclenchée
document.querySelector('form').addEventListener('submit', validation);


// Fonction de RÉCUPÉRATION DU FICHIER JSON contenant le quiz
// également en “async” car elle utilise fetch() et “await”
async function getJson()
{
   // Récupère les données avec la fonction fetch()
   // Ici le fichier s'appelle data.json et il est situé à la racine "/" du dossier projet
   const data = await fetch("http://localhost:5500/quizz.json");
   return data.json(); // Retourne les données au format Json
}




// FONCTION PRINCIPALE DE L'APPLICATION
// Il faut la définir en “async” (asynchrone)
// car elle utilise fetch() (et “await” pour attendre une réponse)
async function start()
{
   // Récupère le tableau complet json
   allQuestions = await getJson();

   // Mélange le tableau
   shuffleArray(allQuestions);

   // Sélectionne les 3 premières questions du tableau
   allQuestions = allQuestions.slice(0, 3);
   
   

   // *** AFFICHAGE DES QUESTIONS ET PROPOSITIONS ***
   // Boucle parcourant les 3 questions (avec la fonction ForEach)
   for(let qIndex = 0; qIndex < allQuestions.length; qIndex++)
   {
      var question = allQuestions[qIndex]; // Contient les infos de la question en cours de boucle

      // * QUESTION *
      // Récupère l'élément <h2> contenu dans la <div id="question0"> par exemple ('#question0 h2')
      var h2 = document.querySelector('#question' + qIndex + ' h2')
      // Affichage de la question
      h2.innerText = question.question;


      // * PROPOSITIONS *
      var propositions = question.propositions; // Contient les 4 propositions de la question
      // Récupère les 4 éléments <label> contenu dans la <div id="question0"> par exemple
      var input = document.querySelectorAll('#question' + qIndex + ' input'); // SelectorAll des <input> ('#question0 input')
      var label = document.querySelectorAll('#question' + qIndex + ' label'); // SelectorAll des <label> ('#question0 label')

      // Une boucle pour parcourir les 3 propositions
      for(let pIndex = 0; pIndex < propositions.length; pIndex++)
      {
         // Affichage de la proposition dans son <label>
         label[pIndex].innerText = propositions[pIndex];
         input[pIndex].setAttribute("value", propositions[pIndex]); // Définit la value de l'<input> s'il est choisi
         input[pIndex].setAttribute("id", propositions[pIndex]); // L'id de l'<input> pour le relier au texte de son <label>
         label[pIndex].setAttribute("for", propositions[pIndex]); // Le for du <label> pour le relier à sa case <input>
      }

   }
}


// VALIDATION DU QUIZ
function validation(event) {
   event.preventDefault(); // Bloque le rafraichissement de la page

   var score = 0; // Créé la variable du score


   // Compte le score en parcourant les 3 questions
   for(let qIndex = 0; qIndex < allQuestions.length; qIndex++)
   {
      // Récupère l imput ( dans html)  de la réponse choisie 
      inputChecked = document.querySelector('input[name=question' + qIndex + ']:checked');

      // Si la réponse n'est pas vide
      if (inputChecked) {
         var anwser = inputChecked.value; // Réponse choisie
         var goodAnswer = allQuestions[qIndex].reponse; // Bonne réponse
         var anecdote =  allQuestions[qIndex].anecdote; // je recupere les anecdotes
         var h3 = document.querySelector('#question' + qIndex + ' h3'); // je recupere mon h3 dans  le HTML
     
         // Si la réponse est bonne
         if (anwser == goodAnswer) {
            score++; // +1
         //affichage bonne réponse en vert
            inputChecked.parentNode.classList.add("valid")//parenNode permet de selectionner le parent de l'imput (ici div answers ds html)
           h3.innerText = anecdote; // affichage de l'anecdote
         // sinon affichage réponse en rouge
            }else{ 
            inputChecked.parentNode.classList.add("invalid")
         }

      }

   }
   
   // Affiche le score
   document.getElementById('score').innerText = 'VOTRE SCORE : ' + score + ' /3';
   localStorage.setItem(prenom, score);

}


// Fonction de MÉLANGE ALÉATOIRE d’un tableau
function shuffleArray(array) {
   return array.sort(() => 0.5 - Math.random());
}

















