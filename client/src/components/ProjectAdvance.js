import React from 'react';
import axios from 'axios';
import history from '../history';

class ProjectAdvance extends React.Component {
  constructor (props) {
      super (props);

      this.state = {
        projectAdvance : 0,
      }
  }

  componentDidMount () {
    let projectId = this.props.projectId;
    if (projectId === undefined) {
      projectId = history.location.state.projectId;
    }
    const url2 = 'https://kanrisha.herokuapp.com/project-advance/' + projectId;
    axios.get(
      url2
    ).then(response => {
      this.setState({ projectAdvance: response.data });
    }).catch(error => {
      console.log("error", error);
    })
  }

  render () {
    return (this.state.projectAdvance);
  }
}

export default ProjectAdvance;