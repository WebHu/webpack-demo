/**
 * Created by hu on 2017/9/28.
 */
//Greeter,js
import React, {Component} from 'react'
import config from './config.json';
import styles from './Greeter.css';//导入

class Greeter extends Component{
    render() {
        return (
            <div className={styles.root}>
            {config.greetText}
            <h1>what fuck!!!!</h1>
    </div>

    );
    }
}

export default Greeter