document.addEventListener('DOMContentLoaded', function() {
    var gameBoard = document.getElementById('gameBoard');
    for (let i = 0; i < 16; i++) {
        var square = document.createElement('div');
        gameBoard.appendChild(square);

        square.addEventListener('click', function() {
            this.style.backgroundColor = 'red';
        });
    }

    var resetButton = document.getElementById('resetButton');
    resetButton.addEventListener('click', function() {
        var squares = gameBoard.getElementsByTagName('div');
        for (let square of squares) {
            square.style.backgroundColor = '';
        }
    });
});
