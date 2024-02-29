# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Overview
This is a simple Faq accordion which i coded using vanilla javascript and pure css

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process
I started with the desktop view first, setting the navigation bar top and giving it the background image of the design. Then I created the main semantic which housed the faq accordion itself and positioned it absolute in relation to the body of the document itself. Placed it atop the navigation then proceeded to add the body of the accordion and setting the content of trhe questions to display none inorder to hide it when a user logs in first time. This allowed for me to use the script to manipulate the display none to show when the user clicks any question by using the property of classlist to toggle the 'active' class which i set to display block. The tabindex added to the question itself aloowed for keyboard navigation with the tab key, which i attached an event focus to watch for the tab navigation and when the tab is clicked to navigate the question I added a blur event to hide the previous element that is not in focus anymore.

### Built with

- Semantic HTML5 markup
-pure CSS
- vanilla javascript

### What I learned
How to use the ```js element.classlist.toggle()``` properties in javascript to add and remove an element at the same time,
and how to use the tabindex attribute to add focus to elements in the DOM that do not have keyboard navigation properties.
This tabindex helps to add focus to an element which can then be accessed with the script to manipulate.
``

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.


### Continued development

In this challange, I could not fully solve the bug of the focus that is added to the click event which brought about the double event that is passed to the questions when clicked because of the focus event which i used to add function to the tabindex to allow for tab navigation in the challenge


## Author

- Frontend Mentor - [@tundetega](https://www.frontendmentor.io/profile/tundetega)
- Twitter - [@Datboi_tega](https://www.twitter.com/Datboi_tega)


## Acknowledgments

My mentor that gave me this challenge to be able to practice on this website to horn my skills, thanks David.
