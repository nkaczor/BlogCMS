import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  FormGroup,
  Button,
  FormControl,
  ControlLabel
} from 'react-bootstrap';
import './commentInput.css';

export default class CommentInput extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      author: '',
      text: ''
    };
  }

  handleInputChange(event) {
    const { target, name } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      author: '',
      text: ''
    });
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <Form className="comment-input">
        <h4> Add your comment </h4>
        <FormGroup controlId="formHorizontalName">
          <ControlLabel>Author</ControlLabel>
          <FormControl
            type="text"
            name="author"
            placeholder="Name"
            value={this.state.author}
            onChange={this.handleInputChange}
          />
        </FormGroup>

        <FormGroup controlId="formHorizontalText">
          <ControlLabel>Text</ControlLabel>
          <FormControl
            name="text"
            componentClass="textarea"
            placeholder="Comment text"
            value={this.state.text}
            onChange={this.handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Button type="submit" onClick={this.handleSubmit}>
            Add comment
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

CommentInput.propTypes = {
  onSubmit: PropTypes.func
};

CommentInput.defaultProps = {
  onSubmit: () => {}
};
