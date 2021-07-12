import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Formik, Field, Form } from 'formik';

import GoogleAuth from './GoogleAuth';
import { newActivity } from './actions';

function New(props) {
    
    if (props.isSignedIn) {
        return (
            <div>
                <h1>Create a New Activity</h1>
                <Formik
                initialValues={{
                    question: '',
                    highlabel: '',
                    lowlabel: '',
                    name: '',
                    tile1: '',
                    tile2: '',
                    tile3: '',
                    tile4: '',
                    tile5: '',
                    tile6: '',
                    tile7: '',
                    tile8: '',
                    tile9: '',
                    user: props.user
                }}
                onSubmit={(values, { resetForm } ) => {
                    if (values.question) {
                        props.newActivity(values.question, values.highlabel, values.lowlabel, values.user);
                        resetForm();
                    }
                }}
                >
                <Form className="ui form">
                    <div className="field">
                        <label htmlFor="question">Question:</label>
                        <Field id="question" name="question" component="textarea" rows="3" placeholder="e.g. What is the most important issue affecting children today?" />
                        <label htmlFor="highlabel">Top Label</label>
                        <Field id="highlabel" name="highlabel" component="textarea" rows="1" placeholder="label for the top tile (e.g. Most Important)" />
                        <label htmlFor="lowlabel">Bottom Label</label>
                        <Field id="lowlabel" name="lowlabel" component="textarea" rows="1" placeholder="label for the bottom tile (e.g. Least Important)" />
                        <label htmlFor="name">Name:</label>
                        <Field id="name" name="name" component="textarea" rows="1" placeholder="Your Name (as it will appear on the activity)" />
                        <label htmlFor="tile1">Tiles (must provide all nine)</label>
                        <Field id="tile1" name="tile1" component="textarea" rows="3" placeholder="item 1" />
                        <Field id="tile2" name="tile2" component="textarea" rows="3" placeholder="item 2" />
                        <Field id="tile3" name="tile3" component="textarea" rows="3" placeholder="item 3" />
                        <Field id="tile4" name="tile4" component="textarea" rows="3" placeholder="item 4" />
                        <Field id="tile5" name="tile5" component="textarea" rows="3" placeholder="item 5" />
                        <Field id="tile6" name="tile6" component="textarea" rows="3" placeholder="item 6" />
                        <Field id="tile7" name="tile7" component="textarea" rows="3" placeholder="item 7" />
                        <Field id="tile8" name="tile8" component="textarea" rows="3" placeholder="item 8" />
                        <Field id="tile9" name="tile9" component="textarea" rows="3" placeholder="item 9" />
                    </div>
                    <button className="ui button primary" type="submit">Create Activity</button>
                </Form>
                </Formik>
            </div>
        ); } else {
            return (
                <div>
                    <h4>You must be signed in to create an activity.</h4>
                    <GoogleAuth />
                </div>
            )
        }
    }


const mapStateToProps = (state) => {
    return {
      isSignedIn: state.auth.isSignedIn,
      user: state.auth.userId
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ newActivity }, dispatch);
  };
  

export default connect(mapStateToProps, mapDispatchToProps)(New);
  