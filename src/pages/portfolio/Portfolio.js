import './portfolio.css';
import Blog from '../../images/blog1.png';
import Searchy from '../../images/searchy1.png';
import Documaker from '../../images/documaker2.png';
import Hermes from '../../images/hermes1.png';
import StockChasr from '../../images/stockchasr1.png';
import PopUp from '../../components/popup/PopUp';

function Portfolio() {
    return (
    <div>
        <section className="portfolio-section section" id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="sectionTitle">
                        <h2 data-heading="Portfolio">Latest Projects</h2>
                    </div>
                </div>
                {/* Filter starts */}
                <div className="row">
                    <div className="portfolioFilter">
                        <span className="filterItem outer-shadow active" data-target="all">All</span>
                        <span className="filterItem" data-target="full-stack">Full Stack</span>
                        <span className="filterItem" data-target="web-application">Web Applications</span>
                        <span className="filterItem" data-target="mobile-apps">Mobile Apps</span>
                    </div>
                </div>
                {/* Filter end */}

                {/* Portfolio Projects start */}
                <div className="row portfolio-items">
                    {/* portfolio items start */}
                    <div className="portfolio-item">
                        <div className="portfolio-item-inner outer-shadow">
                            <div className="portfolio-item-img">
                                <img src={Blog} alt="" data-category="full-stack" data-screenshots="images/blog2.png, images/blog3.png, images/blog4.png, images/blog5.png, images/blog6.png, images/blog7.png"/>
                                {/* View Project Button */}
                                <span className="view-project" >View Project</span>
                            </div>
                            <p className="portfolio-item-title">Deep Thoughts</p>
                            {/* Portfolio items details start */}
                            <div className="portfolio-item-details">
                                <div className="row">
                                    <div className="description">
                                        <h3>Project Brief:</h3>
                                        <p>A full stack application with user auth where you can write, publish, and view other users blog post after making an account.</p>
                                    </div>
                                    <div className="info">
                                        <h3>Project Info</h3>
                                        <ul>
                                            <li>Date - <span>2021</span></li>
                                            <li>Tools - <span>React JS, Multer, Mongoose, Express, Bcrypt</span></li>
                                            <li>Site - <span>N/A</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Portfolio items details end */}
                        </div>
                    </div>
                    {/* portfolio item  */}
                    {/* portfolio items start */}
                    <div className="portfolio-item">
                        <div className="portfolio-item-inner outer-shadow">
                            <div className="portfolio-item-img">
                                <img src={Searchy} alt="" data-category="full-stack" data-screenshots="images/searchy1.png, images/searchy2.png, images/searchyMobile1.png, images/searchyMobile2.png"/>
                                {/* View Project Button */}
                                <span className="view-project" >View Project</span>
                            </div>
                            <p className="portfolio-item-title">Searchy</p>
                            {/* Portfolio items details start */}
                            <div className="portfolio-item-details">
                                <div className="row">
                                    <div className="description">
                                        <h3>Project Brief:</h3>
                                    </div>
                                    <div className="info">
                                        <h3>Project Info</h3>
                                        <ul>
                                            <li>Date - <span>2021</span></li>
                                            <li>Tools - <span>React JS, Next JS, Tailwind</span></li>
                                            <li>Site - <span><a href="https://searchy.vercel.app/"></a></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Portfolio items details end */}
                        </div>
                    </div>
                    {/* portfolio item  */}
                    {/* portfolio items start */}
                    <div className="portfolio-item">
                        <div className="portfolio-item-inner outer-shadow">
                            <div className="portfolio-item-img">
                                <img src={Documaker} alt="" data-category="full-stack" data-screenshots="images/documaker1.png, images/documaker2.png, images/documaker3.png, images/documaker4.png, images/documaker5.png"/>
                                {/* View Project Button */}
                                <span className="view-project" >View Project</span>
                            </div>
                            <p className="portfolio-item-title">Documaker</p>
                            {/* Portfolio items details start */}
                            <div className="portfolio-item-details">
                                <div className="row">
                                    <div className="description">
                                        <h3>Project Brief:</h3>
                                    </div>
                                    <div className="info">
                                        <h3>Project Info</h3>
                                        <ul>
                                            <li>Date - <span>2021</span></li>
                                            <li>Tools - <span>React JS, Next JS, Next-Auth, Tailwind, firebase, draft-js, draft-js-wysiwyg, Material-tailwind/react</span></li>
                                            <li>Site - <span><a href="https://documaker-arecio3.vercel.app/">Documaker</a></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Portfolio items details end */}
                        </div>
                    </div>
                    {/* portfolio item  */}
                    {/* portfolio items start */}
                    <div className="portfolio-item">
                        <div className="portfolio-item-inner outer-shadow">
                            <div className="portfolio-item-img">
                                <img src={Hermes} alt="" data-category="full-stack" data-screenshots="images/hermes1.png, images/hermes2.png, images/hermesMobile.png"/>
                                {/* View Project Button */}
                                <span className="view-project" >View Project</span>
                            </div>
                            <p className="portfolio-item-title">Hermes</p>
                            {/* Portfolio items details start */}
                            <div className="portfolio-item-details">
                                <div className="row">
                                    <div className="description">
                                        <h3>Project Brief:</h3>
                                    </div>
                                    <div className="info">
                                        <h3>Project Info</h3>
                                        <ul>
                                            <li>Date - <span>2021</span></li>
                                            <li>Tools - <span>React JS, Next JS, Firebase, Moment, email-validator, Material UI</span></li>
                                            <li>Site - <span><a href="https://hermes-nine.vercel.app/">Hermes</a></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Portfolio items details end */}
                        </div>
                    </div>
                    {/* portfolio item  */}
                    {/* portfolio items start */}
                    <div className="portfolio-item">
                        <div className="portfolio-item-inner outer-shadow">
                            <div className="portfolio-item-img">
                                <img src={StockChasr} alt="" data-category="full-stack" data-screenshots="images/stockchasr1.png, images/stockchasr2.png, images/stockchasr3.png"/>
                                {/* View Project Button */}
                                <span className="view-project" >View Project</span>
                            </div>
                            <p className="portfolio-item-title">StockChasr</p>
                            {/* Portfolio items details start */}
                            <div className="portfolio-item-details">
                                <div className="row">
                                    <div className="description">
                                        <h3>Project Brief:</h3>
                                    </div>
                                    <div className="info">
                                        <h3>Project Info</h3>
                                        <ul>
                                            <li>Date - <span>2021</span></li>
                                            <li>Tools - <span>React JS, Canvas JS, Material UI, Express, Passport, Mongoose</span></li>
                                            <li>Site - <span><a href="https://stockchasr.herokuapp.com/">StockChasr</a></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* Portfolio items details end */}
                        </div>
                    </div>
                    {/* portfolio item  */}
                </div>
                {/* Portfolio Projects end */}
            </div>
        </section>
        <PopUp />
    </div>
    )
}

export default Portfolio
