import React, {Component} from 'react';
import Chapter28 from './Chapter28';
import Chapter29 from './Chapter29';
import Chapter30 from './Chapter30';
import Chapter31 from './Chapter31';

class Stage3 extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Chapter28></Chapter28>
                <Chapter29></Chapter29>
                <Chapter30></Chapter30>
                <Chapter31></Chapter31>
            </div>
        );
    }
}

export default Stage3;
