// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import BubbleChart from "@material-ui/icons/BubbleChart";
import Email from "@material-ui/icons/Email";
// core components/views
import HomePage from "views/Home/Home.jsx";
import ResumePage from "views/Resume/Resume.jsx";
import PortfolioPage from "views/Portfolio/Portfolio.jsx";
import ContactPage from "views/Contact/Contact.jsx";

const dashboardRoutes = [
  {
    path: "/home",
    sidebarName: "Home",
    navbarName: "Homepage",
    icon: Dashboard,
    component: HomePage
  },
  {
    path: "/resume",
    sidebarName: "Resume",
    navbarName: "Resume",
    icon: Person,
    component: ResumePage
  },
  {
    path: "/portfolio",
    sidebarName: "Portfolio",
    navbarName: "Portfolio",
    icon: BubbleChart,
    component: PortfolioPage
  },
  {
    path: "/contact",
    sidebarName: "Contact Me",
    navbarName: "Contact Me",
    icon: Email,
    component: ContactPage
  },
  { redirect: true, path: "/", to: "/home", navbarName: "Redirect" }
];

export default dashboardRoutes;
