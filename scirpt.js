const rock = document.getElementById('1')
const paper = document.getElementById('2')
const scissors = document.getElementById('3')
const stapler = document.getElementById('4')
const tape = document.getElementById('5')

const btn_list = document.querySelectorAll ("button");
console.log(btn_list);

function winner(you, cpu) {

    you = you.toLowerCase();
    cpu = cpu.toLowerCase();
    if (you === cpu) {
        result.textContent = 'Tie'
    }
    else if (you.localCompare('1')) {
        if (cpu == '3' || cpu == '4'){
            result.textContent = 'Cpu won!';
            cpuScore++;
            cpuScoreBoard.textContent = cpuScore;

        } else {
            result.textContent = 'You win!'
            youScore++;
            youScoreBoard.textContent = youScore;
        }
    }
}

function winner(you, cpu) {

    you = you.toLowerCase();
    cpu = cpu.toLowerCase();
    if (you === cpu) {
        result.textContent = 'Tie'
    }
    else if (you.localCompare('2')) {
        if (cpu == '1' || cpu == '5'){
            result.textContent = 'Cpu won!';
            cpuScore++;
            cpuScoreBoard.textContent = cpuScore;

        } else {
            result.textContent = 'You win!'
            youScore++;
            youScoreBoard.textContent = youScore;
        }
    }
}

function winner(you, cpu) {

    you = you.toLowerCase();
    cpu = cpu.toLowerCase();
    if (you === cpu) {
        result.textContent = 'Tie'
    }
    else if (you.localCompare('3')) {
        if (cpu == '2' || cpu == '4'){
            result.textContent = 'Cpu won!';
            cpuScore++;
            cpuScoreBoard.textContent = cpuScore;

        } else {
            result.textContent = 'You win!'
            youScore++;
            youScoreBoard.textContent = youScore;
        }
    }
}

function winner(you, cpu) {

    you = you.toLowerCase();
    cpu = cpu.toLowerCase();
    if (you === cpu) {
        result.textContent = 'Tie'
    }
    else if (you.localCompare('4')) {
        if (cpu == '2' || cpu == '5'){
            result.textContent = 'Cpu won!';
            cpuScore++;
            cpuScoreBoard.textContent = cpuScore;

        } else {
            result.textContent = 'You win!'
            youScore++;
            youScoreBoard.textContent = youScore;
        }
    }
}

function winner(you, cpu) {

    you = you.toLowerCase();
    cpu = cpu.toLowerCase();
    if (you === cpu) {
        result.textContent = 'Tie'
    }
    else if (you.localCompare('5')) {
        if (cpu == '3' || cpu == '1'){
            result.textContent = 'Cpu won!';
            cpuScore++;
            cpuScoreBoard.textContent = cpuScore;

        } else {
            result.textContent = 'You win!'
            youScore++;
            youScoreBoard.textContent = youScore;
        }
    }
}