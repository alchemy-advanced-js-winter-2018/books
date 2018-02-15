import Store from 'charly-state-store';

export default class Counter extends Store {
  constructor() {
    super();

    this.state = {
      count: 0
    };

    const minus = document.getElementById('minus');
    const plus = document.getElementById('plus');

    minus.addEventListener('click', () => {
      this.setState({
        count: this.state.count - 1
      });
    });
    
    plus.addEventListener('click', () => {
      this.setState({
        count: this.state.count + 1
      });
    });

    this.pre = document.getElementById('target'); 

    this.subscribe(() => this.render());

    this.render();
  }

  render() {
    this.pre.textContent = JSON.stringify(this.state, true, 2);
  }
}