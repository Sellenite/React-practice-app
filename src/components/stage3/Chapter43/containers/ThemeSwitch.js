import {connect} from 'react-redux';
import ThemeSwitch from '../components/ThemeSwitch';

// 定义需要context的数据
const mapStateToProps = (state) => {
    return {themeColor: state.themeColor}
}

// 定义需要dispatch的行为
const mapDispatchToProps = (dispatch) => {
    return {
        onSwitchColor: (color) => {
            dispatch({type: 'CHANGE_COLOR', themeColor: color});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch);
