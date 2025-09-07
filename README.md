# 🌍 Quiz Géographique - Devinez la Ville

[![Jouer au Quiz](https://img.shields.io/badge/🎮_Jouer_au_Quiz-blue?style=for-the-badge)](https://city-quiz-game.onrender.com)

> Jeu de quiz interactif pour tester ses connaissances géographiques  
> Développé par Lamine

## 📋 Description du projet

Jeu de quiz géographique simple permettant de tester ses connaissances sur les villes du Québec, du Canada et du monde. **Objectif** : apprendre la logique de jeu, la manipulation de données et créer une expérience utilisateur engageante.

L'application propose 15 questions réparties sur 3 niveaux de difficulté progressive avec un système de score et un timer pour rendre l'expérience plus dynamique.

## ✨ Fonctionnalités

### Fonctionnalités principales
- 🎯 **Quiz à choix multiples** : 15 questions avec 4 réponses possibles chacune
- 📊 **3 niveaux progressifs** : Québec → Canada → Monde
- ⏱️ **Timer par question** : 30 secondes pour répondre à chaque question
- 💯 **Système de score** : Points attribués pour chaque bonne réponse
- 📱 **Feedback immédiat** : Explications après chaque réponse
- 🏆 **Écran de résultats** : Score final détaillé par niveau

### Fonctionnalités techniques
- 🎮 **Logique de jeu complète** : États multiples, progression, validation
- ⌨️ **Raccourcis clavier** : Touches A, B, C, D pour répondre rapidement
- 📱 **Design responsive** : Interface adaptée mobile et desktop
- 🎨 **Animations fluides** : Transitions et feedback visuels
- 🔄 **Partage de score** : Possibilité de partager ses résultats

## 🛠️ Technologies utilisées

- **HTML5** : Structure sémantique et accessible du jeu
- **CSS3** : Design moderne avec animations et thème québécois (bleu/blanc)
- **JavaScript (ES6+)** : Logique de jeu, gestion des états et interactions

*Choix technologique* : J'ai utilisé JavaScript vanilla pour bien comprendre la logique de jeu, la manipulation de tableaux de données et la gestion des états d'interface.

## 🎮 Comment jouer

### 🚀 Démarrer le jeu
1. Ouvrir l'application dans un navigateur
2. Cliquer sur "🎮 Commencer le Quiz"
3. Le jeu démarre automatiquement au niveau Québec

### 🎯 Règles du jeu
- **15 questions** au total (5 par niveau)
- **30 secondes** pour répondre à chaque question
- **1 point** par bonne réponse
- **Progression automatique** : Québec → Canada → Monde
- **Pas de retour en arrière** possible

### 🎲 Niveaux de difficulté

1. **🏛️ Québec** : Villes et régions du Québec
2. **🍁 Canada** : Villes et provinces canadiennes  
3. **🌎 Monde** : Capitales et métropoles internationales

### ⌨️ Contrôles
- **Souris** : Cliquer sur les boutons de réponse
- **Clavier** : Touches A, B, C, D pour sélectionner une réponse

## 🏗️ Structure du projet

```
city-quiz-game/
├── index.html          # Structure HTML du jeu
├── style.css           # Styles CSS et animations
├── script.js           # Logique de jeu JavaScript
└── README.md           # Documentation du projet
```

## 💡 Ce que j'ai appris

En développant ce jeu de quiz, j'ai pu explorer et maîtriser :

### Concepts techniques développés
- **Logique de jeu** : États multiples (accueil, jeu, résultats), progression de niveaux
- **Manipulation de données** : Tableaux d'objets, filtrage, validation de réponses
- **Gestion du temps** : Timer avec `setInterval()`, mise à jour en temps réel
- **Interface interactive** : Feedback visuel, animations CSS, transitions d'état
- **Structure de données** : Organisation des questions par niveaux avec métadonnées

### Défis rencontrés et solutions

**1. Gestion des écrans multiples**
- *Problème* : Comment basculer entre l'écran d'accueil, de jeu et de résultats
- *Solution* : J'ai utilisé des classes CSS `.hidden` avec `display: none` et des fonctions JavaScript pour montrer/cacher les sections

**2. Timer qui ne s'arrête pas**
- *Problème* : Le timer continuait à tourner même après avoir répondu
- *Solution* : J'ai appris à utiliser `clearInterval()` pour arrêter le timer et éviter les bugs

**3. Réponses toujours en position B**
- *Problème* : Les bonnes réponses étaient souvent en 2ème position, rendant le jeu prévisible
- *Solution* : J'ai créé une fonction pour mélanger les réponses de façon aléatoire tout en gardant le bon index

**4. Boutons qui restent cliquables**
- *Problème* : On pouvait cliquer plusieurs fois sur les réponses après avoir déjà répondu
- *Solution* : J'ai ajouté `btn.disabled = true` pour désactiver les boutons après sélection

**5. Affichage mobile**
- *Problème* : L'interface était difficile à utiliser sur téléphone
- *Solution* : J'ai utilisé des media queries CSS pour adapter la taille des boutons et textes

**6. Écran de jeu visible au chargement**
- *Problème* : Des éléments du jeu (timer, scores) apparaissaient dès l'arrivée sur le site
- *Solution* : J'ai corrigé les règles CSS pour s'assurer que seul l'écran d'accueil soit visible initialement

### Compétences en logique
- **Conditions multiples** : Validation des réponses avec switch/case
- **Boucles et itérations** : Parcours des tableaux de questions et réponses
- **Manipulation d'objets** : Gestion de l'état du jeu avec propriétés dynamiques
- **Calculs de score** : Statistiques par niveau et pourcentage global

## 🔄 Améliorations possibles

Ce projet étant un exercice d'apprentissage, plusieurs améliorations pourraient être envisagées :

### À court terme
- 🎵 **Effets sonores** : Sons pour bonnes/mauvaises réponses et fin de jeu
- 🎨 **Thèmes visuels** : Changement de couleurs selon le niveau (Québec=bleu, Canada=rouge, Monde=vert)
- 📈 **Statistiques étendues** : Temps moyen par question, questions les plus difficiles
- 🔀 **Mélange des questions** : Ordre aléatoire des questions dans chaque niveau

### À long terme
- 🗄️ **Base de données étendue** : Plus de questions et de nouveaux thèmes (histoire, sport)
- 👥 **Mode multijoueur** : Défis entre amis avec scores partagés
- 🏅 **Système de badges** : Récompenses selon les performances
- 📊 **Tableau des scores** : Classement des meilleurs joueurs

## 🎯 Objectifs pédagogiques atteints

Ce projet démontre :

- **Logique algorithmique** : Capacité à structurer un programme avec états et transitions
- **Manipulation de données** : Traitement de structures de données complexes (tableaux d'objets)
- **Expérience utilisateur** : Conception d'interface intuitive avec feedback approprié
- **Code organisé** : Structure claire avec fonctions spécialisées et commentaires

## 📝 Notes

En créant ce jeu, j'ai privilégié :

- **Simplicité d'implémentation** : Code JavaScript vanilla pour comprendre les mécanismes de base
- **Expérience utilisateur** : Interface claire, feedback immédiat et design attrayant
- **Logique robuste** : Gestion des cas d'erreur et validation des interactions utilisateur
- **Code maintenable** : Structure modulaire avec fonctions bien définies et commentées

Cette application m'a permis de comprendre concrètement la programmation de jeux simples et la gestion d'interfaces interactives !

---

**Développé avec 🎮 par Lamine**
