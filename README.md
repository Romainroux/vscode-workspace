# Synchronisation vs-code.

      /.vscode
          settings.json
          extensions.json
          task.json
          launch.json
          keybinding.json
          shared.code-snippets.json // Microsoft example
		.eslintrc.json
		.prettierrc.json
		package.json
            {
                "devDependencies": {
                    "eslint": "^8.51.0",
                    "eslint-config-prettier": "^9.0.0",
                    "eslint-plugin-prettier": "^5.0.1",
                    "prettier": "^3.0.3"
                }
            }
		test.js


- `settings.json` spécification des paramètres (paramètres d'indentation, règles pour un linter...)
- `extensions.json` recommander ou exiger des extensions (désactivation des extensions possible en utilisant la clef "unwantedRecommendations)"
- `tasks.json` définition des tâches de construction, de déploiement ou d'exécution de scripts personnalisés
- `launch.json` configuration du débogage spécifique au projet, y compris les points d'arrêt, les configurations de lancement et d'autres paramètres de débogage
- `keybinding.json` raccourcis clavier
- `${snippetName}.code-snippets`. extraits de code personnalisés spécifiques au projet.
- `.eslintrc.json` mise en forme du code de manière cohérente et lisible.
- `package.json`
    - `eslint` linter
    - `prettier` formatter
    - `eslint-config-prettier` agit comme un pont entre ESLint et Prettier. Il désactive toutes les règles ESLint qui pourraient entrer en conflit avec Prettier.
    - `eslint-plugin-prettier` plugin ESLint qui permet d'intégrer Prettier. ESLint vérifie si votre code est correctement formaté selon les règles de Prettier et signale des problèmes si ce n'est pas le cas
- `test.js` test du formatage

