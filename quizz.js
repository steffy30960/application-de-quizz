
 //je cree un tableau vide afin de pouvoir inserer les donées de mon json  par la suite //
    var array=[];// fonction principale//
start();
async function start()
{
   // Récupère le tableau json
    const data = await getJson(); 
   //je stocke les valeurs dans mon tableau//
    array=data;
   // Affiche pour tester les question dans la console 
   // Mélange le tableau json
    shuffleArray(array);
    console.log(shuffleArray(array));
    // je stocke dans un tableau les 3 premières questions de mon tableau aléatoire//
    var selectedQuestions = [];
    //je parcours les 3 premieres valeurs du tablea aléatoire//
    for (let i = 0; i < 3; i++) {
        //je mets mes 3 questions dans mon nouveau tableau//
        selectedQuestions.push(array[i]); 
    }
    console.log(selectedQuestions);
    //j'affiche ma premiere question //
    const q1 = document.getElementById("question1");
    q1.innerHTML='<p>'+selectedQuestions[0].question+'</p>' 
// j'affiche la deuxieme question//
    const q2 = document.getElementById("question2");

    q2.innerHTML='<p>'+selectedQuestions[1].question+'</p>' ;

    //j'affiche la troisieme question//
    const q3 = document.getElementById("question3");

    q3.innerHTML='<p>'+selectedQuestions[2].question+'</p>' ;

     // j affiche mes reponses question 1//
    const p1 = document.getElementById("propositionn1");
    const p2 = document.getElementById("propositionn2");
    const p3 = document.getElementById("propositionn3");
    const p4 = document.getElementById("propositionn4");
    
    p1.innerHTML = '<input type="radio" id="propositionn1" name="question1"><label for="propositionn1">'+selectedQuestions[0].propositions[0]+'</label>';         
    document.getElementById('question1').appendChild(p1);  

    p2.innerHTML = '<input type="radio" id="propositionn2" name="question1"><label for="propositionn2">'+selectedQuestions[0].propositions[1]+'</label>';               
    document.getElementById('question1').appendChild(p2); 

    p3.innerHTML = '<input type="radio" id="propositionn3" name="question1"><label for="propositionn3">'+selectedQuestions[0].propositions[2]+'</label>';       
    document.getElementById('question1').appendChild(p3); 

    p4.innerHTML = '<input type="radio" id="propositionn4" name="question1"><label for="propositionn4">'+selectedQuestions[0].propositions[3]+'</label>';       
    document.getElementById('question1').appendChild(p4);  

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


function valider() {
    var r1=document.getElementById("propositionn1").value;
    console.log(r1);
}
