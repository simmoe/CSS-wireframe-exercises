# CSS-wireframe-exercises
This is some basic exercises with flexbox and grid in css. CSS flex and grid makes it possible to implement almost any wireframe imaginable - but it takes a little time to work through the concepts, and be comfortable on a CSS strategy. 

Most people tend to learn flex first - I honestly think grid solves most of the problems we may have, so if you´re not specifically interested in flex for some reason, move directly to grid. 

### Exercises
For each picture below, try to make a webpage with css grid, that solves the problem.

#### Justify content in columns
Basically a grid constists of a grid container with some elements inside. The grid container is where we set the display property, and do the layout. The items inside the container can be any HTML element - in this example they are just empty div´s.

````CSS
main {
  display:grid:
  gap:1rem;
  padding:1rem;
  justify-content: end;
  height:100vh;
  align-items:start;
}

main > div {
  background-color:#4285F4;
}
````
Make a webpage with a main element and 4 div´s inside. Position the div´s as on the following picture, using css grid.

<img src="https://github.com/simmoe/CSS-wireframe-exercises/blob/master/Grid/099-grid-exercises/basic.png?raw=true" alt="exercises">

#### Grid-templating
With grid templates we can define both horizontal and vertical layout of a set of elements. By specifying how the grid container shall distribute width and height. Ie:

````CSS
main {
  display:grid;
  grid-template-columns: 2fr 4fr 2fr 4fr;
  grid-template-rows: 4fr 2fr 4fr 2fr;
````
In this example the grid container must have 8 elements inside. Make a full width/height webpage, that has the following grid fractions: 
-  2 - 4 - 6 - 6 (horizontal)
-  4 - 2 - 4 - 6 (vertical)

<img src="https://github.com/simmoe/CSS-wireframe-exercises/blob/master/Grid/099-grid-exercises/templates.png?raw=true" alt="exercises">

#### Repeat, auto-fit and the minmax function
The repeat function makes it easier to write templates:

````CSS
main {
  grid-template-columns: repeat(8, 1fr);
  /* exactly the same as... */
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}
````
We can extend the repeat function by using auto-fit and another functin called minmax:
````CSS
main {
  grid-template-columns:repeat(auto-fit, minmax(150px, 1fr)); 
}
````
This basically means: automatically fit the items to the width of the container - but don´t make them smaller than 150px. If there´s not enough space, give them a whole fraction. 

These functions take a bit of exercise, but they are a powerful way of making a responsive webpage, without media-queries. See if you can make a page with a grid container and 8 elements inside that are no smaller than 400px. Use the repeat, auto-fit and minmax -functions so the page acts responsive in the following way:  

<img src="https://github.com/simmoe/CSS-wireframe-exercises/blob/master/Grid/099-grid-exercises/auto-fit.png?raw=true" alt="exercises" style="width:30%;">
<img src="https://github.com/simmoe/CSS-wireframe-exercises/blob/master/Grid/099-grid-exercises/auto-fit-01.png?raw=true" alt="exercises" style="width:30%;">
<img src="https://github.com/simmoe/CSS-wireframe-exercises/blob/master/Grid/099-grid-exercises/auto-fit-02.png?raw=true" alt="exercises" style="width:30%;">

#### Grid-areas - create a full wireframe layout
Another very cool feature in css grid, is the ability to name grid-items directly in css and use these names to create a wireframe layout. Basically you give a specific grid item a class or an ID - and then name it in css in the following way:

````CSS
.center {
  background-color: lightblue;
  grid-area: center;
}

.aside {
  background-color: orchid;
  grid-area: aside;
}

.footer{
  background-color: #4285F4;;
  grid-area: footer;
}
````
Now, we can use the grid-area naming to create a template layout in the grid-container:

````CSS
main {
  height: 100vh;
  display: grid;
  gap: 1rem;
  padding:1rem;
  grid-template-areas:
      "aside aside center center center center"
      "footer footer footer footer footer footer "
  ;
}
````
What this tells CSS is to give aside 2 fractions and center 4 fractions in the top section of the page. And to give the footer all 6 fractions on the bottom. You can now use grid-template-rows to define how the vertical space should be distributed. 

Try to make a main container with 6 elements inside. Give these elements each a unique class or id, and name this in css with grid-area. The final page should look like this:

<img src="https://github.com/simmoe/CSS-wireframe-exercises/blob/master/Grid/099-grid-exercises/areas.png?raw=true" alt="exercises">

-----

## Demos
## Flex
-  <a href="https://simmoe.github.io/CSS-wireframe-exercises/Flex/flex1/">Flex 1</a>
-  <a href="https://simmoe.github.io/CSS-wireframe-exercises/Flex/flex2/">Flex 2</a>
-  <a href="https://simmoe.github.io/CSS-wireframe-exercises/Flex/flex3/">Flex 3</a>
-  <a href="https://simmoe.github.io/CSS-wireframe-exercises/Flex/flex4/">Flex 4</a>
-  <a href="https://simmoe.github.io/CSS-wireframe-exercises/Flex/flex5/">Flex 5</a>

## Grid

-  <a href="https://simmoe.github.io/CSS-wireframe-exercises/Grid/01-grid-basic/">Basic css grid terminology</a>
-  <a href="https://simmoe.github.io/CSS-wireframe-exercises/Grid/02-grid-template-basics/">Grid templates</a>
-  <a href="https://simmoe.github.io/CSS-wireframe-exercises/Grid/03-grid-auto-fit-basic/">Grid auto fit and the minmax function</a>
-  <a href="https://simmoe.github.io/CSS-wireframe-exercises/Grid/04-grid-basic-32/">A grid with 32 divs</a>
-  <a href="https://simmoe.github.io/CSS-wireframe-exercises/Grid/05-grid-basic-areas/">Grid areas</a>



