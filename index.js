class Header {
  constructor() {
    console.log('constructor');
  }
  getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps');
  }

  componentDidMount() {
    setTimeout(() => {
      console.log('componentDidMount');
    }, 1000)
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  render() {
    console.log('render');
  }
}

let header = new Header()
console.log(header);