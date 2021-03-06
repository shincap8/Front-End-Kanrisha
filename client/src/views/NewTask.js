import React from 'react';
import history from '../history';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import {TaskForm} from '../components/TaskForm';

export class NewTask extends React.Component {
  state = {
    task: {
      name: '',
      description: '',
      deadline: new Date(),
      projectId: history.location.state.projectId,
      freelancersId: [],
      commentsId: [],
      weight: 0,
      tasktype: 0,
      amount: 0
    },
    projectId: history.location.state.projectId,
    managerId: history.location.state.managerId,
    user: history.location.state.user,
    freelancersId: history.location.state.freelancersId,
    project: history.location.state.project,
    taskId: "",
    previousPage: "/NewTask",
  };

  constructor (props) {
    super (props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleChangeOption = this.handleChangeOption.bind(this);
    console.log(history);
  }

  handleChange(e) {
    this.setState({
      task: {
        ...this.state.task,
      [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const { name, description, deadline, projectId, freelancersId, commentsId, weight, tasktype, amount } = this.state.task; //add deadline
    axios.post(
      'https://kanrisha.herokuapp.com/new-task',
      {
        name: name,
        description: description,
        deadline: deadline.toDateString(),
        projectId: projectId,
        freelancersId: freelancersId,
        commentsId: commentsId,
        weight: weight,
        tasktype: tasktype,
        amount: amount
      }).then(response => {
        this.setState({ taskId: response.data });
        history.push('/TaskPage', this.state);
      }).catch(error => {
        console.log(error);
      })

  };

  handleDate = deadline => {
    this.setState({ task: { ...this.state.task, deadline: deadline },});
  };

  handleChangeOption = event => {
    this.setState({ task: { ...this.state.task, tasktype: event.target.value},});
    console.log(event.target.value);
  };

  render () {
    return (
      <div className="col-md-6 offset-md-3 mt-5">
        <h2 className="text-center">New Task</h2>

        <TaskForm onChange={this.handleChange} onSubmit={this.handleSubmit} task={this.state.task} onChangeDate={this.handleDate} onChangeOption={this.handleChangeOption}/>
      </div>
    )
  }
}