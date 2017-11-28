        /**
                                      * Exercices sur les variables et les fonctions
        **/

        // ----
        // Ecrire une fonction 'hello' qui affiche dans la console "Hello World!"

        function hello() {
          // write your code HERE
          console.log("Hello World!");
        }
        hello();

        // ----
        // écrire des fonctions suivante:
        // addition(a, b)
        // soustraction(a, b)
        // multiplication(a, b)
        // division(a, b)
        // concatenation(str1, str2)
        // moyenne(a1, a2, a3)

        // Chaque fonction devra effectuer l'opération correspondant à son nom, et renvoyer le résultat.
        // Celui-ci sera stocké dans une variable, qui sera ensuite affichée dans la console
        function Addition(a,b){
          var a = prompt("Premier nombre à additioner? ");
          var b = prompt("Deuxième nombre à additioner? ");
          var result = parseFloat(a)+ parseFloat(b);
          console.log(a+" + "+b+" = "+result)
          console.log(result);
          return (result);
        }
        // Addition();

        function Soustraction(a,b){
          var a = prompt("Premier nombre? ");
          var b = prompt("Deuxième nombre ? ");
          var result =  a-b;
          console.log(a+ " - "+b+" = "+result);
          return (result);
        }
        // Soustraction();

        function Multiplication(a,b){
          var a = prompt("Premier nombre à multiplier ? ");
          var b = prompt("Deuxième nombre à multiplier ? ");
          var result = a*b;
          console.log(a+ " * "+b+" = "+result);
          return (result);
        }
        // Multiplication();

        function Division(a,b){
          var a = prompt("Premier nombre ? ");
          var b = prompt("Deuxième nombre ? ");
          var result = a/b;
          console.log(a+ " / "+b+" = "+result);
          return(result);
        }
        // Division();

        function Concatenation(a,b){
          var a = prompt("Premier mot ? ");
          var b = prompt("Deuxième mot ? ");
          console.log("Le message complet sera donc : "+a+" "+b);
          return (a+b);
        }
        // Concatenation();

        function Moyenne(a,b,c){
          var a = prompt("Premier nombre de la moyenne ? ");
          var b = prompt("Deuxième nombre de la moyenne ? ");
          var c = prompt("Troisème nombre de la moyenne ?");
          var result = ( (parseFloat(a)+ parseFloat(b)+parseFloat(c))/3);
          console.log("La moyenne de : "+a+ ", "+b+" et "+c+ " vaut :"+result);
          return(result);
        }
        // Moyenne();
        // ----
        // Déclarer deux variables a et b, de valeurs respectives 5 et 12
        // A l'aide d'une variable intermédiaire, inverser les deux valeurs pour que a ait pour valeur 12 et b pour valeur 5
        // Afficher le résultat de a et b dans la console sous la forme d'une phrase: "A vaut : xxx et B vaut yyy"

        // WRITE YOUR CODE HERE
        function swap(a,b){
          var a = prompt("Nombre contenu dans le a : ");
          var b = prompt ("Nombre contenu dans le b");
          var c;
          console.log("On débute avec : a = "+a+" et b = "+b);
          c=a;
          a=b;
          b=c;
          console.log("Et après swap on a : a = "+a+" et b = "+b);
          return (a,b);
        }
        // swap();
        // ----
        // Ecrire une fonction 'isDivisibleBy5' qui reçoit un nombre en paramètre, et qui vérifie que ce nombre est divisible par 5.
        // Cette fonction doit renvoyer un booléen
        var isDivisibleBy5 = function() {
          // WRITE YOUR CODE HERE
          var y = prompt("Veuillez entrer une valeur :");
          console.log( (y % 5 == 0) ? y+" est divisible par 5" :y+" n'est pas divisible par 5");
          return((y % 5 == 0)?true:false);

          /* MANIÈRE PLUS LONGUE
          if(y%5 == 0 || y/5 == 5){
          x = true;
          console.log(" La valeur : "+y+" est divisible par 5.")
        } else {
        x = false;
        console.log(" La valeur : "+y+" n'est pas divisile par 5.")
        }
        return(x);*/
        }
        // isDivisibleBy5();


        // ----
        // Ecrire une fonction 'isDivisibleByN' qui reçoit deux nombres entiers x et n, et qui vérifie si x est divisible par n.
        // Cette fonction doit renvoyer un booléen
        function isDivisibleByN(x, n) {
          // WRITE YOUR CODE HERE
          var x = prompt("Veuillez entrer un nombre à diviser : ");
          var n = prompt("Veuillez choisir un nombre qui va diviser : ");
          console.log( (x%n === 0) ? x+" est divisible par "+n :x+" n'est pas divisible par "+n);
          return( (x%n === 0)? false : true);
          /* MANIÈRE PLUS LONGUE
          var verif = false;
          if (x%n == 0){
          verif = true;
          console.log(x+" est divisible par "+n)
        }else {
        console.log(x+" n'est pas divisible par "+n)
        }
        return (verif);*/
        }
        // isDivisibleByN();

        // ----
        // Générer un nombre décimal compris entre 0 et 1, et le stocker dans une variable
        // Changer la valeur de cette variable pour qu'elle vaille le nombre initial arrondi à 2 décimales
        // Afficher dans la console
        function genereEtArrondit() {
          // WRITE YOUR CODE HERE
          var initial = Math.random();
          console.log("le nombre géneré aléatoirement est : "+initial);
          console.log("Le nombre finalement arrondi est donc : "+initial.toPrecision(2));
        }
        // genereEtArrondit();


        /**
                                           * Exercices sur les chaînes de caractères
        **/

        // ----
        // Ecrire une fonction qui reçoit une chaîne de caractères, et qui renvoie la position
        // de la première occurence de la lettre 'e' dans cette chaîne
        function positionf(indice){
          var chaine = prompt("Veuillez taper un mot qui contient plusiurs fois un 'e':");
          console.log("L'indice de la première occurence de la lettre 'e' vaut : "+ chaine.indexOf("e"));
          return (chaine.indexOf('e'));
        }
        // positionf();
        // ----
        // Ecrire une fonction qui reçoit une chaîne de caractères, et qui renvoie la position
        // de la dernière occurence de la lettre 'e' dans cette chaîne

        function positionl(indice){
          var chaine = prompt("Veuillez taper un mot qui contient plusieurs fois un 'e':");
          console.log("L'indice de la dernière occurence de la lettre 'e' vaut : "+ chaine.lastIndexOf('e'));
          return chaine.lastIndexOf('e');
        }
        // positionl();
        // ----
        // Ecrire une fonction qui reçoit une chaîne de caractères contenant une prhase entière,
        // et qui renvoie un tableau contenant chacun des différents mots dans la phrase

        function tabPhrase(){
          var phrase = prompt("Veuillez saisir une phrase");
          var tab = new Array();
          tab[0] = new String();
          var n = 0;
          for(var i = 0; i < phrase.length; i++) {
            if(phrase[i] == ' ') {
              console.log(tab[n]+" => À la position : "+n+" de notre tableau.");
              n++;
              tab[n] = new String();
            }
            else {
              tab[n]+= phrase[i];
              // => Équivalent de : tab[n]= tab[n]+ phrase[i] .
            }
          }
        }
        // tabPhrase();
        // ----
        // Ecrire une fonction qui reçoit une chaîne de caractère, qui transforme
        // la première lettre en majuscule, et qui renvoie la nouvelle chaîne
        function transMaj(){
          var chaine = prompt("Veuillez saisir une chaîne de caractère :");
          console.log("La chaine de charactère : "+chaine+", devient : "+chaine.charAt(0).toUpperCase()+ chaine.substring(1).toLowerCase()+".");
        }
        // transMaj();

        /**
                                   * Exercices sur les fonctions natives javascript
        **/

        // ----
        // Ecrire une fonction qui stocke vos noms et prénoms dans deux variables firstName et lastName
        // Afficher dans une popup la concaténation des deux
        function identite(){
          var firstName = prompt("Merci de renseigner votre prénom");
          var lastName = prompt("Ainsi que votre nom de famille");
          alert("Bonjour "+firstName+" "+lastName);
        }
        // identite();

        // ----
        // Ecrire une fonction qui respecte les étapes suivantes:
        // Demander à l'utilisateur de saisir une valeur numérique par le biais d'une popup
        // Stocker cette valeur dans une variable
        // Afficher sa valeur dans la console
        function askNumber(){
          var nombre = prompt("Merci de renseigner une valeur numérique :");
          console.log("La valeur entrée par l'utilisateur est : "+nombre+" .")
        }
        // askNumber();

        // ----
        // Ecrire une fonction qui respecte les étapes suivantes:
        // Demander à l'utilisateur de saisir deux valeurs numériques grâce à une popup de saisie
        // L'alerter grâce à une popup si la valeur saisie n'est pas un nombre
        // Afficher dans la console la somme des deux valeurs
        function askNumberS(){
      var tab = new Array();
      var stock = 0;

      for(var i = 0; i<2;i++){
        tab[i]= prompt("Merci de rensigner une valeur numéro "+(i+1));

        if(isNaN(tab[i])){
            alert("La valeur renseignée n'est pas numérique, merci de recommencer.")
        }else{
          console.log("Vous avez choisi la valeur "+tab[i]+" en position : "+i+" .");
          stock = stock+tab[i]*1;
          // stock += Number(tab[i]);
        }
      }
      console.log("La valeur finale vaut : "+stock);
        }
        // askNumberS();


        /**
                                                        * Exercices sur les tableaux
        **/

        // ----
        // Ecrire une fonction qui prend en argument un tableau de nombres et en calcule la somme.
        // Valeurs initiales:
        function computeSumOfArray(tab) {
          var stock = 0;
          for(var i = 0; i<tab.length; i++){
            stock += tab[i];
          }
          console.log("Le résultat final est : "+ stock);
        }
        // var numTab = [45, 99, 357, -33, 1, 8, -78];
        // var otherTab = [1, 2, 3];
        // computeSumOfArray(numTab);
        // computeSumOfArray(otherTab);

        /**
                           * Exercices sur les structures de contrôles et de boucles
        **/

        // ----
        // 1)
        // 	- construire un tableau vide initialement
        // 	- rajouter l'une après l'autre 10 valeurs quelconques (nombres, string) dans ce tableau
        // 	- utiliser une boucle for pour afficher toutes les valeurs du tableau dans la console
  /*  var tab = new Array();

    for( var i = 0; i<10; i++){
      var valeur = prompt("Merci d'entrer une valeur (quelconque)");
      tab[i]= valeur;
    }
    console.log("Affichage du tableau avec une boucle for : ");
    for( var i = 0; i<tab.length; i++){
      console.log(tab[i]);
    } */
        // 2)
        // 	- reprendre le tableau construit précédemment
        // 	- utiliser une boucle while pour afficher toutes les valeurs du tableau dans la console
  /*  console.log("Affichage du tableau avec une boucle while : ");
    i=0;
    while(i<tab.length){
      console.log(tab[i]);
      i++;
    } */
        // ----
        // Ecrire une fonction qui réalise les étapes suivantes:
        // Utiliser une fonction de type 'random' pour générer une liste de nombre aléatoires
        // Utiliser une boucle for, et l'instruction 'if' pour afficher dans la console uniquement les nombres impairs de ce tableau
  function impair(){
    var tab = new Array();
    var n = prompt("Combien de nombre voulez-vous dans votre liste ? ");
    for(var i = 0; i<n; i++){
      tab[i]= Math.random(1)*10;
      if(tab[i]/2 != 0){
      var stock = tab[i]/2;
      console.log("Valeur: "+tab[i]+" . Car : "+ tab[i]+" / 2 = "+stock);
      }
      else {
        console.log("Chiffre pair");
      }
    }
  }
  // impair();
        // ----
        // Ecrire une fonction qui réalise les étapes suivantes:
        // Sur 50 itérations:
        //     - générer un entier de façon aléatoire
        //     - si l'entier est divisible par 5, le stocker dans le tableau
        // Afficher avec une boucle for le contenu du tableau dans la console
        function divisibleBy5(){
          var divisible = new Array();

          for( var i = 0; i<50; i++){
           var aleatoire =  Math.random()*10;
           var aleatoire2= parseInt(aleatoire);
           if(aleatoire2 % 5 === 0)
           divisible[i]=aleatoire2;
        }
        for( var n = 0; n<divisible.length; n++){
          console.log("Divisible par 5 : "+divisible[n]+". Car : "+divisible[n]+"/5 = "+divisible[n]%5);
        }
          }
      //  divisibleBy5();

     function divEtNonDivisibleBy5(){
       var divisible = new Array();
       var nonDivisible= new Array();
       var indefini= new Array();

       for( var i = 0; i<50; i++){
        var aleatoire =  Math.random()*10;
        var aleatoire2= parseInt(aleatoire);
       (aleatoire2 === undefined) ? indefini[i]=aleatoire2 : ((aleatoire2 % 5 === 0) ? divisible[i]= aleatoire2 : nonDivisible[i]= aleatoire2);
     }
     for( var n = 0; n<divisible.length; n++){
       console.log("Divisible par 5 : "+divisible[n]+". Car : "+divisible[n]+"/5 = "+divisible[n]%5);
     }
     for( var j = 0; j<nonDivisible.length; j++){
       console.log("Non divisible par 5 : "+nonDivisible[j]+". Car : "+nonDivisible[j]+"/5 = "+nonDivisible[j]%5);
     }
     for( var k = 0; k<nonDivisible.length; k++){
       console.log("Valeur indéfinie : "+indefini[k]+". Car : "+indefini[k]+"/5 = "+indefini[k]%5);
     }
       }
    // divEtNonDivisibleBy5();

        /**
                                                         * Exercices sur les objets
        **/

        // ----
        // Construire un objet :
        // - ayant deux propriéts: nom, prénom
        // - dont les valeurs sont votre nom et votre prénom
        // - rajouter dynamiquement une propriété âge
        // - modifier dynamiquement le prénom de cet objet

        //              AUTRE SYNTAXE
        // var identity = new Object();
        // identity.name = "Imane";
        // identity.lastName ="Djellalil";
        // identity["age"] = [19];
         var identity = {
          name:"Imane",
          lastName: "Djellalil",
        };
        identity.age = '19';
        var stock = Object.getOwnPropertyNames(identity);
        console.log(stock+" après le rajout dynamique");
        console.log("Valeur de name : "+ identity.name);
        identity.name = "Nima";
        console.log("Valeur de name : "+ identity.name);
        // ----
        // Ecrire une fonction qui reçoit un objet, et qui renvoie la longueur de cet objet
        var getObjLength = function(obj) {
        var stocks = Object.getOwnPropertyNames(obj).length;
        // obj = obj.length;
        console.log(stocks);
        }
        getObjLength(identity);
        // Tester cette fonction avec un objet de votre choix que vous aurez écrit

        // ----
        // Pour résoudre les exercices précédents vous avez écrit des fonctions.
        // Vous devez maintenant construire un objet ayant plusieurs propriétés dont:
        // - le nom de la propriété s'appelle 'solution_N', où N est le numéro de l'exercice
        // - la valeur de la propriété est la fonction qui résoud l'exercice N
