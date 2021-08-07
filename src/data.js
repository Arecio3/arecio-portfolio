import blog1 from './images/blog1.png';
import blog2 from './images/blog2.png';
import blog3 from './images/blog3.png';
import blog4 from './images/blog4.png';
import blog5 from './images/blog5.png';
import blog6 from './images/blog6.png';
import blog7 from './images/blog7.png';
import searchy1 from './images/searchy1.png';
import searchy2 from './images/searchy2.png';
import searchyMobile1 from './images/searchyMobile1.png';
import searchyMobile2 from './images/searchyMobile2.png';
import documaker1 from './images/documaker1.png';
import documaker2 from './images/documaker2.png';
import documaker3 from './images/documaker3.png';
import documaker4 from './images/documaker4.png';
import documaker5 from './images/documaker5.png';
import hermes2 from './images/hermes2.png';
import hermes1 from './images/hermes1.png';
import hermesMobile from './images/hermesMobile.png';
import stockchasr1 from './images/stockchasr1.png';
import stockchasr2 from './images/stockchasr2.png';
import stockchasr3 from './images/stockchasr3.png';

const FullStack = [
    {
        id: 1,
        title: "Deep Thoughts",
        tools: "React JS, Multer, Mongoose, Express",
        description: "Make an account and create blogs of your Deep Thoughts with the help of Mongoose and Express routes a user will have secure and private accounts, read they're own as well as other users blogs in the main dashboard if the blog was posted by the user then only they are allowed to edit the blog, if not they are only show the date, time, and user associated with the blog. You are also permitted with the help of Multer upload an image from your computer for your blog thumbnail and user profile. Not only are you able to search blogs through the dashboard but by also by category.",
        URL: "www.domain.com",
        image: blog1,
        image2: blog2,
        image3: blog3,
        image4: blog4,
        image5: blog5,
        image6: blog6,
        image7: blog7,
        category: "Full Stack",
        repo: "https://github.com/Arecio3/arecios-blog"
    },
    {
        id: 2,
        title: "Searchy",
        tools: "React JS, Next JS, Tailwind, Google API",
        description: "A Google Clone ! Called Searchy :) I wanted to be able to create a search engine with googles custom search API although it is still in the first stages of development I do plan on adding more functionality to it and possibly upgrading the API but for now you can search random searches and get the correct searches back and it also grabs your current city in the bottom.",
        URL: "https://searchy.vercel.app/",
        image: searchy1,
        image2: searchy2,
        image3: searchyMobile1,
        image4: searchyMobile2,
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
        image2: documaker2,
        image3: documaker3,
        image4: documaker4,
        image5: documaker5,
        category: "Full Stack",
        repo: "https://github.com/Arecio3/google-docs"
    },
    {
        id: 4,
        title: "Hermes",
        tools: "React JS, Next JS, Firebase, Moment, email-validator, Material UI",
        description: "A live 1 to 1 messaging app! Log in with Google Authentication and send me a message at my email cuba289@gmail.com. I plan on upgrading the UI for mobile and add the ability to create groups and possibly channels.",
        URL: "https://hermes-nine.vercel.app/",
        image: hermes1,
        image2: hermes2,
        image3: hermesMobile,
        category: "Full Stack",
        repo: "https://github.com/Arecio3/messaging-app"
    },
    {
        id: 5,
        title: "StockChasr",
        tools: "React JS, Canvas JS, Material UI, Express, Passport, Mongoose",
        description: "Search up your favorite stocks through ticker symbol and the help of two APIs MarketStack and Polygon gave us data such as stock price, CEO, industry, website, description and save them to your dashboard.",
        URL: "stockchasr.herokuapp.com",
        image: stockchasr1,
        image2: stockchasr2,
        image3: stockchasr3,
        category: "Full Stack",
        repo: "https://github.com/adamalcantara/stockchasr"
    }
]

export default FullStack;