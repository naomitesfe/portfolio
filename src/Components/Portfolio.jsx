/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "IOT Smart Home",
    description:
      "This is an IOT Smart Home Automation using Raspberry pi and Azure Cloud Services. This project is a web server that can be accessed frome anywhere in the world and that allows users to control, monitor and automate their home environment.",
    url: "https://github.com/naomitesfe/iot-smart-home",
  },
  {
    title: "IT Helpdesk Website",
    description:
      "This is an IT Help Desk System built using PHP and SQL. It allows users to report their issues and get them resolved by the IT team. The system keeps track of all the issues reported, their status, and the IT team member handling them. I used HTML, CSS, JavaScript to develop the front-end and back-end of the app.",
    url: "https://github.com/naomitesfe/IT_helpdesk_website",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://github.com/naomitesfe/portfolio",
  },
  {
    title: "Careers Website",
    description:
      "This is a careers website JJ(Jobs Junction), a platform dedicated to connecting job seekers with their dream jobs. The website provides a user-friendly interface for exploring job listings, submitting applications, and learning more about potential employers.",
    url: "https://github.com/naomitesfe/JJ-careers-website",
  },
];
const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
           style={{height: "90%", width: "100%", objectFit: "cover"}}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
