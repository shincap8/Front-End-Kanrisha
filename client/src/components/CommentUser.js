import React from 'react';
import axios from 'axios';

class CommentUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
        }
    }

    componentDidMount () {
      if (this.props.type === 0) {
        const url = `https://kanrisha.herokuapp.com/manager/${this.props.userId}`;
        axios.get(
          url
        ).then(response => {
          this.setState({ user: response.data })
        }).catch(error => {
          console.log(error.data);
          console.log("Error", error);
        });
      } else {
        console.log("else")
        const url = `https://kanrisha.herokuapp.com/freelancer/${this.props.userId}`;
        console.log(url);
        axios.get(
          url
          ).then(response => {
            console.log(response.data);
            this.setState({ user: response.data })
          }).catch(error => {
            console.log(error.data);
            console.log("Error", error);
          });
      }
    }

    render() {
        return (
        <h5>{this.state.user.name}</h5>
        );
    }
}

export default CommentUser;