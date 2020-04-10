# News NPL App: Natural Language Processing on Web Articles

Natural language processing (NLP) allows us to develop programs that interpret natural human speech.
The Wikipedia definition reads:

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

Leveraging machine learning and deep learning, NLP enables many of the systems that we are familiar with including Google Assistant, Alexa, and Siri.
Understanding human speech may come easy to us, however for computers this is no easy task. NLP requires a lot of computing resources, far more than most individuals have access to. But, with a new API called Aylien we can utilize their public facing NLP system to determine various attributes of an article or blog post.

# Project Configuration
This project uses webpack, a static module bundler, which allows us manage assets and combine them into fewer files. With the provided webpack config we can easily manage:
- Webpack Loaders and Plugins ( i.e. babel, sass, dotenv)
- Sass Styling
- Layouts and Page Design
- Service Workers (workbox)
- External APIs (aylien)
- Testing (jest)
  
# Getting started
Clone or download the project. In your project directory you will still need to install everything:

`cd` into your new folder and run:
`npm install`

## API Credentials
Sign up for an account [here](https://developer.aylien.com/signup). Signing up will get you an API key. At the time of this post, the API is free to use up to 1000 requests per day or 333 intensive requests. It is free to check how many requests you have remaining for the day.

## Declare Environment Variables

Create a new ```.env``` file in the root of your project.
Fill the .env file with your API keys like this:
```
API_ID=**************************
API_KEY=**************************
```

## Building the Application
To build the application in development mode run:

```npm run build-dev```

To build the application in production mode run:

```npm run build-prod```

## Running the Server
To start the express server run:
``` npm start ```

## Testing
Support for testing is included with the Jest framework. Basic examples are provided. To run test files, denoted by the filename ```test.js```, run:

```npm run test```
