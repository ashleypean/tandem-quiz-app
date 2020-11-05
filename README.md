# Tandem Quiz App
Hi there! 	&#x1f44b;  

My name is Ashley Pean and this is my submission for the Tandem Apprenticeship. 

### How to Use
1. Clone the repository onto your local machine  

    ```git clone https://github.com/ashleypean/tandem-quiz-app-challenge.git```
    ---
2. Install all necessary the packages and dependencies. This project uses React, so you will need to have it installed in order for it to work.  
   **npm** 

    ```npm install```  
    
    OR
    
   **yarn**  

    ```yarn add```
    ---
3. Run the app on your localhost  

    ```npm run start```&nbsp;  OR &nbsp;```yarn start```
    ---
4. Navigate to localhost:3000 or wherever your developement server opens to automatically.
    
### Notes

I am currently working on hosting the application on AWS, if you are interested in seeing the progress on this project, feel free to **watch** or come back from time to time for periodic updates!

### Known Issues

#### 1. Hover on Quiz Page

Expected Behavior: While on the quiz page, the user should be able to hover over their answer choices and see a blue highlight over the answer choice as well as see the answer choice text in bold. Once the user clicks on their answer choice, the highlight should remain on that answer choice until they select another.

Issue:  After the first question is submitted, the highlight option only functions for the last answer choice, but does not highlight for the first 3. The text does still remain bold as the user hovers their mouse. The user can sometimes see a highlight on the answer choice once they click to select it. 

Pictures: ***(Coming soon - need to add more Jest testing)***

Possible Solutions/Considerations: There is likely an issue with the JavaScript and CSS implementations of the hover/highlihgt effect, refactoring the onHover selector function should fix the issue. 

Where does the Problem Lie: Unsure where the issue may be coming through in the code, but I suggest starting with ```src/components/QuizDetails ``` and ```src/styles/QuizDetails```

*** May need to open an official ticket under Issues to keep track of progress. 

#### 2. Overline/Underline Styling is Inconsistent

Expected Behavior: While hovering over the navigation links, the user should see an underline and overline styling on the active page as well as the link that is being hovered over. 

Issue: While hovering the "Instructions" and "Take a Quiz" navigation items the overline and underline styling is inconsistent. It will work for the middle nav item, but when hovering over the third, the overline either will not activate, or it will activate over the second (incorrect) nav item

Pictures: ***(Coming soon - need to add more Jest testing)***

Possible Solutions/Considerations: Same as the hover issue, it is likely an error with the CSS implementation. May need to consider adding styling with JavaScript to make it more consistent. 

Where does the Problem Lie: Unsure. Checking ```src/components/Navbar ``` and ```src/styles/Navbar ``` should narrow down the search.

### Upcoming Features

#### 1. ***Build a Quiz*** 

What: The user will have the option to create their own quiz and take the quiz once it is created

***Change Considerations***: 
- [ ] Another component will need to be created to provide a list view of all of the enabled quizzes
 - [ ] ***Where will the quizzes be stored?*** Will need to decide if we should use IndexedDB or a database instance through MongoDB or DynamoDB ***(consider: the site will be hosted through AWS)***
 - [ ] ***What quiz formatting options will the user have when creating the quiz?***
   - [ ] True/False Questions
   - [ ] ***Word count*** - For styling purposes, it does not make sense to have unlimited an unlimited word count when creating questions. Need to find a reasonable limit for question word/character count.
   - [ ] ***Image Uploads*** - If an external database/external database service is being used, it may prove useful to allow users to upload images for questions as well. (Will need to limit the word count even more for image questions to preserve spacing)
   - [ ] Question Limit to prevent spamming

#### 2. ***Allow multiple rounds***

What: Currently the user can only play one round of ten questions before the quiz is completed. I was unsure if the user should be able to play multiple rounds and/or if the last round is able to have less than 10 questions, so I decided to opt for one round of 10 questions only.

***Change Considerations***
- [ ] Refactor the current round component to be able to detect which round the user is currently on instead of defaulting to round 1 only. 
- [ ] Will need to refactor how the questions are fetched and randomized. If so, I suggest fetching all of the questions at once (if the quiz is under a certain size limit). 

#### 3. ***Hide Score***

What: Currently the user will see their score at all times 

***Change Considerations*** 
- [ ] Using display vs visibilty property in order to preserve styling of the page regardless of score count
- [ ] Allowing the user to toggle the score count mid-exam or just providing that option right before the exam

#### 4. ***Instructions Modal***
What: Currently the user can only remain in the quiz and does not have access to the instructions during the quiz. Adding a link in the nav of the quiz that opens a model with the quiz instructions may prove beneficial for user experience. 

***Change Considerations***
- [ ] React does not currently hold support for modal components so may need to use jQuery UI, or a third-party library to activate the modal component.

#### 5. ***Accessibility Options***
What: The instructions have options for taking the quiz with only keyboard input (a,b,c,d) or (tab,enter). But the code doesn’t currently support it 

***Change Consideratons***
- [ ] Create an option for up and down arrows as well
- [ ] Creat option for a/b/c/d
- [ ] Create option for tab and enter
- [ ] ***User controlled option?*** Adding a prompt on the instructions page to allow user to select the keys they would like to correspond with button clicks 

#### 6. Light/Dark Mode
What: Fairly straightforward. Allow the user to choose between light and dark mode. 

***Change Consideratons***
- [ ] Add a toggle on header of page that allows user to switch from light and dark mode. Also allow a key press that triggers it for user accessibility  
- [ ] ***Option*** Creating different themes a user can select through. Current theme also needs a better UI, but I’m not designer y’know ¯\_(ツ)_/¯

