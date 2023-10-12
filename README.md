# Synchronisation vs-code.

      /.vscode
          settings.json
          extensions.json
          task.json
          launch.json
          keybinding.json
          shared.code-snippets.json // Microsoft example

- `settings.json` spécification des paramètres (paramètres d'indentation, règles pour un linter...)
- `extensions.json` recommander ou exiger des extensions (désactivation des extensions possible en utilisant la clef "unwantedRecommendations"
- `task.json` définition des tâches de construction, de déploiement ou d'exécution de scripts personnalisés
- `launch.json` configuration du débogage spécifique au projet, y compris les points d'arrêt, les configurations de lancement et d'autres paramètres de débogage
- `keybinding.json` raccourcis clavier
- `${snippetName}.code-snippets`. extraits de code personnalisés spécifiques au projet.