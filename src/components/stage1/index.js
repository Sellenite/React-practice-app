import React, {
    Component
} from 'react';
import Chapter7 from './Chapter7';
import Chapter9 from './Chapter9';
import Chapter10 from './Chapter10';
import Chapter11 from './Chapter11';
import Chapter13 from './Chapter13';
import Chapter14 from './Chapter14/CommentApp';

class Stage1 extends Component {
    constructor() {
        super();
        this.state = {
            wordings: {
                likedText: '已赞',
                unlikedText: '赞'
            }
        }
    }

    handleChangeWordings() {
        this.setState({
            wordings: {
                likedText: '已点赞',
                unlikedText: '点赞'
            }
        })
    }

    render() {
        return (<div className="Stage1">
            <Chapter7></Chapter7>
            <Chapter9></Chapter9>
            <Chapter10></Chapter10>
            {/* props一旦传入就无法从子组件内修改，但可以通过修改state传入去重新渲染 */}
            <button onClick={this.handleChangeWordings.bind(this)}>点击修改父元素传入子组件的props</button>
            <Chapter11 wordings={this.state.wordings} handleClick={(e) => {
                    console.log(this);
                    console.log('func props');
                    console.log(e.target.innerHTML);
                }}></Chapter11>
            <Chapter13></Chapter13>
            <Chapter14></Chapter14>
        </div>);
    }
}

export default Stage1;