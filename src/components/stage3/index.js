import React, { Component } from 'react';
import Chapter28 from './Chapter28';
import Chapter28Plus from './Chapter28-plus/CommentApp';
import Chapter29 from './Chapter29';
import Chapter30 from './Chapter30';
import Chapter31 from './Chapter31';
import Chapter32 from './Chapter32';
import Chapter33 from './Chapter33';
import Chapter34 from './Chapter34';
import Chapter35 from './Chapter35';
import Chapter36 from './Chapter36/index';
import Chapter38 from './Chapter38/index';
import Chapter41 from './Chapter41';
import Chapter42 from './Chapter42/index';
import Chapter43 from './Chapter43/index';
import Chapter44 from './Chapter44/index';

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
                <Chapter28Plus></Chapter28Plus>
                <Chapter29></Chapter29>
                <Chapter30></Chapter30>
                <Chapter31></Chapter31>
                <Chapter32></Chapter32>
                <Chapter33></Chapter33>
                <Chapter34></Chapter34>
                <Chapter35></Chapter35>
                <Chapter36></Chapter36>
                <Chapter38></Chapter38>
                <Chapter41></Chapter41>
                <Chapter42></Chapter42>
                <Chapter43></Chapter43>
                <Chapter44></Chapter44>
            </div>
        );
    }
}

export default Stage3;
