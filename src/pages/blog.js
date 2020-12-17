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
                            <a href="/blog/blogpost" className="image">
                                <img src={pic4} alt="" />
                            </a>
                            <h3 className="major">TEST</h3>
                            <p>
                               TEST
              </p>
                            <a href="/blog/blogpost" className="special">
                                Learn more
              </a>
                        </article>

                        <article>
                            <a href="/blog/whatwebsiteyouneed" className="image">
                                <img src={pic4} alt="" />
                            </a>
                            <h3 className="major">TEST</h3>
                            <p>
                               TEST
              </p>
                            <a href="/blog/whatwebsiteyouneed" className="special">
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
