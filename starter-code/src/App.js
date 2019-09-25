import React from 'react';
import logo from './logo.svg';
import './App.css';
import users from "./users.json";
import Users from "./Users";

let userList = [...users];

class App extends React.Component {

  state = {
    users: userList,
    search: "",
    teacher: false,
    student: false
  }

  search = event => {
    const value = event.target.value;
    const name = event.target.name;
    console.log(name)

    this.setState({
      [name]: value
    }, () => console.log(this.state))
  };

  teach = event => {
    const checked = event.target.checked;
    const name = event.target.name;


    this.setState({
      [name]: checked
    });
  };

  stu = event => {
    const checked = event.target.checked;
    const name = event.target.name;

    this.setState({
      [name]: checked
    });
  };


  render() {
    console.log(this.state.teacher)
    const search = this.state.search.toLowerCase();
    let filteredUsers = this.state.users.filter(user => (user.firstName.toLowerCase().includes(search) || user.lastName.toLowerCase().includes(search)) && ((this.state.teacher && user.role === "teacher") || (this.state.student && user.role === "student")))
    return (
      <div className="App">
        <h1>IronBook</h1>


        <label htmlFor="search">Search for User</label>
        <input type="text"
          name="search"
          id="search"
          value={this.state.search}
          onChange={this.search}
        />

        <label htmlFor="role">Teacher</label>
        <input type="checkbox"
          name="teacher"
          checked={this.state.teacher}
          onChange={this.teach}
        />

        <label htmlFor="role">Student</label>
        <input type="checkbox"
          name="student"
          checked={this.state.student}
          onChange={this.stu}
        />

        <table>
          <tbody>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Campus</th>
              <th>Role</th>
              <th>Links</th>
            </tr>
            <Users users={filteredUsers} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
