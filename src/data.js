import halo1 from './images/halo1.png';
import halo2 from './images/halo2.png';
import halo3 from './images/halo3.png';
import halo4 from './images/halo4.png';
import halo5 from './images/halo5.png';
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
import nozama1 from './images/nozama1.png';
import nozama2 from './images/nozama2.png';
import nozama3 from './images/nozama3.png';
import nozama4 from './images/nozama4.png';
import nozama5 from './images/nozama5.png';
import nozama6 from './images/nozama6.png';
import nozama7 from './images/nozama7.png';
import hb1 from './images/HB1.png';
import hb2 from './images/HB2.png';
import hb3 from './images/HB3.png';
import hb4 from './images/HB4.png';
import hb5 from './images/HB5.png';
import hb6 from './images/HB6.png';
import hb1Mob from './images/HB1Mob.png';
import hb2Mob from './images/HB2Mob.png';
import hb3Mob from './images/HB3Mob.png';
import hb4Mob from './images/HB4Mob.png';
import hb5Mob from './images/HB5Mob.png';
import hb6Mob from './images/HB6Mob.png';
import vh1 from './images/VH1.png';
import vh2 from './images/VH2.png';
import vh3 from './images/VH3.png';
import vh4 from './images/VH4.png';
import vh5 from './images/VH5.png';
import vh1Mob from './images/VH1Mob.png';
import vh2Mob from './images/VH2Mob.png';
import vh3Mob from './images/VH3Mob.png';
import vh4Mob from './images/VH4Mob.png';
import vh5Mob from './images/VH5Mob.png';
import vh6Mob from './images/VH6Mob.png';
import pnado1 from  './images/popnado1.png'
import pnado2 from  './images/popnado2.png'
import pnado3 from  './images/popnado3.png'
import pnado4 from  './images/popnado4.png'

export const FullStack = [
    {
        id: 1,
        title: "Halo",
        tools: "React JS, Multer, Mongoose, Express",
        description: "A Social Media App (As of right now only Google Login is working)",
        URL: "https://social-media-67ld8voix-arecio3.vercel.app/",
        image: halo1,
        image2: halo2,
        image3: halo3,
        image4: halo4,
        image5: halo5,
        category: "Full Stack",
        repo: "https://github.com/Arecio3/social-media"
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
        URL: "https://bit.ly/stockchasr",
        image: stockchasr1,
        image2: stockchasr2,
        image3: stockchasr3,
        category: "Full Stack",
        repo: "https://github.com/adamalcantara/stockchasr"
    },
    {
        id: 6,
        title: "Nozama",
        tools: "React JS, Stripe, Moment, firebase, noSQL, Material-UI",
        description: "Amazons evil twin Nozama ! I wanted to eventually open up my own E-Commerce store or help someone build there's so what better way then to model the most successful one of them all ! Of course eventually I intend to give it a new look in version 1.5 right now I'm using Stripe in order to mock an actual transaction right now it's only being ran in test mode right now because I haven't gave it my finishing touches but still you can put in your info or 42 repeating and mock a real transaction (don't expect any of the products to ever get there) you can add as many items as you like with the number of items being added to the cart shown in real time, the checkout page has a calculated total of all the products combined no shipping fee :). When you hit checkout it process the payment and gives you a order receipt, thank you for shopping at Nozama !",
        URL: "https://nozama-53fd6.web.app/",
        image: nozama1,
        image2: nozama2,
        image3: nozama3,
        image4: nozama4,
        image5: nozama5,
        image6: nozama6,
        image7: nozama7,
        category: "Full Stack",
        repo: "https://github.com/Arecio3/nozama"
    }
]

export const Frontend = [
    {
        id: 7,
        title: "Popnado",
        tools: "Python 3, Folium, Pandas",
        description: "Have you ever wanted an app that can tell you where the Volcanoes in the U.S are as well as a complete interactive map! I do plan on expanding population data right now is only color coded.",
        URL: "https://arecio3.github.io/popnado/",
        image: pnado1,
        image2: pnado2,
        image3: pnado3,
        image4: pnado4,
        category: "Front End",
        repo: "https://github.com/Arecio3/popnado"
    },
    {
        id: 8,
        title: "HummingBird",
        tools: "React JS, i18njs, styled-components, Formspree, JavaScript",
        description: "A front end website for a Landscaping business called Hummingbird if you need to contact someone for lawn services in Tampa, Florida contact them through the contact page! Thanks to formspree",
        URL: "https://hummingbirdlawn.com/",
        image: hb1,
        image2: hb2,
        image3: hb3,
        image4: hb4,
        image5: hb5,
        image6: hb6,
        image7: hb1Mob,
        image8: hb2Mob,
        image9: hb3Mob,
        image10: hb4Mob,
        image11: hb5Mob,
        image12: hb6Mob,
        category: "Front End",
        repo: "https://github.com/Arecio3/Humming_bird"
    },
    {
        id: 9,
        title: "Value Haulers",
        tools: "React JS, i18njs, styled-components, Formspree, JavaScript",
        description: "A front end website for a National Trucking business called Value Haulers if your a business in the United States and needs a load contact them through the contact page! Thanks to formspree",
        URL: "https://valuehaulers.com/",
        image: vh1,
        image2: vh2,
        image3: vh3,
        image4: vh4,
        image5: vh5,
        image6: vh1Mob,
        image7: vh2Mob,
        image8: vh3Mob,
        image9: vh4Mob,
        image10: vh5Mob,
        image11: vh6Mob,
        category: "Front End",
        repo: "https://github.com/Arecio3/value-haulers"
    }
]
