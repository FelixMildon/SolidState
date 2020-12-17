import React from 'react';
import pic4 from '../assets/images/pic04webp.webp';
import Layout from '../components/Layout';

const IndexPage = () => (
    <Layout fullMenu>
        <section id="wrapper">
            <header>
                <div className="inner">
                    <h2>Blog</h2>
                    <p>We publish content about:</p>
                    <ul>
                    <li><h3>SEO and Web Presense to be found online</h3></li>
                    <li><h3>Preformance in Web Browsers</h3></li>
                    <li><h3>Selling Online</h3></li>
                    <li><h3>...and much much more.</h3></li>
                    </ul>
                    <section className="features">
                        <article>
                            <a href="/blog/how-to-increase-website-traffic" className="image">
                                <img src={pic4} alt="website on laptop graphic" />
                            </a>
                            <h3 className="major">How to increase website traffic</h3>
                            <p>
                               Get more people coming to learn about your offerings
              </p>
                            <a href="/blog/how-to-increase-website-traffic" className="special">
                                Learn more
              </a>
                        </article>

                        <article>
                            <a href="/blog/what-website-you-need" className="image">
                                <img src={pic4} alt="website on laptop graphic" />
                            </a>
                            <h3 className="major">What website you need</h3>
                            <p>
                               Lead generate, target market and selling online.
              </p>
                            <a href="/blog/what-website-you-need" className="special">
                                Learn more
              </a>
                        </article>
                        
                    </section>
                </div>
            </header>
        </section>
    </Layout>
);

export default IndexPage;
