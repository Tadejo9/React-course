import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import CreatePerson from './CreatePerson/CreatePerson';

import Button  from 'react-bootstrap/Button';

class App extends Component {
  state = {
    persons: [
      {id: 1, name: 'Max', age: 28},
      {id: 2, name: 'Manu', age: 27},
      {id: 3, name: 'Steph', age: 26},
    ],
    showPersons: false,
    showCreatePerson: false,
  };

  hideShowHandler = () => {
    this.setState({showPersons: !this.state.showPersons});
  }

  createPersonHideShowHandler = () => {
    this.setState({showCreatePerson: !this.state.showCreatePerson});
  }

  editNameHandler = (event, id) => {
    //Finds id of edited person
    const editPersonIndex = this.state.persons.findIndex(editPerson => {
      return editPerson.id === id;
    });

    //Finds edited person
    const editPerson = {
      ...this.state.persons[editPersonIndex]
    };

    //Change edit name
    editPerson.name = event.target.value;

    //Create persons copy
    const persons  = [...this.state.persons];

    //Edit persons copy
    persons[editPersonIndex] = editPerson;

    //Change state
    this.setState({persons: persons})
  }

  editAgeHandler = (event, id) => {
    //Finds id of edited person
    const editPersonIndex = this.state.persons.findIndex(editPerson => {
      return editPerson.id === id;
    });

    //Finds edited person
    const editPerson = {
      ...this.state.persons[editPersonIndex]
    };

    //Change edit age
    editPerson.age = Number(event.target.value);

    //Create persons copy
    const persons  = [...this.state.persons];

    //Edit persons copy
    persons[editPersonIndex] = editPerson;

    //Change state
    this.setState({persons: persons})
  }

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  createPersonHandler = () => {
    let persons = [...this.state.persons];
    const newPerson = {id: this.state.persons.length+1, name: this.nameInput.value, age: Number(this.ageInput.value)};
    persons.unshift(newPerson);
    this.setState({persons: persons});
  }
  //s<button style={btnStyle} onClick={() => this.switchNameHandler()}>Switch person</button>

  createPersonsRender = () => {
    let creating = <div><Button onClick={() => this.createPersonHideShowHandler()} variant="primary">Create person</Button></div>

    if (this.state.showCreatePerson) {
      creating =  <CreatePerson
                    className="createComponent"
                    inputRefName={(input) => this.nameInput = input}
                    inputRefAge={(input) => this.ageInput = input}
                    createPerson={() => this.createPersonHandler()}
                    hideCreator={() => this.createPersonHideShowHandler()} 
                  />
    }
    return creating;
  }

  listPersonsRender = () => {
    let persons = <div><Button onClick={() => this.hideShowHandler()} variant="success">Show</Button></div>

    if (this.state.showPersons) {
      persons = <div>
                  <Button onClick={() => this.hideShowHandler()} variant="danger">Hide</Button>
                  {this.state.persons.map((person, index) => {
                    return  <Person 
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            del={() => this.deletePersonHandler(index)}
                            changedName={(event) => this.editNameHandler(event, person.id)} 
                            editAge={(event) => this.editAgeHandler(event, person.id)}/>
                    })}
                </div>
    }

    return persons;
  }
  

  render() {

    let persons = this.listPersonsRender();
    let creating = this.createPersonsRender();
    return (
      <div className="App">
        {creating}
        <h1>Testing</h1>
        {persons}
      </div>
    )    
};
};

export default App;
