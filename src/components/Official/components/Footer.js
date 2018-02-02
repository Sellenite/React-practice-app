import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
    static propTypes = {
        onFilterChange: PropTypes.func,
        filter: PropTypes.oneOf(['SHOW_ALL', 'SHOW_COMPLETED', 'SHOW_ACTIVE'])
    }

    static defaultProps = {
        onFilterChange: function(filter) {
            console.log(filter);
        },
        filter: 'SHOW_ALL'
    }

    renderFilter(filter, name) {
        if (filter === this.props.filter)
            return name;
        return (<span onClick={e => {
                e.preventDefault();
                this.props.onFilterChange(filter);
            }} style={{
                color: 'red',
                textDecoration: 'underline',
                cursor: 'pointer'
            }}>{name}</span>);
    }

    render() {
        return (<p>
            Show: {' '}
            {this.renderFilter('SHOW_ALL', 'All')}
            {', '}
            {this.renderFilter('SHOW_COMPLETED', 'Completed')}
            {', '}
            {this.renderFilter('SHOW_ACTIVE', 'Active')}
        </p>);
    }
}

export default Footer;
