function playAudio(){
  document.getElementById("audio").play();
}
const Questions = [
    {
      question: "Where is our salon?",
      options: ["Astana", "Almaty", "Kyzylorda", "Taraz"],
      answer: "Astana"
    },
    {
      question: "What means beine in kazakh language?",
      options: ["Face", "Head", "Foot", "Teeth"],
      answer: "Face"
    },
    {
      question: "Where did the first cosmetics appear?",
      options: ["Ancient Egypt", "Ancient Greece", "Ancient China", "Ancient Japan"],
      answer: "Ancient Egypt"
    },
    {
      question: "When did the first beauty studio open?",
      options: ["1888", "1825", "1982", "1759"],
      answer: "1888"
    },
    {
      question: "Imagine that you are a boyfriend and you want to invite your girlfriend to a beauty salon which service will you choose",
      options: ["Manicure", "Pedicure", "Make a hairstyle", "All the mentioned"],
      answer: "All the mentioned"
    },
    {
      question: "what services are not provided by a beauty salon",
      options: ["Hair coloring", "Perming of hair", "Depilation", "Go to shop with you"],
      answer: "Go to shop with you"
    },
    {
      question: "Do not sow, do not plant,And they grow up ? What is it",
      options: ["Eyes", "Hair", "Head", "Arm"],
      answer: "Hair"
    },
    {
      question: "Our salon is the best?",
      options: ["Yes", "No", "May be","I don't know"],
      answer: "Yes"
    },
  ];
  let currentQuestion = 0; 
  let score = 0;
  const animationProps = {
    duration: 1000,
    delay: 200,
    easing: "ease-in-out"
  };
  function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
  
    questionElement.textContent = "";
    optionsElement.innerHTML = "";
  
    animateText(questionElement, Questions[currentQuestion].question);
  
    Questions[currentQuestion].options.forEach((option, index) => {
      const optionButton = document.createElement("button");
      optionButton.textContent = option;
      optionButton.addEventListener("click", checkAnswer);
      optionButton.addEventListener("mouseover", animateButton);
      optionsElement.appendChild(optionButton);
  
      animateButton(optionButton, index);
    });
  }
  
  function animateText(element, text) {
    element.style.opacity = 0;
    element.style.transition = `opacity ${animationProps.duration}ms ${animationProps.easing}`;
  
    setTimeout(() => {
      element.textContent = text;
      element.style.opacity = 1;
    }, animationProps.delay);
  }
  
  function animateButton(element, index) {
    element.style.opacity = 0;
    element.style.transform = "scale(0)";
    element.style.transition = `opacity ${animationProps.duration}ms ${animationProps.easing}, transform ${animationProps.duration}ms ${animationProps.easing}`;
  
    setTimeout(() => {
      element.style.opacity = 1;
      element.style.transform = "scale(1)";
    }, animationProps.delay * (index + 1));
  }
  
  function checkAnswer(event) {
    const selectedOption = event.target.textContent;
    const correctAnswer = Questions[currentQuestion].answer;
  
    if (selectedOption === correctAnswer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < Questions.length) {
      displayQuestion();
    } else {
      endGame();
    }
  }
  function endGame() {
    const gameElement = document.getElementById("game");
    const scoreElement = document.createElement("p");
    let discount = 0;
  
    if (score >= 7 && score <= 8) {
      discount = 15;
    } else if (score >= 4 && score <= 6) {
      discount = 10;
    } else if (score >= 0 && score <= 3) {
      discount = 5;
    }
    playAudio();
    scoreElement.textContent = `Congratulations! You scored ${score} out of ${Questions.length}. You get ${discount}% off at our Beine salon.`;
  
    gameElement.innerHTML = "<center><h1>Game over!</h1></center>";
    gameElement.appendChild(scoreElement);
  
    
    confirm("If you want to exit press e ")
    document.addEventListener('keydown', handleKeyPress);
  }
  
  function handleKeyPress(event) {
    const keyName = event.key;
  
    if (keyName.toLowerCase() === 'e') {
      
        window.close();
      
    }
  }
  
  displayQuestion();
  
