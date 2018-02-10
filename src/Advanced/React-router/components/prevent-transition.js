import React, { Component } from 'react';
import { Route, Prompt } from 'react-router-dom';
import CustomLink from './custom-link.js';

const PreventTransition = ({match}) => {
    return (
        <div>
            <ul>
                <li>
                    {/* 完全匹配时才显示 */}
                    <CustomLink to={`${match.url}`} label={'Form'} exact={true} />
                </li>
                <li>
                    <CustomLink to={`${match.url}/link1`} label={'Link1'} />
                </li>
                <li>
                    <CustomLink to={`${match.url}/link2`} label={'Link2'} />
                </li>
            </ul>
            <div>
                <Route path={`${match.url}`} exact component={Form} />
                <Route path={`${match.url}/link1`} render={() => <h3>Link1 Content</h3>} />
                <Route path={`${match.url}/link2`} render={() => <h3>Link2 Content</h3>} />
            </div>
        </div>
    )
}

class Form extends Component {
    constructor() {
        super();
        this.state = {
            isBlocking: false
        }
    }

    handleInputChange(e) {
        this.setState({
            isBlocking: e.target.value.length > 0
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        e.target.reset();
        this.setState({
            isBlocking: false
        });
    }

    render() {
        const {isBlocking} = this.state;
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                {/* 阻止关键组件，when为跳转时机bool，message可以传入location，得到的是即将跳转的地址 */}
                <Prompt when={isBlocking} message={location => `Are you still go to ${location.pathname}`} />
                <h3>Blocking? {" "} {isBlocking ? 'Yes, , click a link or the back button.' : 'Nope'}</h3>
                <div>
                    <input type="text"
                           size="50"
                           placeholder="type something to block transition"
                           onChange={this.handleInputChange.bind(this)} />
                </div>
                <div>
                    <button>
                        Submit to reset status
                    </button>
                </div>
            </form>
        )
    }
}

export default PreventTransition;