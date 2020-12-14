import React from 'react';
import pic4 from '../assets/images/pic04webp.webp';
import Layout from '../components/Layout';

const IndexPage = () => (
    <Layout fullMenu>
        <section id="wrapper">
            <header>
                <div className="inner">
                    <h2>BlOG</h2>
                    <p>BlOG BlOGBlOGBlOGBlOGBlOGBlOGBlOGBlOGBlOG</p>





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
                        
                    </section>
                </div>
            </header>
        </section>
    </Layout>
);

export default IndexPage;
