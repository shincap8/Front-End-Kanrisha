import React from 'react';
import history from '../history';
import ProjectAdvance from './ProjectAdvance';


class ProjectListItem extends React.Component {
  render() {;
    const page = history.location.pathname;
    let color;
    let all = "";
    let text;
    let advance = "";

    if (this.props.project.status) {
      text = "Active";
      color = "card-text text-right font-weight-bold text-white";
    } else {
      text = "Inactive";
      color = "card-text text-right font-weight-bold text-white";
    }

    if (page !== '/Home') {
      all = <p className={color}>{text}</p>;
    }

    if (history.location.state.user === "manager") {
      advance = <p>Percentage completed {<ProjectAdvance projectId={this.props.project._id}/>}%</p>
    }

    return (
      <div className="card project text-white" >
        <div className="card-header">
          <h4 className="p-card-title">{ this.props.project.name }</h4>
        </div>
        <div className="card-body">
          <p className="card-text p-description">{ this.props.project.description}</p>
          <p className="card-text">{this.props.project.deadline}</p>
          {all}
          {advance}
        </div>
      </div>
    );
  }
}

class ProjectsList extends React.Component {
  render() {
    let noproject = "";
    if (this.props.projects.length === 0) {
      noproject = <h5 className="text-muted">There are no proyects</h5>
    }
    return (
      <div className="ProjectList">
        <div className="card-deck">
          {this.props.projects.map(project => {
            return (
              <div className="col-md-4 mb-4" key={project._id} data-key={project._id} onClick={this.props.onClick}>
                <ProjectListItem project={project}/>
              </div>
            );
          })}
          {noproject}
        </div>
      </div>
    );
  }
}

export default ProjectsList;
