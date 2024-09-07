# Create a Quiz using AWS Amplify and Cognito (with CI/CD)
Notion [link](https://extreme-ketch-98c.notion.site/Building-a-React-App-with-Amplify-Cognito-and-CI-CD-with-GitHub-b4bb965232b24081a936ecd1fa3f0b8f?pvs=4) demo setup
## Terminal Commands

`npm install -g @aws-amplify/cli`

`amplify configure`

`npx create-react-app <name of your app>`

`cd <name of your app>`

`amplify init`

`amplify add auth`

`amplify push`

`npm install aws-amplify @aws-amplify/ui-react`

`npm start`

`git init`

`git add .`

`git commit -m "Initial commit"`

`git branch -M main`

`git remote add origin <repository URL>`

`git push -u origin main`

## Code Files

- **App.js**: The React application that's configured to use Cognito for authentication
- **Quiz.js**: The Quiz component
- **quizData.js**: The hard-coded questions and answers for the quiz
