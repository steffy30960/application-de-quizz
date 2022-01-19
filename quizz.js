
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
      // Récupère la valeur de la réponse choisie parmi les 3 <input> de la question
      inputChecked = document.querySelector('input[name=question' + qIndex + ']:checked');

      // Si la réponse n'est pas vide
      if (inputChecked) {
         var anwser = inputChecked.value; // Réponse choisie
         var goodAnswer = allQuestions[qIndex].reponse; // Bonne réponse
        

         // Si la réponse est bonne
         if (anwser == goodAnswer) {
            score++; // +1 



           // var anecdote = allquestions[qIndex].anecdote; // mes anecdotes
           //affiche l anecdote qd reponse bonne 
            //document.getElementById('anecdote').innerHTML = anecdote


            
         //var goodAnswer = document.getElementById('reponse').value;
         //submitbutton.addEventListener("click",submit)  
         //if( goodAnswer.checked){

           // input[pIndex]. anecdocte[pIndex];
         //document.getElementById("answers").style.color="green";
         //} else {

           // document.getElementById('answers').style.color="red";
         //}

      
         }

      }

   }
   
   // Affiche le score
   document.getElementById('score').innerText = 'VOTRE SCORE : ' + score + ' /3';


}  





//submitbutton.addEventListener("click",submit)     //mettre id submit dans html sur button
// if answer is correct
//if(answer=== goodAnswer){
    // add to the number of correct answers
//numCorrect++;
    // color the answers green
  
    //answer.style.color = 'lightgreen';
//}
// if answer is wrong or blank
//else{
    // color the answers red
   // document.getElementById("answers") .style.color = 'red';
    //answer.style.color = 'red';




// Fonction de MÉLANGE ALÉATOIRE d’un tableau
function shuffleArray(array) {
   return array.sort(() => 0.5 - Math.random());
}
