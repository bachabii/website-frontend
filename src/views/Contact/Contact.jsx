import React from "react";
import classNames from 'classnames';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from "@material-ui/core/Icon";

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';

// core components
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

import { API_ROOT } from "../../config/api-config";

const style = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  textField: {
    width: 500
  }
};

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon
};

const styles1 = theme => ({
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: theme.palette.primary.dark
  },
  warning: {
    backgroundColor: amber[700]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit
  },
  message: {
    display: 'flex',
    alignItems: 'center'
  }
});

function MySnackbarContent(props) {
  const { classes, className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={classNames(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
      ]}
      {...other}
    />
  );
}

const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      subject: '',
      content: '',
      open: false,
      openError: false,
      status: null,
      validEmail: true,
      emailLabel: 'Your E-mail'
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value }, this.isInvalidEmail);
  }

  handleSubjectChange(event) {
    this.setState({ subject: event.target.value });
  }

  handleContentChange(event) {
    this.setState({ content: event.target.value });
  }

  handleSubmit() {
    this.postEmail();

    if (this.state.status === 200) {
      this.setState({
        email: '',
        subject: '',
        content: '',
        status: null,
        open: true,
        openError: false
      });
    } else {
      this.setState({
        openError: true,
        open: false
      });
    }
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  handleCloseError = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ openError: false });
  };

  isInvalidEmail() {
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var validEmail = emailReg.test(this.state.email) || this.state.email === '';
    var emailLabel = validEmail ? 'Your E-mail' : 'Invalid E-mail!';
    this.setState({
      validEmail,
      emailLabel
    });
  }

  postEmail() {
    fetch(`${API_ROOT}/email`, {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      this.setState({
        status: res.status
      });
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card>
          <CardHeader color="info">
            <h4 className={classes.cardTitleWhite}>Contact Info</h4>
          </CardHeader>
          <CardBody>
            Email: ibac7889@gmail.com
            Phone: (301) 717 - 1297
          </CardBody>
        </Card>
        <Card>
          <CardHeader color="success">
            <h4 className={classes.cardTitleWhite}>E-Mail Me</h4>
          </CardHeader>
          <CardBody>
            <GridContainer>
              <GridItem xs={10} sm={10} md={10}>
                <form noValidate autoComplete="off">
                  <TextField
                    id="email-address"
                    error={!this.state.validEmail}
                    label={this.state.emailLabel}
                    placeholder="E-Mail Address"
                    className={classes.textField}
                    margin="normal"
                    onChange={this.handleEmailChange}
                    value={this.state.email}
                  />
                </form>
              </GridItem>
            </GridContainer>

            <GridContainer>
              <GridItem xs={10} sm={10} md={10}>
                <form noValidate autoComplete="off">
                  <TextField
                    id="subject"
                    label="Subject"
                    placeholder="Subject"
                    className={classes.textField}
                    margin="normal"
                    onChange={this.handleSubjectChange}
                    value={this.state.subject}
                  />
                </form>
              </GridItem>
            </GridContainer>

            <GridContainer>
              <GridItem xs={10} sm={10} md={10}>
                <form noValidate autoComplete="off">
                  <TextField
                    id="email-body"
                    label="Email Body"
                    placeholder="Content..."
                    multiline
                    rows={10}
                    className={classes.textField}
                    margin="normal"
                    onChange={this.handleContentChange}
                    value={this.state.content}
                  />
                </form>
              </GridItem>
            </GridContainer>
          </CardBody>
          <CardFooter stats />

          <Button
            disabled={
              !this.state.email ||
              !this.state.subject ||
              !this.state.content ||
              !this.state.validEmail
            }
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={this.handleSubmit}
          >
            Send
            <Icon className={classes.rightIcon}>send</Icon>
          </Button>
        </Card>

        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={this.state.open}
          autoHideDuration={2000}
          onClose={this.handleClose}
        >
          <MySnackbarContentWrapper
            onClose={this.handleClose}
            variant="success"
            message="Success: E-Mail Sent!"
          />
        </Snackbar>
      </div>
    );
  }
}

export default withStyles(style)(ContactPage);
