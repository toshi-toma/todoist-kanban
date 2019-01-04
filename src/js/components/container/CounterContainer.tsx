import * as React from 'react';
import Button from "../presentational/Button";

interface Props {}

interface State {
  count: number;
}

export default class CounterContainer extends React.Component<Props, State> {
  
  public state: State = {
    count: 0
  };

  public countUp = () => {
    this.setState({count: this.state.count + 1})
  }

  render() {
    return (
      <div>
        <div>count:{this.state.count}</div>
        <Button label="count up!" onClick={this.countUp}/>
      </div>
    )
  }
}
