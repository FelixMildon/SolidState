import React from 'react';

import Layout from '../components/Layout';
import pic4 from '../assets/images/ibm.jpg';
import pic5 from '../assets/images/youfit.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>How are we the best in web?</h2>
          <p>What is it that gives our website it's edge?</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          

         

          <h2 className="major">Site speed</h2>
          <p>
          We build the web with performance baked into the foundation, 
          our sites are on average 3x faster than similar sites built with alternative tools – pages 
          load in milliseconds rather than seconds. We use automated performance optimizations include 
          pre-fetching resources, code splitting, statically generating HTML, and Google’s PRPL Pattern.
          </p>

          <h2 className="major">SEO Optimised</h2>
          <p>
          Think of all the time a team spends on creating compelling, 
          optimized content just to have the search ranking penalized by a slow website. 
          A Search Engine Optimized website means a higher organic search ranking and more website traffic,
           which can mean more leads and revenue. Get as much out of your website as you 
           do your content and see the impact.
          </p>

          <h2 className="major">Modern web tools</h2>
          <p>
          Gatsby sites are built with React - currently the most popular framework for d
          eveloping web apps, and data can be pulled into your React components via GraphQL. 
          Gatsby is also built to pull data from any source so you can pick the best tool for each job 
          and function your site needs to
          Pull data from the best content management tools, the best e-commerce tools,
           whatever databases you’re using, and more.
          </p>

          <h2 className="major">Case studies</h2>

          <section className="features">
            <article>
              <a href="https://www.gatsbyjs.com/blog/2018-12-17-ibm-case-study/" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">Big Company. Big Website.</h3>
              <p>
              IBM Uses Gatsby to Manage Enterprise-Level Content
              </p>
              <a href="https://www.gatsbyjs.com/blog/2018-12-17-ibm-case-study/" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="https://www.gatsbyjs.com/blog/2018-11-16-youfit-case-study/" className="image">
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">Increase lead generation.</h3>
              <p>
              Youfit uses Gatsby to increase lead generation by 60%
              </p>
              <a href="https://www.gatsbyjs.com/blog/2018-11-16-youfit-case-study/" className="special">
                Learn more
              </a>
            </article>
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
