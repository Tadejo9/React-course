import React from 'react';
import './CreatePerson.css';
import Button  from 'react-bootstrap/Button';
import InputGroup  from 'react-bootstrap/InputGroup';
import FormControl  from 'react-bootstrap/FormControl';
import ButtonGroup  from 'react-bootstrap/ButtonGroup';

const CreatePerson = props => {
  return (
    <div className="createPerson">
      <InputGroup className="mb-3">
        <FormControl
          placeholder="New Name"
          ref={props.inputRefName}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="New Age"
          ref={props.inputRefAge}
        />
      </InputGroup>
      <ButtonGroup className="mb-3">
        <Button onClick={props.createPerson} type="button" variant="success">Create new person</Button>
        <Button onClick={props.hideCreator} type="button" variant="warning">Hide me</Button>
      </ButtonGroup>
    </div>
  )
}

export default CreatePerson;