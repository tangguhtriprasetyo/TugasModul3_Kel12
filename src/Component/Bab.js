import React, {Component} from 'react';

import './CSS/style.css';

class Bab extends Component {
    constructor(props) {
        super(props)

        this.state = {
            status : "Pilih Ayam apa Bebek?"
        }
    }

    TombolNext = () => {
        this.setState ({
            status: "Betul, karena bebek walaupun ditabrak tetep bebek aja"
        })
    }

    TombolPrev = () => {
        this.setState ({
            status: "Salah dong !"
        })
        }


    shouldComponentUpdate(nextState) {
        return window.confirm('Yakin Nih ?');
        }
        

    render() {
        return (
            <div className="wrapper2">
                <h1><b>KOMPONEN 2</b></h1>
                <h2>{this.props.judul}</h2>
                <img src="data:image/jpeg;base64,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" alt=""/>
                <p>{this.state.status}</p>
                <button className="btn-click" onClick={this.TombolPrev}>AYAM !</button> |
                | <button className="btn-click" onClick={this.TombolNext} >BEBEK !</button>
            </div>
        )
    }
}

export default Bab;