import { Component } from 'react'
import axios from 'axios'

export default class createEmployee extends Component {
  state={
    employee: []
  }
  async componentDidMount() {
    const res = await axios.get('http://localhost:4000/api/employee')
      this.setState({employee:res.data})
      console.log(this.state.employee)
  }
  render() {
    return (
      <div>
        Create Employee
      </div>
    )
  }
}
