import React, {Component} from 'react';

const users = [
    {
        username: 'Jerry',
        age: 21,
        gender: 'male'
    }, {
        username: 'Tomy',
        age: 22,
        gender: 'male'
    }
];

class User extends Component {
    render() {
        const { user } = this.props
        return (
            <div>
                <div>姓名：{user.username}</div>
                <div>年龄：{user.age}</div>
                <div>性别：{user.gender}</div>
                <hr/>
            </div>
        );
    }
}

class Chapter13 extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        const userElement = [];
        for (let [index, user] of users.entries()) {
            userElement.push(<div key={index}>
                <div>姓名：{user.username}</div>
                <div>年龄：{user.age}</div>
                <div>性别：{user.gender}</div>
                <hr/>
            </div>);
        }
        return (<div>
            <div>
                {/* React.js 会帮你把数组里面一个个元素罗列并且渲染出来。 */}
                {userElement}
            </div>
            <div>
                {/* 但我们一般不会手动写循环来构建列表的JSX结构，而使用用ES6自带的map */}
                {/* 如果数据顺序可能发生变化，标准做法是最好是后台数据返回的 id 作为列表元素的 key 且要求是惟一值 */}
                {
                    users.map((user, index) => {
                        return (<div key={index}>
                            <div>姓名：{user.username}</div>
                            <div>年龄：{user.age}</div>
                            <div>性别：{user.gender}</div>
                            <hr/>
                        </div>);
                    })
                }
            </div>
            <div>
                {users.map((user, index) => {
                    return <User user={user} key={index}/>
                })}
            </div>
        </div>);
    }
}

export default Chapter13;
