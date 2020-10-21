import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/testgif2.gif';
import pic2 from '../assets/images/testgif.gif';
import pic3 from '../assets/images/testgif3.gif';
import pic4 from '../assets/images/pic04new.jpg';
import pic5 from '../assets/images/pic05new.jpeg';
import pic6 from '../assets/images/pic06NEW.jpg';
import pic7 from '../assets/images/pic07.jpg';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        {/*<div className="logo">
          <span className="icon fa-diamond"></span>
        </div>*/}
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic1} alt="" />
          </a>
          <div className="content">
          <h2 className="major">Easy for you</h2>
            <p>
            You're in full control of your websites content, customer data and analytics.
            </p>
            
            <a href="/#" className="special">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic2} alt="" />
          </a>
          <div className="content">
          <h2 className="major">Get discovered</h2>
            <p>
            Have the best brand visablity and connect with your target audience.
            </p>
            <a href="/#" className="special">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic3} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Competative edge</h2>
            <p>
            Use technology to bring your company to capacity. 
            </p>
            <a href="/#" className="special">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">What do we do</h2>
						<p>Enable businesses to fully leverage the power of web services by delivering evolutionary websites.</p>
          <section className="features">
            <article>
              <a href="/contact" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">Website Build</h3>
              <p>
                A strong online presance that says "we're open for businesses"
              </p>
              <a href="/contact" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/contact" className="image">
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">E-Commerce</h3>
              <p>
              Over 50% of people will abandon a site if it takes more than 3 seconds to load, so you better be fast. 
              </p>
              <a href="/contact" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/contact" className="image">
                <img src={pic6} alt="" />
              </a>
              <h3 className="major">Digital marketing</h3>
              <p>
                If you're not seen you're not heard.
              </p>
              <a href="/contact" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/contact" className="image">
                <img src={pic7} alt="" />
              </a>
              <h3 className="major">Custom Web Elements</h3>
              <p>
                We handcraft your website so adding in features wont "break the code"
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
          </section>
          <ul className="actions">
            <li>
              <a href="/#" className="button">
                Browse All
              </a>
            </li>
          </ul>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
