import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

// core components
import Card from "components/Card/Card.jsx";

import { Image } from 'semantic-ui-react';

import { portfolio } from "variables/portfolio";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  button: {
    color: "#FFFFFF"
  },
  width500: {
    maxWidth: '500px'
  }
};

const chipDivStyle = {
  paddingTop: '10px',
  display: 'flex'
};


class SimpleDialog extends React.Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };

  renderChips = value => {
    if (value && value.tech) {
      let chips = [];
      value.tech.forEach(item => {
        let chip = <Chip key={item} label={item} />;
        chips.push(chip);
      });

      return <div style={chipDivStyle}>{chips}</div>;
    }
  };

  getUrl = value => {
    if (value) {
      return `https://github.com/bachabii/${value.giturl}`;
    }
  };

  render() {
    const { classes, onClose, selectedValue, showGit, ...other } = this.props;
    return (
      <Dialog maxWidth={false} onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <div>
          <Card className={classes.card}>
            <Image wrapped size="huge" src={selectedValue.lrgurl} />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                {selectedValue.title}
              </Typography>
              <div
                className={classes.width500}
                dangerouslySetInnerHTML={{ __html: selectedValue.description }}
              />
              <Divider />
              {this.renderChips(selectedValue)}
            </CardContent>
            {showGit &&
            <CardActions>
              <Button
              size="small"
              color="primary"
              href={this.getUrl(selectedValue)}
              >
                GitHub
              </Button>
            </CardActions>
            }
          </Card>
        </div>
      </Dialog>
    );
  }
}

// SimpleDialog.propTypes = {
//   classes: PropTypes.object.isRequired,
//   onClose: PropTypes.func,
//   selectedValue: PropTypes.object,
// };

const SimpleDialogWrapped = withStyles(styles)(SimpleDialog);

class PortfolioPage extends React.Component {
  state = {
    open: false,
    selectedValue: {}
  };

  handleClickOpen = item => {
    this.setState({
      open: true,
      selectedValue: item
    });
  };

  handleClose = value => {
    this.setState({ selectedValue: value, open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <GridList cellHeight={180} cols={3} className={classes.gridList}>
          <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }} />
          {portfolio.map(item => (
            <GridListTile key={item.lrgurl}>
              <img src={item.thumburl} alt={item.title}/>
              <GridListTileBar
                title={item.title}
                subtitle={<span>by: {'ismael bachabi'}</span>}
                actionIcon={
                  <IconButton
                    onClick={() => this.handleClickOpen(item)}
                    className={classes.button}
                    color="primary"
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>

        <SimpleDialogWrapped
          selectedValue={this.state.selectedValue}
          showGit={this.state.selectedValue.giturl !== null}
          open={this.state.open}
          onClose={this.handleClose}
        />
      </div>
    );
  }
}

export default withStyles(styles)(PortfolioPage);
