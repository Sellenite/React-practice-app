import React, {Component} from 'react';
import '../../css/newList.css';

class Tab1 extends Component {
    constructor() {
        super();
        this.state = {
            tabs: [
                {
                    tabName: '热点',
                    id: 1
                }, {
                    tabName: '社会',
                    id: 2
                }, {
                    tabName: '体育',
                    id: 3
                }, {
                    tabName: '头条',
                    id: 4
                }
            ],
            currentIndex: 1
        }
    }

    handleClick(id) {
        this.setState({currentIndex: id});
    }

    render() {
        let tabList = this.state.tabs.map((item, index) => {
            const tabStyle = item.id === this.state.currentIndex
                ? 'list active'
                : 'list';
            return <li key={index} onClick={this.handleClick.bind(this, item.id)} className={tabStyle}>
                {item.tabName}
            </li>
        });

        return (<div>
            <ul className="news">
                {tabList}
            </ul>
        </div>);
    }
}

export default Tab1;
