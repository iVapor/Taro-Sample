import {Component} from "react";
import Taro from "@tarojs/taro";
import {View, } from "@tarojs/components";
import {connect} from 'react-redux';
import "./index.scss";
import {log, showToast} from "@/utils/tools";

@connect(state => ({
    ssoToken: state.ssoToken,
    weAppToken: state.weAppToken
}))
class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };

    }

    render() {

        return (
            <View>
                hello
            </View>
        );
    }
}

export default Index;
