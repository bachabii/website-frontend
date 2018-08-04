import React from "react";
import PropTypes from "prop-types";

// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Accessibility from "@material-ui/icons/Accessibility";
import Button from '@material-ui/core/Button';

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import { aboutme, aboutwebsite, pictures } from "variables/about";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class HomePage extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Store />
                </CardIcon>
                <p className={classes.cardCategory}>Experience</p>
                <h3 className={classes.cardTitle}>
                  <a href="/resume" rel="noopener noreferrer" target="_blank">
                    <Button variant="contained" color="default">
                      {1900 + new Date().getYear() - 2013} Years
                    </Button>
                  </a>
                </h3>
              </CardHeader>
              <CardFooter stats />
            </Card>
          </GridItem>

          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Icon href="/">info_outline</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Github</p>
                <h3 className={classes.cardTitle}>
                  <a
                    href="https://github.com/bachabii"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Button variant="contained" color="primary">
                      Github
                    </Button>
                  </a>
                </h3>
              </CardHeader>
              <CardFooter stats />
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Accessibility />
                </CardIcon>
                <p className={classes.cardCategory}>LinkedIn</p>
                <h3 className={classes.cardTitle}>
                  <a
                    href="https://www.linkedin.com/in/ibachabi/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Button variant="contained" color="primary">
                      LinkedIn
                    </Button>
                  </a>
                </h3>
              </CardHeader>
              <CardFooter stats />
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>About: Me</h4>
                <p className={classes.cardCategoryWhite}>
                  Information about me from a professional and personal standpoint
                </p>
              </CardHeader>
              <CardBody>
                <div dangerouslySetInnerHTML={{ __html: aboutme }} />
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="info">
                <h4 className={classes.cardTitleWhite}>About: Website</h4>
                <p className={classes.cardCategoryWhite}>
                  Information about this website from a technical standpoint
                </p>
              </CardHeader>
              <CardBody>
                <div dangerouslySetInnerHTML={{ __html: aboutwebsite }} />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <div className={classes.root}>
            <GridItem xs={12} sm={12} md={12}>
              <GridList cellHeight={160} className={classes.gridList} cols={3}>
                {pictures.map(tile => (
                  <GridListTile
                    key={tile.img}
                    cols={tile.cols || 1}
                    rows={tile.rows || 1}
                  >
                    <img src={tile.img} title={tile.title} alt={tile.title} />
                  </GridListTile>
                ))}
              </GridList>
            </GridItem>
          </div>
        </GridContainer>
      </div>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(HomePage);
