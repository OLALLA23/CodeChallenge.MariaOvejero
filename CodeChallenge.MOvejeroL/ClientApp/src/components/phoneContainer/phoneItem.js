import * as React from 'react';



export class PhoneItem extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {

        return (

            <div>
                <h2><b>{this.props.phones.NamePhone}</b></h2>
                <img className="foto" src={this.props.phones.Image} alt="" />
                <div><b className="phone-price">{this.props.phones.Price}€</b></div>
                <button type="button" className="btn btn-grey w40"
                    onClick={() => this.props.changeHandler(this.props.phones.IdPhone)}> VER MÁS  </button>
            </div>


        );
    }
}