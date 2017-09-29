/**
 * Created by hu on 2017/9/28.
 */
//包含Greeter.js
// const greeter = require('./Greeter.js');
// document.querySelector("#root").appendChild(greeter());

//使用ES6的模块定义和渲染Greeter模块
import React from 'react';
import {render} from 'react-dom';
import Greeter from './greeter_react_es6';
import './main.css';//使用require导入css文件
render(<Greeter />, document.getElementById('root'));
