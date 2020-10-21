import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">Contact</h2>
        <p>
          Send us a msg on any of the platforms below:
        </p>
        <form method="post" action="/#">
          <div className="fields">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" />
            </li>
          </ul>
        </form>
        <ul className="contact">
          <li className="fa-home">{config.address}</li>

          <li className="fa-phone">{config.phone}</li>

          {config.socialLinks.map(social => {
            const { icon, url, name } = social;
            return (
              <li className={`${icon}`} key={url}>
                <a href={url}>{name}</a>
              </li>
            );
          })}
        </ul>
        <ul className="copyright">
          <li>&copy; 2020 Netgala.</li>
          <li>
            Best Websites in the country.
          </li>
        </ul>
      </div>
    </section>
  );
}
