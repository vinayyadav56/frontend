import React, {Component} from 'react';
import QrReader from 'reacr-qr-scanner'
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
        height:700,
        weight:1000,
        display:'flex',
        justifyContent:'center'
    }
    const camera ={
        display:'flex',
        justifyContent:'center',
        marginTop:'-50px'
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