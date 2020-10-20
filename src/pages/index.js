import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/testgif2.gif';
import pic2 from '../assets/images/testgif.gif';
import pic3 from '../assets/images/testgif3.gif';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
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
            None of the usual headaches, changes are much easier.
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
          <h2 className="major">Brand visibility</h2>
            <p>
            Get discovered and connect with your target audience.
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
            Distinguishing yourself from your competitors by delivering unique value that helps you
             claim a greater share of the market.
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
              <a href="/#" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">Website Build</h3>
              <p>
                Get a designer website to show off your business.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">E-Commerce</h3>
              <p>
              Over 50% of people will abandon a site if it takes more than 3 seconds to load, so you better be fast. 
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic6} alt="" />
              </a>
              <h3 className="major">Digital marketing</h3>
              <p>
                Connect to your customers
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic7} alt="" />
              </a>
              <h3 className="major">Custom web elements</h3>
              <p>
                A feature like a calander or something fancier perhaps?
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
