# Pig-Game


This project was built during a course, I cannot take full credit for it.Still, I followed the teacher's instructions and wrote code with him from the beginning of the course. I can confidently say that I know how the whole program works and I fully understand it's logic.

Pig Game rules: 

- It has 2 players, it's playable in rounds
- Each turn a player rolls the dices as many times as he wants. Each sum of the rolled numbers on the dices gets added to the current score
- If the player rolls a 1 on any of the dices, the current score gets lost and his turn ends.
- Clicking the 'Hold' button, the round score gets automatically added to the global/main score. After that, the round ends and it's the next player's turn
- First player to reach 100 points on the global/main score wins the game. The 100 points for winning is the default score. This can be changed from the game at any time with any number the players choice as the winning score

The game is created with React and styled with CSS. All of the game structure is in the App.js file. I chose not to separate it into multiple components and a different structure because it's a one page game where all the logic sits in one page, so it only felt natural to leave it as that in the React code too. The page is responsive, it can be played on mobile too, but the design was thought for a bigger screen, so a computer is more recommended for a better experience, at least design-wise.

To run the game:

1.Clone

2.Run npm install

3.Run npm start
