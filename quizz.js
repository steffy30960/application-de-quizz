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
    var array=[];// fonction principale//
start();
async function start()
{
   // Récupère le tableau json
    const data = await getJson(); 
   //je stocke les valeurs dans mon tableau//
    //array=data;
    array.push(...data);
   
  
   // Mélange le tableau json
    shuffleArray(array);

return (array);
}
//fonction affiche nouvelles questions a chaque page
window.addEventListener("load", async function () {
    await start();
  
    createAnswers(array);
  });

  const createAnswers = (selectquestions) => {
 // melange et selectionne mes 3questions
  for( i= 0;i < 3; i++){
      console.log(selectquestions[i].question);
      console.log(selectquestions[i].propositions);
      console.log(selectquestions[i].anecdote);


         // *** AFFICHAGE DES QUESTIONS ET PROPOSITIONS ***
         // Boucle parcourant les 3 questions (avec la fonction ForEach)
         selectquestions.forEach((question, indexQuestion) =>
         {
            // * QUESTION *
            indexQuestion++; // +1 car foreach commence à 0 alors que nos id des <h2> commencent à 1
            var affichequestion = question.question;
            // Affichage de la question
            document.getElementById('question' + indexQuestion).innerText = affichequestion;
            
      
            // * PROPOSITIONS *
            var propositions = question.proposition;
      
            // Une autre boucle parcourant les 4 propositions
            propositions.forEach((proposition, indexProposition) =>
            {
               indexProposition++; // encore +1 pour les id des <label> (proposition1-1, proposition3-2...)
      
               // Ecriture de l'id de l'élément où afficher la proposition (proposition1-1, proposition3-2...)
               var id = 'label' + indexQuestion + '-' + indexProposition;
               // Affichage de la proposition
               document.getElementById(id).innerText = proposition;
            })
      
         })
      
      }
      
  


    }


function valider() {
    var r1=document.getElementById("propositionn1").value;
    console.log(r1);
}

//submitbtn.addEventListener("click",submit)mettre id submit dans html sur button
// if answer is correct
//if(userAnswer===questions[i].reponse){
    // add to the number of correct answers
//numCorrect++;
    
    // color the answers green
   // answerContainers[i].style.color = 'lightgreen';
//}
// if answer is wrong or blank
//else{
    // color the answers red
    //answerContainers[i].style.color = 'red';
//}
//}
  
