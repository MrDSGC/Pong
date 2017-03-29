## Pong+

### Background


Pong is a classic two-player video game that involves bouncing a ball back and forth between two opposing sides. This project aims to recreate the retro feel and player experience of the original pong game with added features if possible (see **Bonus Features**)

### Functionality & MVP  

With this Pong+ game, users will be able to:

- [ ] Start and reset the game
- [ ] play against a functioning ai
- [ ] view score update in real time

In addition, this project will include:

- [ ] A production Readme

### Wireframes

This app will consist of a single screen with game board, game controls, and nav links to the Github, my LinkedIn. Game controls will include a start-on-click feature and track the player by mouse-movement.

![wireframes](docs/images/pong_wireframe.png)

### Architecture and Technologies

This project will be implemented with the following technologies:

- Vanilla JavaScript and `jquery` for overall structure and game logic,
- `HTML5 Canvas` for DOM manipulation and rendering,
- Webpack to bundle and serve up the various scripts.

### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running.  Create `webpack.config.js` as well as `package.json`.  Write a basic entry file and the bare bones of all 3 scripts outlined above.  Relearn the basics of Canvas. Build out the `Ball`, `Score`, `Player` objects.  Then, use `game.js` to create and render at least the `Ball` and `Player` objects. Goals for the day:

- Get a green bundle with `webpack`
- Render `game.js` to `Canvas` elements
- Render `Ball` and `Player` objects with `game.js`
- give ball velocity and movement
- give player ability to move

**Day 2**: Create the backend logic of the game.  Build out modular functions for handling ball bouncing, win conditions, mouse-tracking player control, and simple ai.  Incorporate the logic into the `game.js` rendering.  Goals for the day:

- Have a functional game on the frontend.

**Day 3**: Incorporate scoring system that renders pixelated retro score. Goals for the day:

- Have a fully functional scoring system that renders completely


**Day 4**:  Style the frontend, making it polished and professional. Add bonus features if time allows. Goals for the day:

- Have a styled `Canvas`, nice looking controls and title
- If time: "powerups" bonus feature


### Bonus features

While Pong itself may be a simpler game, many variations have been implemented over the years.  Some anticipated updates are:

- [ ] Add "powerups" (paddle size, change ball speed)
