import React, {Component} from 'react';
import '../../css/newList.css';

class Tab1 extends Component {
    constructor() {
        super();
        this.state = {
            newList: [
                {
                    title: '热点',
                    index: 1
                }, {
                    title: '娱乐',
                    index: 2
                }, {
                    title: '运动',
                    index: 3
                }, {
                    title: '头条',
                    index: 4
                }
            ],
            currentIndex: 1
        }
    }

    handleClick(index) {
        this.setState({currentIndex: index});
    }

    render() {
        let list = this.state.newList.map((item, index) => {
            const classFix = item.index === this.state.currentIndex
                ? 'list active'
                : 'list';
            return <li onClick={this.handleClick.bind(this, item.index)} className={classFix} key={index}>
                {item.title}
            </li>
        });
        return (<div>
            {list}
        </div>);
    }
}

export default Tab1;
