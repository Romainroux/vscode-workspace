// Déclarations de variables non utilisées
var unusedVariable;
let anotherUnusedVariable;

// Erreur de syntaxe (manque un point-virgule)
console.log("Hello, world");

// Utilisation incorrecte de const (ne peut pas être réassignée)
const pi = 3.14;
pi = 3.14159;

// Fonction avec paramètres non utilisés
function addNumbers(a, b) {
  return a;
}

// Utilisation de '==' au lieu de '===' (comparaison stricte)
if (1 == "1") {
  console.log("1 est égal à '1'");
}

// Espaces incorrects avant et après les parenthèses
function exampleFunction(param) {
  return param * 2;
}

// Utilisation de guillemets simples aqu lieu de guillemets doubles (incohérence)
const message = "Ceci est un message";

// Utilisation de tabulations au lieu d'espaces pour l'indentation
function exampleFunction2() {
  console.log("Indentation incorrecte");
}

// Ligne vide inutile
const variable = 42;

// Utilisation de variables globales sans déclaration
globalVariable = "Ceci est une variable globale";

// Fonction vide
function emptyFunction() {}

// Comparaison d'une variable à elle-même
const x = 10;
if (x === x) {
  console.log("Comparaison inutile");
}
