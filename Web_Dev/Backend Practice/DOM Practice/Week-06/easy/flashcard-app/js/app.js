// --- DOM ELEMENTS: SETUP SCREEN ---

// Grab the entire setup screen container
const setupScreen = document.getElementById('setupScreen');

// Grab the user inputs
const topicsSelect = document.getElementById('topic-select');
const questionCountInput = document.getElementById('question-count');

// Grab the start button
const startButton = document.getElementById('start-btn');


// Listen for a click on the "Start Quiz" button
startButton.addEventListener('click', () => {
    // 1. Capture the user's selections
    const selectTopic = topicsSelect.value;
    const requestCount = parseInt(questionCountInput.value);

    // 2. Quick validation: ensure the user entered a valid number
    if(requestCount < 1){
        alert("Please choose at least 1 question.");
        return;
    }

    // 3. For debugging: check the console to make sure it captured the values
    console.log(`Selected Topic: ${selectTopic}`);
    console.log(`Question Count: ${requestCount}`)

    // 4. Hide the setup screen using the CSS class we made earlier
        setupScreen.classList.add('hidden');

    // 5. Next step: call your quiz initialization function here
    // startQuiz(selectedTopic, requestedCount);

    // --- DOM ELEMENTS: QUIZ SCREEN ---
    const quizScreen = document.getElementById('quiz-screen');
    const progressText = document.getElementById('progress-text');
    const scoreText = document.getElementById('score-text');
    const questionText = document.getElementById('question-text');
    const answerOptions = document.getElementById('answer-options');

    // GAME STATE VARIABLES ---
    // We need these to keep track of the user's progess
    let currentQuestions = [];
    let currentQuestionsIndex = 0;
    let score = 0;
});


function renderQuestion() {
    // 1. Get the current question object from our array
    const currentQuestionData = currentQuestions[currentQuestionIndex];

    // 2. Update Header Text
    progressText.textContent = `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;
    scoreText.textContent = `Score: ${score}`;

    // 3. Inject the question text into the DOM
    questionText.textContent = currentQuestionData.question;

    // 4. Clear out any old buttons from the previous question
    answerOptions.innerHTML = '';

    // 5. Generate new buttons for the current question's options
    currentQuestionData.options.forEach(option => {
        // Create a new button element
        const button = document.createElement('button');
        button.textContent = option;
        
        // Add a class so you can style it in CSS
        button.classList.add('answer-btn'); 

        // We will add the event listener to check the answer later!
        
        // Append the new button to the container in the HTML
        answerOptions.appendChild(button);
    });
}