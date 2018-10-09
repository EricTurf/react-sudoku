import React from 'react';
import { withRouter } from 'react-router-dom';
import { Select } from 'antd';

const { Option } = Select;

class Difficulty extends React.Component {
  state = { difficulty: 'easy' };

  componentDidMount() {
    this.onDifficultyHandler('easy');
  }

  onDifficultyHandler = difficulty => {
    const { location, history } = this.props;
    if (location.pathname.split('/').pop() === difficulty) return;
    this.setState({ difficulty }, () => history.push(`/${difficulty}`));
  };

  render() {
    const { difficulty } = this.state;

    return (
      <React.Fragment>
        <Select
          defaultValue="Easy"
          style={{ width: 120 }}
          onChange={value => this.onDifficultyHandler(value)}
          value={difficulty}
        >
          <Option value="easy">Easy</Option>
          <Option value="medium">Medium</Option>
          <Option value="hard">Hard</Option>
        </Select>
      </React.Fragment>
    );
  }
}

export default withRouter(Difficulty);
