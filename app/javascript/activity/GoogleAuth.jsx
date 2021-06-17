import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { signIn, signOut } from './actions';

function GoogleAuth(props) {
    
    const [isSignedIn, setIsSignedIn] = useState(null)

    useEffect(() => {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '7221270977-9tjpq1ptaf6auhjeu2iroastuabodq45.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                setIsSignedIn(window.gapi.auth2.getAuthInstance().isSignedIn.get());
                window.gapi.auth2.getAuthInstance().isSignedIn.listen(onAuthChange);
            });
        });
    }, []);
    
      const onAuthChange = () => {
        setIsSignedIn(window.gapi.auth2.getAuthInstance().isSignedIn.get())
      };

      const onSignIn = () => {
        window.gapi.auth2.getAuthInstance().signIn();
        props.signIn(window.gapi.auth2.getAuthInstance().currentUser.get().getId());
      }

      const onSignOut = () => {
        window.gapi.auth2.getAuthInstance().signOut();
        props.signOut();
      }

      function renderAuthButton(event) {
          if (isSignedIn === null) {
              return null;
          } else if (isSignedIn) {
              return (
                  <button onClick={onSignOut} className="ui red google button">
                      <i className="google icon" />
                      Sign Out
                  </button>
              );
          } else {
              return (
                <button onClick={onSignIn} className="ui red google button">
                <i className="google icon" />
                Sign In With Google
            </button>
              );
          }
      }

    return (
        <div>
            {renderAuthButton()}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
      isSignedIn: state.isSignedIn,
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ signIn, signOut }, dispatch);
  };
  
  
export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);