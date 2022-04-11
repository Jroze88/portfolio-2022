import React, {Component} from 'react';
import './splash-screen.css';
import {parallaxController} from 'react-scroll-parallax'
//// Here, we're doing two things => Originally this was a splash screen handler context-wrapper but I also needed a context wrapper
// for react-scorll-parallax's controller to ensure it loads. So I've combined the two.


// Until I need a splash screen that doesnt care about parallax or a parallax component that cant use a splash screen it should be absolutely fine

function LoadingMessage() {
  return (
    <div className="splash-screen">
      Loading......
      <div className="loading-dot">.</div>
    </div>
  );
}

function withSplashScreen(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }

        handleLoad = () => {
            // updates cached values after image dimensions have loaded
            this.props.parallaxController.update().catch(err => console.log(err))
            this.setState({
                loading: false,
              });
        };

    componentDidMount = () => {

    try { this.setState({
          loading: false,
        });
      }
      catch(err) {
          console.log(err)
      }
    }



    render() {
      // while checking user session, show "loading" message
      if (this.state.loading) return LoadingMessage();

      // otherwise, show the desired route
      return <WrappedComponent {...this.props}  onLoad={this.handleLoad}  />;
    }
  };
}

export default withSplashScreen;