# Evaluate text sentiment using Natural Language Processing (NLP)

- Build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites.

- Sentiment Analysis via the MeaningCloudAPI.

## Instructions

- Clone project directory. Install everything via the commands below:

`> cd <project directory>`

`> npm install.`

- Create a new `.env` file in the root of your project.
- Fill the `.env` file with your API keys like this: `API_KEY=**************************`

## To run project
1. Open two terminals in project directory.
2. In the second terminal window: Build the code `> npm run build-prod`
3. In the second terminal window: Start the server `> npm run start`
4. In the first terminal window: Run the Dev Server `> npm run build-dev`; this will automatically pop open `http://localhost:8080`
5. Type a sentence in the dialog box and the Sentiment Analysis results will be displayed under 'Form Results'.

## To run Jest tests
`> cd <project directory>`

`> npm run test`
