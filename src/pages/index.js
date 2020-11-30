import React from 'react';
import Layout from '../components/Layout';

import pic1 from '../assets/images/testgif2webp.webp';
import pic2 from '../assets/images/testgifwebp.webp';
import pic3 from '../assets/images/testgif3webp.webp';
import pic4 from '../assets/images/pic04webp.webp';
import pic5 from '../assets/images/pic05webp.webp';
import pic6 from '../assets/images/pic06webp.webp';
import Picture7 from '../components/Picture7';
import config from '../../config';
const IndexPage = () => (
  <Layout fullMenu>
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
          <a href="/contact" className="image">
            <img src={pic1} alt="" />
          </a>
          <div className="content">
          <h2 className="major">Get discovered</h2>
            <p>Be seen on the web and connect with your desired audience, by having your story told and being heard by the right people.</p>
            
            <a href="/contact" className="special">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/contact" className="image">
            <img src={pic3} alt="" />
          </a>
          <div className="content">
          <h2 className="major">Curated for you</h2>
            <p>
            Own a timeless website that evolves as technology does.</p>
            <a href="/contact" className="special">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/contact" className="image">
            <img src={pic2} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Competative edge</h2>
            <p>
            Embrace new web technology and take advantage of superior performance, uptime, and cost-savings.
            </p>
            <a href="/contact" className="special">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">What do we do</h2>
						<p>Anything and everything you need to put your best foot forward online. Your web soultion </p>
          <section className="features">
            <article>
              <a href="/contact" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">Website Build</h3>
              <p>
                A strong online presance that legitimises your business
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
                Customers should be seeing you in their google searches, instagram stories, facebook feeds. Anywhere the target audience is you are too!
              </p>
              <a href="/contact" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/contact" className="image">
              <Picture7/>
              </a>
              <h3 className="major">Custom Web Elements</h3>
              <p>
                You dream it, we build it. Your website is an app under the hood and has all the capabilities. 
              </p>
              <a href="/contact" className="special">
                Learn more
              </a>
            </article>
          </section>
          <ul className="actions">
            <li>
              <a href="/contact" className="button">
                Get website built
              </a>
            </li>
          </ul>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
