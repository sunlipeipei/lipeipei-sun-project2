import './Rules.css'
import Header from '../Components/Header'

export default function Rules(){
    return(
        
        <div className='rules-container'>
            <Header />
            <h2>👻 Rules for Catch the Ghost 👻</h2>
            <p>Welcome to <strong>Catch the Ghost</strong>, a fun and challenging game where your logic and deduction skills are put to the test! Here's how to play:</p>
            <p>The goal of the game is to find all the hidden ghosts on the board while revealing all the safe squares. Be careful not to click on a ghost, or the game is over!</p>
            
            <h3>How to Play</h3>
            <ol>
                <li>
                    <strong>Select your difficulty level:</strong>
                    <ul>
                        <li><strong>Easy:</strong> 8x8 board with 10 ghosts.</li>
                        <li><strong>Medium:</strong> 16x16 board with 40 ghosts.</li>
                        <li><strong>Hard:</strong> 16x30 board with 99 ghosts.</li>
                    </ul>
                </li>
                <li>
                    <strong>Revealing Squares:</strong>
                    <ul>
                        <li>Click on a square to reveal what's underneath.</li>
                        <li><strong>Safe square:</strong> If there are no ghosts around, the square will be blank or show a number indicating the number of ghosts in adjacent squares.</li>
                        <li><strong>Ghost square:</strong> If you click on a ghost, the game ends immediately, and you lose.</li>
                    </ul>
                </li>
                <li>
                    <strong>Flagging Ghosts:</strong>
                    <ul>
                        <li>Right-click (or hold <code>Shift</code> and click) on a square to place a 🎃 if you think a ghost is there.</li>
                        <li>Right-click again (or hold <code>Shift</code> and click) to remove the 🎃.</li>
                        <li>🎃 are just markers to help you keep track of the ghosts and do not affect the game mechanics.</li>
                    </ul>
                </li>
                <li>
                    <strong>Winning the Game:</strong>
                    <ul>
                        <li>Reveal all the safe squares without clicking on a ghost to win.</li>
                        <li>Once all safe squares are revealed, the game will display a congratulatory message: <em>“Game Over! You Won!”</em></li>
                    </ul>
                </li>
                <li>
                    <strong>Losing the Game:</strong>
                    <ul>
                        <li>If you click on a ghost, the game will end, and you'll see the message: <em>“Game Over! You Lost!”</em></li>
                    </ul>
                </li>
            </ol>
            
            <p><strong>Good luck, and have fun catching the ghosts! 👻</strong></p>
                </div>
    )
}