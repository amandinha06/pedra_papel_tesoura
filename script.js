let playerScore = 0;
let computerScore = 0;

function play(playerChoice){
    const options = ['pedra', 'papel', 'tesoura']
    const emojis = {pedra: '💎', papel: '📄', tesoura: '✂'}
    const computerChoice = options[Math.floor(Math.random()*3)]

    let result = '';

    if (playerChoice === computerChoice) {
        result = 'empate';
    } else if (
    (playerChoice === 'pedra' && computerChoice === 'tesoura') ||
    (playerChoice === 'papel' && computerChoice === 'pedra') ||
    (playerChoice === 'tesoura' && computerChoice === 'papel')
    ) {
        result = "Você venceu!";
        playerScore++;
    } else {
        result = "Você perdeu!";
        computerScore++;
    }

    document.getElementById('result').innerHTML = 
    `
    Você escolheu: ${emojis[playerChoice]} <stong> ${playerChoice} </strong><br>
    PC escolheu: ${emojis[computerChoice]} <strong> ${computerChoice} </strong><br>

    `;

    document.getElementById('score').textContent = 
    `
    Você: ${playerScore} | PC: ${computerScore}
    `;
}

