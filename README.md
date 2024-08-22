# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   > Kids.js contains the code that executes the click event. We utilize a click event listener with the `child` attribute to listen for when a suitable attribute is clicked on then display a window alert and utilize their data id and wish attributes to populate that window alert.
2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   > So that each child within the array can be matched to their celebrity. Which a for..of loop is required for.
3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   > Using a click event we listen for the `celebrity` attribute and then iterate through `celebrities` and find the `celebrityId` that matches the `id` attribute in the click event's target and then finally produce a window alert that is populated using that celebrity's name and sport properties.
4. Can you describe, in detail, the algorithm that is in the `main` module?
   > The `document.querySelector("#container")` method finds the first element in the DOM with the `container` id then assigns it to the `mainContainer` variable. Then we have the string of html assigned to the `applicationHTML` variable that contains sections that correspond to Kids, Celebrities, and Pairings with their respective functions interpolated within said sections. Finally we assign `applicationHTML` to `mainContainer` with a `.innerHTML` property to set the `container` element to in the DOM to the HTML content provided in `applicationHTML` so it can be rendered.
