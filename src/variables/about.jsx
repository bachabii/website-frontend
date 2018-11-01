const aboutme =
  "An interesting fact about me is that although a lot of people think I'm Dominican or Latino, I am actually half African and Half Russian. " +
  "I was born in Benin (West Africa, next to Nigeria) and moved to the US when I was 7 years old.  " +
  "I graduated from the University of Maryland - College Park in May 2013.  <br /><br />" +
  "I am a self proclaimed nerd; I love manga, japanese anime, and pretty much anything new, shiny, and tech.  " +
  "I'm also an athlete; I played basketball and football all throughout High School.  I also play volleyball and my golf swing isn't too bad either.  " +
  "I married my high school sweetheart, who is a Social Worker now, and we have 2 Siberian Huskies (1 male, 1 female).  <br /><br />" +
  "What drew me to computer science was the challenging aspect of being able to solve real world problems in what are essentially foreign languages.  " +
  "Of course I can't lie, the 1995 movies Hackers definitely made me dream of being a world renowned hacker! (still a dream in progress).  " +
  "We live in a world that is becoming ever more reliant on technology and being one of those people who make that reliance possible is extremely fulfilling.";

const aboutwebsite =
  "I created this website as a way to practice technologies I was interested in and to showcase some of the work I've done along my journey of continuous learning.  " +
  "This 'website' consists of a frontend app (this React UI), a backend app (a Node.js API service), and a backend email service (using Go).  " +
  "The UI communicates with the API service through the use of an HTTP REST API.  " +
  "The API service communicates with the email service through the use of RabbitMQ.  <br /><br />" +
  "<strong>UI Code:</strong>  <a href='https://github.com/bachabii/website-frontend'>https://github.com/bachabii/website-frontend</a> <br />" +
  "<strong>API Code:</strong>  <a href='https://github.com/bachabii/website-backend'>https://github.com/bachabii/website-backend</a> <br />" +
  "<strong>Email Service Code:</strong>  TBD <br /><br />" +
  "<strong>TODO:</strong>  <br />" +
  "<br /><br />" +
  "<strong>Technologies Utilized:</strong>  <br />" +
  " - React, React Router v4, Node.js, Mongo/Mongoose, Go, RabbitMQ, Heroku <br /><br />" +
  "<strong>Content Information:</strong>  <br />" +
  "<strong>Resume - </strong> This page consists of all my resume information (Work Experience, Education, and Skills).  <br />" +
  "<strong>Portfolio - </strong> This page consists of screenshots of all the projects I've completed.  Upon clicking on the information icon for an image, a large modal will be displayed that contains a large screenshot of the project, information about the project, and a list of relevant technologies utilized.  <br />" +
  "<strong>Contact Me - </strong> This page consists of my contact information.  There is also a form present that will utilize the email service and allow a visitor to send me an email directly from this website. <br />";

const pictures = [
  {
    img: "https://farm2.staticflickr.com/1791/43762374442_b187c6835d_o.jpg",
    title: "Our Wedding Day",
    cols: 3,
    rows: 5
  },
  {
    img: "https://farm2.staticflickr.com/1836/43811009221_c137d53803_o.jpg",
    title: "South Africa",
    cols: 1,
    rows: 4
  },
  {
    img: "https://farm2.staticflickr.com/1793/43762374752_c0a3e17f8e_o.jpg",
    title: "The puppies",
    cols: 2,
    rows: 4
  },
  {
    img: "https://farm1.staticflickr.com/928/43811009481_1e9f1e4478_o.jpg",
    title: "Neve as a puppy",
    cols: 2,
    rows: 4
  },
  {
    img: "https://farm1.staticflickr.com/930/43762375172_4569c08b4b_o.jpg",
    title: "My Nascar bday surprise",
    cols: 1,
    rows: 4
  },
  {
    img: "https://farm2.staticflickr.com/1779/43811009661_dc937fae84_o.jpg",
    title: "My wife's graduation",
    cols: 1,
    rows: 4
  },
  {
    img: "https://farm2.staticflickr.com/1814/43762375372_147581f616_o.jpg",
    title: "Xmas 2017",
    cols: 2,
    rows: 4
  },
  {
    img: "https://farm1.staticflickr.com/853/43811009691_aa325d98d0_o.jpg",
    title: "Maou as a puppy",
    cols: 2,
    rows: 4
  },
  {
    img: "https://farm2.staticflickr.com/1838/43762375722_25fcf3ab4c_o.jpg",
    title: "Maou and Neve playing",
    cols: 1,
    rows: 4
  },
  {
    img: "https://farm2.staticflickr.com/1778/43811010251_733f6ec08c_o.jpg",
    title: "My graduation",
    cols: 3,
    rows: 3
  },
  {
    img: "https://farm1.staticflickr.com/934/43762376092_9457092294_o.jpg",
    title: "Elephant ride",
    cols: 1,
    rows: 4
  },
  {
    img: "https://farm2.staticflickr.com/1774/43811010601_9f53f45254_o.jpg",
    title: "Dolphin playtime",
    cols: 2,
    rows: 4
  },
  {
    img: "https://farm2.staticflickr.com/1839/43762376242_41aecf0042_o.jpg",
    title: "Dancing it up with my mom",
    cols: 2,
    rows: 4
  },
  {
    img: "https://farm2.staticflickr.com/1816/43762376502_cf815ba376_o.jpg",
    title: "Baby lion",
    cols: 1,
    rows: 4
  },
  {
    img: "https://farm2.staticflickr.com/1778/29941094158_1458eb1f1b_o.jpg",
    title: "Belgium",
    cols: 4,
    rows: 2
  }
];

module.exports = { aboutme, aboutwebsite, pictures };
