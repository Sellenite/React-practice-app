import React, {Component} from 'react';

class Chapter7 extends Component {
    constructor() {
        super();
        this.state = {
            isGood: false
        }
    }

    renderString(str1, str2) {
        return this.state.isGood
            ? str1
            : str2;
    }

    render() {
        const string1 = 'react string1';
        return (<div>
            <div>
                可以在jsx里再使用函数：{
                    (function() {
                        const num = 233;
                        return num;
                    })()
                }
            </div>
            <div>
                label的for需要写成htmlFor：
                <label htmlFor="_stage-radio-1">htmlFor</label>
                <input type="radio" id="_stage-radio-1"/>
            </div>
            <div>
                <p>
                    返回null或空字符串即不渲染： {
                        this.state.isGood
                            ? 'react is good'
                            : null
                    }
                </p>
                <p>
                    条件渲染数据： {
                        this.state.isGood
                            ? ''
                            : string1
                    }
                </p>
                <p>
                    {/* 这里可以直接传入jsx的，react经过对传入参数的处理 */}
                    函数传入jsx结构： {
                        this.renderString(<strong>
                            <span>str1</span>
                        </strong>, <strong>
                            <span>str2</span>
                        </strong>)
                    }
                </p>
            </div>
        </div>);
    }
}

export default Chapter7;
