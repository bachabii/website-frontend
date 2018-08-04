import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

import { API_ROOT } from "../../config/api-config";

const styles = {
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
  }
};

const divStyle = {
  marginBottom: '10px',
  padding: '10px'
};

const padding10Style = {
  padding: '10px'
};

const spanStyle = {
  marginRight: '5px',
  marginLeft: '5px',
  marginTop: '-15px'
};

const infoStyle = {
  font: "16px/24px 'librebaskerville-italic', serif",
  color: '#6E7881',
  marginBottom: '18px',
  marginTop: '0px'
};

const dateStyle = {
  font: "15px/24px 'opensans-regular', sans-serif",
  marginTop: '-1px'
};

const flexStyle = {
  display: 'flex',
  alignItems: 'center'
};

const marginTop0 = {
  marginTop: '0px'
};

class ResumePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      familiar: [],
      proficient: [],
      database: [],
      platforms: [],
      educations: [],
      experiences: [],
      resume: {}
    };
  }

  componentDidMount() {
    this.getResume();
  }

  getResume() {
    fetch(`${API_ROOT}/resume`)
      .then(res => res.json())
      .then(json => {
        let resume = json;
        let familiar = resume.skill.languages.familiar,
          proficient = resume.skill.languages.proficient,
          database = resume.skill.software.database,
          platforms = resume.skill.software.platforms,
          experiences = resume.experiences,
          educations = resume.educations;

        this.setState({
          proficient,
          familiar,
          database,
          platforms,
          experiences,
          educations,
          resume
        });
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <CustomTabs
              title="Resume:"
              headerColor="info"
              tabs={[
                {
                  tabName: "All",
                  tabIcon: BugReport,
                  tabContent: (
                    <div>
                      <Paper style={padding10Style} elevation={1}>
                        <Typography variant="headline" component="h3">
                          Skills
                        </Typography>
                        <Divider />
                        <div style={padding10Style}>
                          <ul>
                            <li>Languages - Proficient: {this.state.proficient.join(', ')}</li>
                            <li>Languages - Familiar: {this.state.familiar.join(', ')}</li>
                            <li>Software - Databases: {this.state.database.join(', ')}</li>
                            <li>Software - Platforms: {this.state.platforms.join(', ')}</li>
                          </ul>
                        </div>

                        <Typography variant="headline" component="h3">
                          Work Experience
                        </Typography>
                        <Divider />
                        <div style={padding10Style}>
                          {this.state.experiences.map(item => (
                            <div key={item.company}>
                              <Typography component="h4">
                                {item.position}
                              </Typography>
                              <div style={flexStyle}>
                                <p style={infoStyle}>{item.company}</p>
                                <span style={spanStyle}>•</span>
                                <p style={dateStyle}>{item.begin} - {item.end}</p>
                              </div>
                              <ul style={marginTop0}>
                                {item.accomplishments.map(itm => (
                                  <li key={itm}>{itm}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        <Typography variant="headline" component="h3">
                          Education
                        </Typography>
                        <Divider />
                        <div style={padding10Style}>
                          {(this.state.educations).map((item, idx) =>
                            <div key={item.school}>
                              <Typography component="h4">
                                {item.school}
                              </Typography>
                              <div style={flexStyle}>
                                <p style={infoStyle}>{item.major}</p>
                                <span style={spanStyle}>•</span>
                                <p style={dateStyle}>{item.begin} - {item.end}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </Paper>
                    </div>
                  )
                },
                {
                  tabName: "Work Experience",
                  tabIcon: BugReport,
                  tabContent: (
                    <div>
                      {(this.state.experiences).map((item,idx) => 
                        <Paper style={divStyle} key={idx} elevation={1}>
                          <Typography variant="headline" component="h3">
                            {item.position}
                          </Typography>
                          <Typography component="h4">
                            {item.company}
                          </Typography>
                          <Typography component="h4">
                            {item.begin} - {item.end}
                          </Typography>
                          <br/>
                          <Typography component="h5">
                            Accomplishments:
                          </Typography>
                          <ul>
                          {item.accomplishments.map(itm =>
                            <li key={itm}>{itm}</li>
                          )}
                          </ul>
                        </Paper>
                      )}
                    </div>
                  )
                },
                {
                  tabName: "Education",
                  tabIcon: Code,
                  tabContent: (
                    <div>
                      {(this.state.educations).map((item,idx) => 
                        <Paper style={divStyle} key={idx} elevation={1}>
                          <Typography variant="headline" component="h3">
                            {item.school}
                          </Typography>
                          <Typography component="h4">
                            {item.major}
                          </Typography>
                          <Typography component="h4">
                            {item.begin} - {item.end}
                          </Typography>
                        </Paper>
                      )}
                    </div>
                  )
                },
                {
                  tabName: "Skills",
                  tabIcon: Cloud,
                  tabContent: (
                    <div>
                      <ExpansionPanel defaultExpanded={true}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography className={classes.heading}>Languages - Proficient</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                          <ul>
                            {(this.state.proficient).map(item =>
                              <li key={item}>{item}</li>
                            )}
                          </ul>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>

                      <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography className={classes.heading}>Languages - Familiar</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                          <ul>
                            {(this.state.familiar).map(item =>
                              <li key={item}>{item}</li>
                            )}
                          </ul>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>

                      <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography className={classes.heading}>Software - Databases</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                          <ul>
                            {(this.state.database).map(item =>
                              <li key={item}>{item}</li>
                            )}
                          </ul>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>

                      <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                          <Typography className={classes.heading}>Software - Platforms</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                          <ul>
                            {(this.state.platforms).map(item =>
                              <li key={item}>{item}</li>
                            )}
                          </ul>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>
                    </div>
                  )
                }
              ]}
            />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(styles)(ResumePage);
