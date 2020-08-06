/*
 * @Date: 2020-08-06 10:55:31
 * @LastEditors: liujunfei
 * @LastEditTime: 2020-08-06 15:23:30
 * @Description: 
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { RouterConfig } from './router';
// console.log('执行========>', RouterConfig);
console.log(1234);

class Main extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
    }
    render() {
        return <RouterConfig />
    }
}


ReactDOM.render(<Main />, document.getElementById('main'));