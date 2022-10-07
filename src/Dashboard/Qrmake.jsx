import React, {Component} from 'react';
import QrReader from 'react-qr-scanner'
import { Fragment } from 'react';
import { data } from 'jquery';

class Qrmake extends Component{
constructor(props){
    super(props)
    this.state = {
        result:"Tap And hold for qr scan"
    }
    this.handleScan = this.handleScan.bind(this)
}
handleScan(result){
    this.setState({
        result :data
    })
}
handleError(err){
    console.log(err);
}
render(){
    const prestyle= {
        height:200,
        weight:400,
        display:'flex',
        justifyContent:'center'
    }
    const camera ={
        display:'flex',
        justifyContent:'center',
    }
    const textStyle={
    }
    return(
        <Fragment>
            <div style={camera}>
                <QrReader
                delay={100}
                style={prestyle}
                onError={this.handleError}
                onScan={this.handleScan}
                />
            </div>
            <p style={textStyle}>
                {this.state.result}
            </p>
        </Fragment>

    )
}
}
export default Qrmake