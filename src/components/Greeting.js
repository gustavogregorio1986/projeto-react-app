import PropTypes from 'prop-types';

function Greeting({ name, age }) {
  return <h1>Hello {name}, you are {age} years old</h1>;
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
};

export default Greeting;