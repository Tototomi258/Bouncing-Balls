# Bouncing Balls

## Project description

## Usage (how to set up, run and use the application)

Download  
Open `index.html`  
Click on the `?` button on the top left to read the instructions.

## Configuration and technical characteristics

The project was carried out using the VSCode IDE and the inspector integrated in the browser, with the addition of personal mobile devices to test the functioning of the pages.
The website is composed of 1 html file, 1 css file in the `style` folder, the js files are in the `script` folder and are separated into smaller, more comprehensible files. The image and music are inside the folder `media`.

## Files and project structure

- root
  - `index.html`
  - `README.md`
  - style
    - `style.css`
  - script
  - `Ball.js`
  - `Container.js`
  - `ContainerMouse.js`
  - `script.js`
  - media
    - img
      - `bg.jpeg`
    - music
      - `Shenyang.mp3`
  - JSDoc

## Optional features delivered

- feature 1: background
- feature 2: music

## Bonuses delivered

- Bonus 1: gravity

## Browser compatibility

- IE11: not functional
- Chrome: fully functional
- Edge: fully functional
- Brave: fully functional
- Opera: fully functional
- Safari: fully functional
- License:
  - Music:Shenyang Kevin MacLeod (incompetech.com)  
    Licensed under Creative Commons: By Attribution 3.0 License  
    http://creativecommons.org/licenses/by/3.0/  
    Music promoted by https://www.chosic.com/
  - Background image: https://www.goodfon.com/, free license
- Authors: Alessandro Carabetta, Giacomo Mana, Tomas Nicolorich
- v1.0

## TODO

- [x] new balls should be generated when the use clicks and drags the mouse
- [x] the speed of the balls should depend on the speed of the mouse movement
- [x] the direction of the balls should depend on the direction of motion of the mouse
- [x] the balls should bounce at the edges of the container
- [x] scrollbars should not appear when the balls hit the edges of the container
- [x] the ball movement should have some physicality (wight, gravity, speed)
- [x] it should be possible to 'freeze' and 'resume' the animation
- [x] the user should be able to choose the 'skin' of the balls, colors, images, etc
- [x] the user should be able to make the balls bigger or smaller with keyboard shortcuts
      and onscreen buttons
- [x] the user should be able to remove balls (e.g. by clicking on them or on a button)
- [x] the user should be able to to increase/decrease the speed of balls with keyboard
      shortcuts and onscreen buttons
- [x] the page should be page responsive, meaning that when the user changes the size of the
      page, the balls never go out of their container and all page controls are repositioned to fit
      the viewport
- [x] add an onscreen counter that displays the current number of balls

## Optional

- [~] making the application more game like, for example by adding rules
- [x] addling backgrounds and images
- [x] adding sounds or music
- [~] generate balls of random sizes and colors

## Bonus (extra points)

- [ ]Bonus 1: Magnet
  Right clicking and holding the mouse attracts all the balls to the position of the mouse
  When releasing the mouse button the balls return to their original behavior
- [ ]Bonus 2: Ball trails
  Balls should show shadow trails behind them to show the previous positions they were
  in. Search for "mouse trails" images to understand what this means
- [x]Bonus 3: Gravity
  Add a slider to adjust gravity and impact the ball movement. You can add other factors
  3
  such as air resistance for example

## JSDoc documentation (required)

- [x]Generate a JSDoc documentation for your code and put it in a folder called /JSDoc

## Comments and code documentation

- All HTML, CSS and JS files should contain comments and be well documented
- JSDoc header documentation for every file
- JSDoc documentation for every function
- [x] CSS files (if used) should have a header and contain comments where needed
- [x] HTML files should contain comments to indicate important sections
- Follow all the comments and documentation requirements in Appendix 01

## Validation

- [x] HTML files should be validated https://validator.w3.org/
- [x] CSS files should be validated https://jigsaw.w3.org/css-validator/
