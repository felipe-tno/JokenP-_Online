const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('start-button');
const countdownDisplay = document.getElementById('countdown');
const playerMoveDisplay = document.getElementById('player-move');
const computerMoveDisplay = document.getElementById('computer-move');
const gameResultDisplay = document.getElementById('game-result');
let model;
let intervalId;

async function setupCamera() {
    video.width = 640;
    video.height = 480;

    const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
    });
    video.srcObject = stream;

    return new Promise((resolve) => {
        video.onloadedmetadata = () => {
            resolve(video);
        };
    });
}

async function loadModel() {
    model = await handpose.load();
    console.log('Handpose model loaded.');
}

async function main() {
    await setupCamera();
    await loadModel();
    video.play();
    startButton.addEventListener('click', startGame);
}

function startGame() {
    startButton.disabled = true;
    countdownDisplay.style.display = 'block';
    let countdown = 3;
    countdownDisplay.textContent = countdown;

    intervalId = setInterval(() => {
        countdown--;
        countdownDisplay.textContent = countdown;
        if (countdown === 0) {
            clearInterval(intervalId);
            countdownDisplay.style.display = 'Nenhum';
            detectHandGesture();
        }
    }, 1000);
}

async function detectHandGesture() {
    const predictions = await model.estimateHands(video);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (predictions.length > 0) {
        const landmarks = predictions[0].landmarks;
        drawHand(landmarks);
        const playerMove = recognizeGesture(landmarks);
        const computerMove = getComputerMove();
        const gameResult = determineWinner(playerMove, computerMove);

        playerMoveDisplay.textContent = playerMove;
        computerMoveDisplay.textContent = computerMove;
        gameResultDisplay.textContent = gameResult;
    }
    
    startButton.disabled = false;
}

function drawHand(landmarks) {
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;

    for (let i = 0; i < landmarks.length; i++) {
        const [x, y] = landmarks[i];
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fill();
    }
}

function recognizeGesture(landmarks) {
    const fingerIndices = [8, 12, 16, 20];
    let upFingers = 0;

    for (let i of fingerIndices) {
        if (landmarks[i][1] < landmarks[i - 2][1]) {
            upFingers++;
        }
    }

    if (upFingers === 0) return 'Pedra';
    if (upFingers === 4) return 'Papel'; // Mão aberta (4 dedos pra cima)
    if (upFingers === 2) return 'Tesoura';
    return 'Movimento Desconhecido👽';
}

function getComputerMove() {
    const moves = ['Pedra', 'Papel', 'Tesoura'];
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
}

function determineWinner(playerMove, computerMove) {
    if (playerMove === computerMove) return 'Empate🤝';
    if (playerMove === 'Pedra' && computerMove === 'Tesoura' ||
        playerMove === 'Papel' && computerMove === 'Pedra' ||
        playerMove === 'Tesoura' && computerMove === 'Papel') {
        return '🎉Você Ganhou🎉';
    }
    return 'Você Perdeu 😭';
}

main(); 
