import {connect} from 'react-redux';
import Header from '../components/Header';

// 定义需要context的数据
const mapStateToProps = (state) => {
    return {themeColor: state.themeColor}
}

// 柯里化传参
export default connect(mapStateToProps)(Header);
