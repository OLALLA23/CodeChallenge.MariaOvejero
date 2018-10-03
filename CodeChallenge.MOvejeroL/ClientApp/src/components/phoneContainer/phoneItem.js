import * as React from 'react';



export class PhoneItem extends React.Component{
   
    render = () => {
        const { phones, changeHandler } = this.props;
        return (

            <div>
                <h2><b>{phones.NamePhone}</b></h2>
                <img className="foto" src={phones.Image} alt="" />
                <div><b className="phone-price">{phones.Price}€</b></div>
                <button type="button" className="btn btn-grey w40"
                    onClick={() => changeHandler(phones.IdPhone)}> VER MÁS  </button>
            </div>


        );
    }
}