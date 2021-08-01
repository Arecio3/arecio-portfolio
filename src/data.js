import blog1 from './images/blog1.png';
import searchy1 from './images/searchy1.png';
import documaker1 from './images/documaker1.png';
import hermes1 from './images/hermes1.png';
import stockchasr1 from './images/stockchasr1.png';

const FullStack = [
    {
        id: 1,
        title: "Deep Thoughts",
        tools: "React JS, Multer, Mongoose, Express",
        description: "A full stack application with user auth where you can write, publish, and view other users blog post after making an account.",
        URL: "www.domain.com",
        image: blog1,
        category: "Full Stack",
        repo: "https://github.com/Arecio3/arecios-blog"
    },
    {
        id: 2,
        title: "Searchy",
        tools: "React JS, Next JS, Tailwind, Google API",
        description: "A Google Clone ! Called Searchy :) I wanted to be able to create a search engine with googles custom search API although it is still in the first stages of development I do plan on adding more functionality to it and possibly upgrading the API.",
        URL: "https://searchy.vercel.app/",
        image: searchy1,
        category: "Full Stack",
        repo: "https://github.com/Arecio3/search-engine"
    },
    {
        id: 3,
        title: "Documaker",
        tools: "React JS, Next JS, Next-Auth, Tailwind, firebase, draft-js, draft-js-wysiwyg, Material-tailwind/react",
        description: "Log in with your google account create and save documents with a rich text editor!",
        URL: "https://documaker-arecio3.vercel.app/",
        image: documaker1,
        category: "Full Stack",
        repo: "https://github.com/Arecio3/google-docs"
    },
    {
        id: 4,
        title: "Hermes",
        tools: "React JS, Next JS, Firebase, Moment, email-validator, Material UI",
        description: "A live 1 to 1 messaging app! Log in with Google Authentication and send me a message at my email ! cuba289@gmail.com",
        URL: "https://hermes-nine.vercel.app/",
        image: hermes1,
        category: "Full Stack",
        repo: "https://github.com/Arecio3/messaging-app"
    },
    {
        id: 5,
        title: "StockChasr",
        tools: "React JS, Canvas JS, Material UI, Express, Passport, Mongoose",
        description: "Search up your favorite stocks and save them to your dashboard.",
        URL: "https://hermes-nine.vercel.app/",
        image: stockchasr1,
        category: "Full Stack",
        repo: "stockchasr.herokuapp.com"
    }
]

export default FullStack;