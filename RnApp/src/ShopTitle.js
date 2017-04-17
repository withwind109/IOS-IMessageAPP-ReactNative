/**
 * Created by zhade on 2017/4/17.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class Message extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.title_area}>
                <Image style={styles.shop_log} source={require('../asset/shop-log.jpg')}/>
                <Text style={styles.shop_title}>only官方旗舰店铺</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title_area: {
        marginTop: 10,
        height: 30,
        borderRadius: 19,
        borderColor: '#FF6F72',
        borderWidth: 1,
        paddingLeft: 1,
        paddingRight: 1,
        paddingTop: 1
    },
    shop_log:{

    },
    shop_title:{

    }
});