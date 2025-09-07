// ===== BASE DE DONNÉES DES QUESTIONS =====

const questionsData = {
    quebec: [
        {
            question: "Cette ville est la capitale du Québec et abrite le célèbre Château Frontenac.",
            answers: ["Québec", "Montréal", "Gatineau", "Sherbrooke"],
            correct: 0,
            explanation: "Québec est la capitale provinciale et le Château Frontenac est son hôtel emblématique."
        },
        {
            question: "Plus grande ville du Québec, elle est reconnue pour ses festivals et sa vie culturelle dynamique.",
            answers: ["Québec", "Montréal", "Laval", "Longueuil"],
            correct: 1,
            explanation: "Montréal est la métropole du Québec avec plus de 1,7 million d'habitants."
        },
        {
            question: "Cette ville de la Rive-Sud de Québec est reliée à la capitale par le pont de Québec.",
            answers: ["Drummondville", "Lévis", "Rimouski", "Chicoutimi"],
            correct: 1,
            explanation: "Lévis fait face à la ville de Québec de l'autre côté du fleuve Saint-Laurent."
        },
        {
            question: "Ville étudiante réputée pour son université et située en Estrie.",
            answers: ["Sherbrooke", "Trois-Rivières", "Saguenay", "Granby"],
            correct: 0,
            explanation: "Sherbrooke abrite l'Université de Sherbrooke et est le centre de la région de l'Estrie."
        },
        {
            question: "Cette ville mauricienne est historiquement connue comme la capitale mondiale du papier.",
            answers: ["Shawinigan", "Trois-Rivières", "Victoriaville", "Drummondville"],
            correct: 1,
            explanation: "Trois-Rivières était un centre majeur de l'industrie papetière au Québec."
        }
    ],
    
    canada: [
        {
            question: "Capitale du Canada, cette ville se trouve en Ontario près de la frontière québécoise.",
            answers: ["Toronto", "Ottawa", "Kingston", "Gatineau"],
            correct: 1,
            explanation: "Ottawa est la capitale nationale du Canada depuis 1857."
        },
        {
            question: "Plus grande ville du Canada, elle abrite la Tour CN et est le centre financier du pays.",
            answers: ["Vancouver", "Toronto", "Calgary", "Edmonton"],
            correct: 1,
            explanation: "Toronto est la plus grande ville canadienne avec plus de 2,7 millions d'habitants."
        },
        {
            question: "Cette ville de l'Ouest canadien a accueilli les Jeux olympiques d'hiver de 2010.",
            answers: ["Calgary", "Vancouver", "Victoria", "Kelowna"],
            correct: 1,
            explanation: "Vancouver a organisé les JO d'hiver 2010 avec Whistler comme site de montagne."
        },
        {
            question: "Capitale de l'Alberta, cette ville est un centre important de l'industrie pétrolière.",
            answers: ["Calgary", "Edmonton", "Red Deer", "Lethbridge"],
            correct: 1,
            explanation: "Edmonton est la capitale albertaine et un hub majeur du secteur énergétique."
        },
        {
            question: "Cette ville des Maritimes est la capitale de la Nouvelle-Écosse.",
            answers: ["Saint John", "Halifax", "Sydney", "Charlottetown"],
            correct: 1,
            explanation: "Halifax est la plus grande ville des provinces atlantiques et capitale de la N.-É."
        }
    ],
    
    world: [
        {
            question: "Surnommée la 'Ville Lumière', elle abrite la tour Eiffel et le Louvre.",
            answers: ["Londres", "Paris", "Rome", "Madrid"],
            correct: 1,
            explanation: "Paris est la capitale française, connue pour ses monuments emblématiques et sa culture."
        },
        {
            question: "Cette métropole américaine est surnommée 'Big Apple' et ne dort jamais.",
            answers: ["Los Angeles", "Chicago", "New York", "Miami"],
            correct: 2,
            explanation: "New York est la plus grande ville des États-Unis et un centre économique mondial."
        },
        {
            question: "Capitale du Royaume-Uni, elle abrite Big Ben et le palais de Buckingham.",
            answers: ["Londres", "Manchester", "Liverpool", "Edinburgh"],
            correct: 0,
            explanation: "Londres est la capitale britannique depuis plus de 1000 ans."
        },
        {
            question: "Cette ville japonaise a accueilli les Jeux olympiques d'été de 2021 (reportés de 2020).",
            answers: ["Osaka", "Kyoto", "Tokyo", "Hiroshima"],
            correct: 2,
            explanation: "Tokyo a organisé les JO de 2020-2021, reportés à cause de la pandémie."
        },
        {
            question: "Plus grande ville d'Australie, elle est célèbre pour son opéra aux voiles blanches.",
            answers: ["Melbourne", "Sydney", "Brisbane", "Perth"],
            correct: 1,
            explanation: "Sydney Opera House est l'un des monuments les plus reconnaissables au monde."
        }
    ]
};

// ===== VARIABLES GLOBALES DU JEU =====

let currentGame = {
    level: 'quebec',          // Niveau actuel
    questionIndex: 0,         // Index de la question actuelle
    score: 0,                 // Score total
    levelScores: {            // Scores par niveau
        quebec: 0,
        canada: 0,
        world: 0
    },
    timer: null,              // Timer de la question
    timeRemaining: 30,        // Temps restant
    gameCompleted: false,     // Jeu terminé
    currentCorrectIndex: 0    // Index correct après mélange des réponses
};

const gameConfig = {
    questionTime: 30,         // Temps par question (secondes)
    pointsPerQuestion: 1,     // Points par bonne réponse
    levels: ['quebec', 'canada', 'world'],  // Ordre des niveaux
    levelNames: {
        quebec: 'Québec',
        canada: 'Canada', 
        world: 'Monde'
    }
};

// ===== ÉLÉMENTS DOM =====

const screens = {
    home: document.getElementById('homeScreen'),
    game: document.getElementById('gameScreen'), 
    results: document.getElementById('resultsScreen')
};

const gameElements = {
    startBtn: document.getElementById('startGameBtn'),
    playAgainBtn: document.getElementById('playAgainBtn'),
    shareScoreBtn: document.getElementById('shareScoreBtn'),
    
    currentLevel: document.getElementById('currentLevel'),
    questionCounter: document.getElementById('questionCounter'),
    currentScore: document.getElementById('currentScore'),
    progressFill: document.getElementById('progressFill'),
    timerDisplay: document.getElementById('timerDisplay'),
    
    questionText: document.getElementById('questionText'),
    answerButtons: document.querySelectorAll('.answer-btn'),
    feedback: document.getElementById('feedback'),
    
    finalScore: document.getElementById('finalScore'),
    quebecScore: document.getElementById('quebecScore'),
    canadaScore: document.getElementById('canadaScore'),
    worldScore: document.getElementById('worldScore'),
    performanceText: document.getElementById('performanceText'),
    resultsTitle: document.getElementById('resultsTitle')
};

// ===== FONCTIONS UTILITAIRES =====

/**
 * Affiche un écran spécifique et cache les autres
 * @param {string} screenName - Nom de l'écran à afficher
 */
function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.add('hidden'));
    screens[screenName].classList.remove('hidden');
}

/**
 * Mélange un tableau de façon aléatoire
 * @param {Array} array - Tableau à mélanger
 * @returns {Array} - Tableau mélangé
 */
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

/**
 * Formate le temps en format MM:SS
 * @param {number} seconds - Secondes à formater
 * @returns {string} - Temps formaté
 */
function formatTime(seconds) {
    return seconds.toString().padStart(2, '0');
}

/**
 * Met à jour l'affichage de la progression
 */
function updateProgress() {
    const totalQuestions = gameConfig.levels.length * 5; // 5 questions par niveau
    const currentQuestion = (gameConfig.levels.indexOf(currentGame.level) * 5) + currentGame.questionIndex + 1;
    const progressPercent = (currentQuestion / totalQuestions) * 100;
    
    gameElements.progressFill.style.width = `${progressPercent}%`;
    gameElements.questionCounter.textContent = `Question ${currentQuestion}/${totalQuestions}`;
    gameElements.currentScore.textContent = `Score: ${currentGame.score}`;
    gameElements.currentLevel.textContent = gameConfig.levelNames[currentGame.level];
}

// ===== FONCTIONS DE JEU =====

/**
 * Initialise une nouvelle partie
 */
function initGame() {
    currentGame = {
        level: 'quebec',
        questionIndex: 0,
        score: 0,
        levelScores: { quebec: 0, canada: 0, world: 0 },
        timer: null,
        timeRemaining: gameConfig.questionTime,
        gameCompleted: false,
        currentCorrectIndex: 0
    };
    
    console.log('🎮 Nouvelle partie initialisée');
}

/**
 * Démarre le jeu
 */
function startGame() {
    initGame();
    showScreen('game');
    loadQuestion();
    console.log('🚀 Jeu démarré');
}

/**
 * Mélange les réponses et retourne le nouvel index de la bonne réponse
 * @param {Array} answers - Tableau des réponses
 * @param {number} correctIndex - Index original de la bonne réponse
 * @returns {Object} - Objet contenant les réponses mélangées et le nouvel index correct
 */
function shuffleAnswers(answers, correctIndex) {
    // Créer un tableau d'objets avec réponse et index original
    const answersWithIndex = answers.map((answer, index) => ({ answer, originalIndex: index }));
    
    // Mélanger le tableau
    const shuffled = shuffleArray(answersWithIndex);
    
    // Trouver le nouvel index de la bonne réponse
    const newCorrectIndex = shuffled.findIndex(item => item.originalIndex === correctIndex);
    
    // Retourner seulement les réponses mélangées et le nouvel index
    return {
        shuffledAnswers: shuffled.map(item => item.answer),
        newCorrectIndex: newCorrectIndex
    };
}

/**
 * Charge la question actuelle
 */
function loadQuestion() {
    const questions = questionsData[currentGame.level];
    const question = questions[currentGame.questionIndex];
    
    if (!question) {
        nextLevel();
        return;
    }
    
    // Afficher la question
    gameElements.questionText.textContent = question.question;
    
    // Mélanger les réponses pour rendre le jeu plus équitable
    const { shuffledAnswers, newCorrectIndex } = shuffleAnswers(question.answers, question.correct);
    
    // Stocker le nouvel index correct pour cette question
    currentGame.currentCorrectIndex = newCorrectIndex;
    
    // Afficher les réponses mélangées
    gameElements.answerButtons.forEach((btn, index) => {
        const answerText = btn.querySelector('.answer-text');
        answerText.textContent = shuffledAnswers[index];
        btn.disabled = false;
        btn.className = 'answer-btn'; // Reset classes
    });
    
    // Cacher le feedback
    gameElements.feedback.classList.add('hidden');
    
    // Mettre à jour l'affichage
    updateProgress();
    startTimer();
    
    console.log(`📝 Question chargée: ${currentGame.level} ${currentGame.questionIndex + 1}`);
}

/**
 * Démarre le timer pour la question actuelle
 */
function startTimer() {
    currentGame.timeRemaining = gameConfig.questionTime;
    updateTimerDisplay();
    
    currentGame.timer = setInterval(() => {
        currentGame.timeRemaining--;
        updateTimerDisplay();
        
        if (currentGame.timeRemaining <= 0) {
            timeUp();
        }
    }, 1000);
}

/**
 * Met à jour l'affichage du timer
 */
function updateTimerDisplay() {
    gameElements.timerDisplay.textContent = formatTime(currentGame.timeRemaining);
    
    // Changer la couleur selon le temps restant
    const timerCircle = gameElements.timerDisplay.parentElement;
    if (currentGame.timeRemaining <= 10) {
        timerCircle.classList.add('timer-warning');
    } else {
        timerCircle.classList.remove('timer-warning');
    }
}

/**
 * Arrête le timer
 */
function stopTimer() {
    if (currentGame.timer) {
        clearInterval(currentGame.timer);
        currentGame.timer = null;
    }
}

/**
 * Gère la fin du temps imparti
 */
function timeUp() {
    stopTimer();
    showFeedback(false, "Temps écoulé !");
    
    // Désactiver tous les boutons
    gameElements.answerButtons.forEach(btn => btn.disabled = true);
    
    setTimeout(() => {
        nextQuestion();
    }, 2000);
}

/**
 * Gère la sélection d'une réponse
 * @param {number} selectedIndex - Index de la réponse sélectionnée
 */
function selectAnswer(selectedIndex) {
    stopTimer();
    
    const question = questionsData[currentGame.level][currentGame.questionIndex];
    // Utiliser le nouvel index correct après mélange
    const isCorrect = selectedIndex === currentGame.currentCorrectIndex;
    
    // Mettre à jour le score
    if (isCorrect) {
        currentGame.score += gameConfig.pointsPerQuestion;
        currentGame.levelScores[currentGame.level]++;
    }
    
    // Afficher le feedback
    showAnswerFeedback(selectedIndex, currentGame.currentCorrectIndex, question.explanation);
    
    // Désactiver tous les boutons
    gameElements.answerButtons.forEach(btn => btn.disabled = true);
    
    setTimeout(() => {
        nextQuestion();
    }, 3000);
    
    console.log(`✅ Réponse: ${isCorrect ? 'Correcte' : 'Incorrecte'}, Score: ${currentGame.score}`);
}

/**
 * Affiche le feedback de la réponse
 * @param {number} selectedIndex - Index sélectionné
 * @param {number} correctIndex - Index correct
 * @param {string} explanation - Explication
 */
function showAnswerFeedback(selectedIndex, correctIndex, explanation) {
    const isCorrect = selectedIndex === correctIndex;
    
    // Colorer les boutons
    gameElements.answerButtons.forEach((btn, index) => {
        if (index === correctIndex) {
            btn.classList.add('correct');
        } else if (index === selectedIndex && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });
    
    // Afficher le feedback général
    showFeedback(isCorrect, explanation);
}

/**
 * Affiche un message de feedback
 * @param {boolean} isPositive - Feedback positif ou négatif
 * @param {string} message - Message à afficher
 */
function showFeedback(isPositive, message) {
    const feedbackIcon = gameElements.feedback.querySelector('.feedback-icon');
    const feedbackText = gameElements.feedback.querySelector('.feedback-text');
    
    feedbackIcon.textContent = isPositive ? '✅' : '❌';
    feedbackText.textContent = message;
    
    gameElements.feedback.className = isPositive ? 'feedback correct' : 'feedback incorrect';
}

/**
 * Passe à la question suivante
 */
function nextQuestion() {
    currentGame.questionIndex++;
    
    if (currentGame.questionIndex >= questionsData[currentGame.level].length) {
        nextLevel();
    } else {
        loadQuestion();
    }
}

/**
 * Passe au niveau suivant ou termine le jeu
 */
function nextLevel() {
    const currentLevelIndex = gameConfig.levels.indexOf(currentGame.level);
    
    if (currentLevelIndex < gameConfig.levels.length - 1) {
        // Passer au niveau suivant
        currentGame.level = gameConfig.levels[currentLevelIndex + 1];
        currentGame.questionIndex = 0;
        loadQuestion();
        console.log(`📈 Niveau suivant: ${currentGame.level}`);
    } else {
        // Jeu terminé
        endGame();
    }
}

/**
 * Termine le jeu et affiche les résultats
 */
function endGame() {
    currentGame.gameCompleted = true;
    showScreen('results');
    displayResults();
    console.log('🏁 Jeu terminé');
}

/**
 * Affiche les résultats finaux
 */
function displayResults() {
    // Score final
    gameElements.finalScore.textContent = currentGame.score;
    
    // Scores par niveau
    gameElements.quebecScore.textContent = `${currentGame.levelScores.quebec}/5`;
    gameElements.canadaScore.textContent = `${currentGame.levelScores.canada}/5`;
    gameElements.worldScore.textContent = `${currentGame.levelScores.world}/5`;
    
    // Message de performance
    const percentage = (currentGame.score / 15) * 100;
    let message, title;
    
    if (percentage >= 90) {
        title = "Expert en géographie !";
        message = "Félicitations ! Vous maîtrisez parfaitement la géographie.";
    } else if (percentage >= 70) {
        title = "Très bien joué !";
        message = "Excellent travail ! Vos connaissances sont impressionnantes.";
    } else if (percentage >= 50) {
        title = "Bon résultat !";
        message = "Pas mal du tout ! Continuez à explorer le monde.";
    } else {
        title = "À améliorer !";
        message = "Ne vous découragez pas ! La géographie s'apprend avec la pratique.";
    }
    
    gameElements.resultsTitle.textContent = title;
    gameElements.performanceText.textContent = message;
}

/**
 * Partage le score (fonctionnalité simple)
 */
function shareScore() {
    const text = `J'ai obtenu ${currentGame.score}/15 au Quiz Géographique ! 🌍`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Quiz Géographique',
            text: text
        });
    } else {
        // Fallback : copier dans le presse-papiers
        navigator.clipboard.writeText(text).then(() => {
            alert('Score copié dans le presse-papiers !');
        });
    }
}

// ===== GESTIONNAIRES D'ÉVÉNEMENTS =====

/**
 * Initialise tous les gestionnaires d'événements
 */
function initEventListeners() {
    // Boutons principaux
    gameElements.startBtn.addEventListener('click', startGame);
    gameElements.playAgainBtn.addEventListener('click', startGame);
    gameElements.shareScoreBtn.addEventListener('click', shareScore);
    
    // Boutons de réponse
    gameElements.answerButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            if (!btn.disabled) {
                selectAnswer(index);
            }
        });
    });
    
    // Raccourcis clavier (A, B, C, D)
    document.addEventListener('keydown', (event) => {
        if (screens.game.classList.contains('hidden')) return;
        
        const key = event.key.toLowerCase();
        const keyMap = { 'a': 0, 'b': 1, 'c': 2, 'd': 3 };
        
        if (keyMap.hasOwnProperty(key)) {
            const index = keyMap[key];
            if (!gameElements.answerButtons[index].disabled) {
                selectAnswer(index);
            }
        }
    });
}

// ===== INITIALISATION =====

/**
 * Initialise l'application
 */
function initApp() {
    console.log('🌍 Initialisation du Quiz Géographique...');
    
    // Initialiser les événements
    initEventListeners();
    
    // Afficher l'écran d'accueil
    showScreen('home');
    
    console.log('✅ Quiz géographique prêt à jouer !');
}

// ===== DÉMARRAGE DE L'APPLICATION =====

// Démarrer l'application quand le DOM est chargé
document.addEventListener('DOMContentLoaded', initApp);
