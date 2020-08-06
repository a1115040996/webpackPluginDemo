import * as React from 'react';
import './index.less';
export class Home extends React.Component<any, any>{
    constructor(props: any){
        super(props);
    }
    render(){
        return <div className="home-container">
            hello world
        </div>
    }
}