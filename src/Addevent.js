import cx from 'classnames';
import qs from 'querystring';
import React from 'react';

import './style/index.scss';

const AddEvent = React.createClass({

    displayName: 'AddEvent',

    // Check addevent.com/api for all event props
    propTypes: {
        buttonText: React.PropTypes.string,
        className: React.PropTypes.string,
        newWindow: React.PropTypes.bool
    },

    getDefaultProps() {
        return {
            buttonText: 'Add to calendar',
            newWindow: true
        };
    },

    render() {

        // options descriptions here: https://www.addevent.com/api
        let query = {
            'client': this.props.client,
            'start': this.props.start,
            'starttime': this.props.starttime,
            'startext': this.props.startext,
            'end': this.props.end,
            'endtime': this.props.endtime,
            'endext': this.props.endext,
            'title': this.props.title,
            'description': this.props.description,
            'location': this.props.location,
            'organizer': this.props.organizer,
            'organizer_email': this.props.organizer_email,
            'all_day_event': this.props.all_day_event,
            'date_format': this.props.date_format,
            'timezone': this.props.timezone,
            'reference': this.props.reference,
            'template': this.props.template,
            'alarm': this.props.alarm,
            'recurring': this.props.recurring,
            'calname': this.props.calname,
            'uid': this.props.uid,
            'status': this.props.status,
            'method': this.props.method
        };

        Object.keys( query ).forEach( ( prop ) => {
            if ( typeof query[ prop ] === 'undefined' ) {
                delete query[prop];
            }
        });

        query = qs.stringify( query );

        const componentClassNames = cx({
            'addevent': true,
            [`${ this.props.className }`]: typeof this.props.className !== 'undefined'
        });

        return (
            <ul className={ componentClassNames }>
                <span>
                    <i className="fa fa-calendar" /> { this.props.buttonText }
                </span>
                <ul>
                    <li>
                        <a target={ this.props.newWindow ? '_blank' : '' } href={ `https://addevent.com/dir/?${ query }&service=google` }>
                            <i style={{ color: 'red', fontFamily: 'FontAwesome' }} className="fa fa-google" /> Google
                        </a>
                    </li>
                    <li>
                        <a target={ this.props.newWindow ? '_blank' : '' } href={ `https://addevent.com/dir/?${ query }&service=appleical` }>
                            <i style={{ color: 'red', fontFamily: 'FontAwesome' }} className="fa fa-apple" /> Apple Calendar
                        </a>
                    </li>
                    <li>
                        <a target={ this.props.newWindow ? '_blank' : '' } href={ `https://addevent.com/dir/?${ query }&service=outlook` }>
                            <i style={{ color: 'red', fontFamily: 'FontAwesome' }} className="fa fa-windows" /> Outlook
                        </a>
                    </li>
                    <li>
                        <a target={ this.props.newWindow ? '_blank' : '' } href={ `https://addevent.com/dir/?${ query }&service=outlookcom` }>
                            <i style={{ color: 'red', fontFamily: 'FontAwesome' }} className="fa fa-windows" /> Outlook.com
                        </a>
                    </li>
                    <li>
                        <a target={ this.props.newWindow ? '_blank' : '' } href={ `https://addevent.com/dir/?${ query }&service=yahoo` }>
                            <i style={{ color: 'red', fontFamily: 'FontAwesome' }} className="fa fa-yahoo" /> Yahoo
                        </a>
                    </li>
                </ul>
            </ul>
        );
    }

});

module.exports = AddEvent;
