import React from 'react';

import Layout from '../components/Layout';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>How we are the best in web</h2>
          <p>What is it that gives our website it's edge</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          

         

          <h2 className="major">Site speed</h2>
          <p>
          Gatsby was built with performance in mind from its inception, 
          and Gatsby sites are consistently 2-3x faster than similar sites built with other tools – pages 
          load in milliseconds rather than seconds. Gatsby’s automated performance optimizations include 
          pre-fetching resources, code splitting, statically generating HTML, and Google’s PRPL Pattern.
          If you want to take a
          deeper dive into Gatsby’s performance features,
          check out Web Performance 101 – also, why is Gatsby so fast?.
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
              <a href="/#" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">Big Company. Big Website.</h3>
              <p>
              IBM Uses Gatsby to Manage Enterprise-Level Content
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">Increase lead generation.</h3>
              <p>
              Youfit uses Gatsby to increase lead generation by 60%
              </p>
              <a href="/#" className="special">
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
