import React, {Component} from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

const WithLocaleHOC = (WrappedComponent) => {
  return class WithLocaleHOC extends Component {

    constructor(props, context) {
      super(props, context);
      this.locale = 'Testjjj';
    }

    static childContextTypes = {
      locale: PropTypes.string
    }

    getChildContext() {
      console.log("sdsds");
      return {locale: this.locale}
    }


    render() {
      console.log("WrappedComponent");
      return <WrappedComponent {...this.props} />
    }
  }
}

class Sample extends React.Component {
  static proptypes = {
    children: PropTypes.func.isRequired,
  }

  static contextTypes = {
      locale: PropTypes.object
  }

  constructor (props) {
    super(props);
    this.state = {
      scroll: 0
    }
  }

  render () {

    console.log(this.context);

    return (
      <div>
      {this.props.children(this.state.scroll)}
      </div>
    )
  }
}

class APP extends Component {
  render() {
    return (
      <div>
        <div style={{height:'2000px'}}></div>
        <Sample>
          {
          (sample) => <h1 style={{transform: `rotateY(${sample}deg)`,fontSize:`121px`}}> HUGE TEXT  HUGE TEXT  HUGE TEXT </h1>
          }
        </Sample>
        <div style={{height:'2000px'}}></div>
      </div>
    )
  }
}


const Test = WithLocaleHOC(APP);

ReactDom.render(<Test  />, document.getElementById('root'));

