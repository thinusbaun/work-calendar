import React, { ReactNode, SyntheticEvent } from 'react';
import {connect} from 'react-redux';
import {changeLoggedIn} from './redux/actions'
import ApiCalendar from 'react-google-calendar-api';

class LogInOutButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
        this.signUpdate = this.signUpdate.bind(this);
        ApiCalendar.onLoad(() => {
            this.props.dispatch({ type: 'CHANGE_LOGGED_IN', loggedIn: ApiCalendar.sign})
            ApiCalendar.listenSign(this.signUpdate);
        });
    }

    handleItemClick(event, name) {
        if (name === 'sign-in') {
            ApiCalendar.handleAuthClick();
        } else if (name === 'sign-out') {
            ApiCalendar.handleSignoutClick();
        }
    }

    signUpdate(sign) {
        this.props.dispatch({ type: 'CHANGE_LOGGED_IN', loggedIn: sign})
        ApiCalendar.listCalendars().then(({result}) => {
            console.log(result);
          });;
    }
    render() {
        return (
            this.props.loggedIn ?
                <button
                    onClick={(e) => this.handleItemClick(e, 'sign-out')}
                >
                    sign-out
     </button>

                :
                <button
                    onClick={(e) => this.handleItemClick(e, 'sign-in')}
                >
                    sign-in
        </button>

        );
    }
}

function mapStateToProps(state) {
    debugger;
    const { loggedIn } = state
    return { loggedIn: loggedIn }
  }

  export default connect(mapStateToProps)(LogInOutButton)