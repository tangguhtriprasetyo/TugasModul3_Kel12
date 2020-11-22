import React, {Component} from 'react';

import './CSS/style.css';

class Produk extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stock: this.props.stock,
            sub:"Beli",
            status: "Tersedia",
            dijual: "Dijual !",
            disabled: false
        }
    }
    TombolBeli = () => {
        this.setState ({
            stock: this.state.stock-1
        })

        if (this.state.stock === 1) {
            this.setState ({
                status : "Habis",
                disabled : true,
                dijual : "Sold Out Gess!",
                sub : "Tidak Dapat Membeli"
            })
            
        } else {
            
        }
    
    }
    componentDidUpdate(prevState) {
        alert(`Stock di-Update!`)
        } 

    shouldComponentUpdate(nextState) {
        return window.confirm('Anda yakin membeli barang ini?');
        }
        

    render() {
        return (
            <div className="wrapper">
                <h1><b>KOMPONEN 1</b></h1>
                <h2><b>{this.state.dijual}</b></h2>
                <h2>{this.props.nama}</h2>
                <img src="https://cdn1-production-images-kly.akamaized.net/JxLj_xhGnrnQF0h4COU18wXapsQ=/673x379/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1242699/original/010305600_1464028587-wallpaper_lucu.jpg" alt=""/>
                <p><b>Rp. {this.props.harga}</b></p>
                <p>Jumlah Stock : {this.state.stock}</p>
                <button className="btn-click" onClick={this.TombolBeli} disabled={this.state.disabled}>{this.state.sub}</button>
                <p>{this.state.status}</p>
            
            </div>
        )
    }
}

export default Produk;