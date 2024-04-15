const questions = [
  { question: "Which SDG aims to end poverty in all forms everywhere?", options: ["SDG 1", "SDG 5", "SDG 10"], answer: "SDG 1" },
  { question: "Which SDG focuses on gender equality?", options: ["SDG 3", "SDG 5", "SDG 7"], answer: "SDG 5" },
  { question: "Which SDG aims to ensure inclusive and equitable quality education for all?", options: ["SDG 4", "SDG 8", "SDG 12"], answer: "SDG 4" },
  { question: "Which SDG addresses the need for sustainable cities and communities?", options: ["SDG 6", "SDG 9", "SDG 11"], answer: "SDG 11" },
  { question: "Which SDG focuses on responsible consumption and production?", options: ["SDG 8", "SDG 12", "SDG 14"], answer: "SDG 12" },
  { question: "Which SDG aims to combat climate change and its impacts?", options: ["SDG 13", "SDG 15", "SDG 17"], answer: "SDG 13" },
  { question: "Which SDG focuses on peace, justice, and strong institutions?", options: ["SDG 14", "SDG 16", "SDG 18"], answer: "SDG 16" },
  { question: "Which SDG aims to promote sustained, inclusive, and sustainable economic growth?", options: ["SDG 2", "SDG 7", "SDG 8"], answer: "SDG 8" },
  { question: "Which SDG focuses on life below water?", options: ["SDG 10", "SDG 14", "SDG 16"], answer: "SDG 14" },
  { question: "Which SDG aims to ensure access to affordable, reliable, sustainable, and modern energy for all?", options: ["SDG 7", "SDG 11", "SDG 15"], answer: "SDG 7" },
  { question: "Which SDG addresses the need for partnerships to achieve the goals?", options: ["SDG 16", "SDG 17", "SDG 18"], answer: "SDG 17" },
  { question: "Which SDG aims to reduce inequalities within and among countries?", options: ["SDG 6", "SDG 9", "SDG 10"], answer: "SDG 10" },
  { question: "Which SDG focuses on decent work and economic growth?", options: ["SDG 3", "SDG 8", "SDG 12"], answer: "SDG 8" },
  { question: "Which SDG aims to protect, restore, and promote sustainable use of terrestrial ecosystems?", options: ["SDG 13", "SDG 15", "SDG 17"], answer: "SDG 15" },
  { question: "Which SDG addresses the need for quality education?", options: ["SDG 4", "SDG 9", "SDG 14"], answer: "SDG 4" },
  { question: "Which SDG focuses on innovation and infrastructure?", options: ["SDG 2", "SDG 7", "SDG 9"], answer: "SDG 9" },
  { question: "Which SDG aims to ensure availability and sustainable management of water and sanitation for all?", options: ["SDG 3", "SDG 6", "SDG 11"], answer: "SDG 6" },
  { question: "Which SDG addresses the need for affordable and clean energy?", options: ["SDG 1", "SDG 5", "SDG 7"], answer: "SDG 7" },
  { question: "Which SDG aims to protect, restore, and promote sustainable use of marine ecosystems?", options: ["SDG 10", "SDG 13", "SDG 14"], answer: "SDG 14" },
  { question: "Which SDG focuses on building resilient infrastructure, promoting inclusive and sustainable industrialization?", options: ["SDG 6", "SDG 9", "SDG 11"], answer: "SDG 9" },
  { question: "Which SDG aims to revitalize the global partnership for sustainable development?", options: ["SDG 16", "SDG 17", "SDG 18"], answer: "SDG 17" }
];
let currentQuestionIndex = 0;
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-btn');
const timerDisplay = document.getElementById('timer');

// Timer function
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    let timerInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(timerInterval); // Stop the timer
            // Change option colors
            const options = document.querySelectorAll('.option');
            options.forEach(option => {
                if (option.textContent === questions[currentQuestionIndex].answer) {
                    option.style.backgroundColor = 'green'; // Correct option turns green
                } else {
                    option.style.backgroundColor = 'red'; // Wrong options turn red
                }
                option.removeEventListener('click', checkAnswer); // Remove click event listener
            });
        }
    }, 1000);
}

// Start the timer when the page loads
window.onload = function () {
    const durationInSeconds = 30; // 30 seconds timer
    startTimer(durationInSeconds, timerDisplay);
    displayQuestion();
};

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  optionsElement.innerHTML = '';
  currentQuestion.options.forEach(option => {
    const optionElement = document.createElement('div');
    optionElement.classList.add('option');
    optionElement.textContent = option;
    optionsElement.appendChild(optionElement);
  });
}

function checkAnswer(event) {
  const selectedOption = event.target.textContent;
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedOption === currentQuestion.answer) {
    alert('Correct!');
  } else {
    alert('Incorrect. Try again!');
  }
}

optionsElement.addEventListener('click', checkAnswer);

nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
    const durationInSeconds = 30; // Reset timer duration
    startTimer(durationInSeconds, timerDisplay); // Restart timer
  } else {
    alert('Congratulations! You have completed the game.');
  }
});