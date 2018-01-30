import React, {Component} from 'react';

class Chapter32 extends Component {
    /* 纯函数概念 */
    /* 一个函数的返回结果只依赖于它的参数，并且在执行过程里面没有副作用，我们就把这个函数叫做纯函数 */
    /* 一个函数执行过程对产生了外部可观察的变化那么就说这个函数是有副作用的。 */

    render() {
        // 函数的返回结果只依赖于它的参数，且可预料:
        const foo = (a, b) => a * b;
        foo(2, 4) // => 8

        // 函数执行过程没有副作用:
        const bar = (a) => {
            const obj = {
                x: 1
            };
            // 内部修改没有影响函数外:
            obj.x = 2
            return obj.x * a;
        }
        bar(3) // => 6

        return (<div></div>);
    }
}

export default Chapter32;
