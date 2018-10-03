import * as React from 'react';
import * as shallowequal from 'shallowequal';
import { PhoneDetails } from './phoneDetails';
import { PhoneItem } from './phoneItem';


export class listPhone extends React.Component {
   
    componentWillMount = () =>{
        const { getPhones } = this.props;
        getPhones();
        this.setState({
            selectPhone: '',
            activeLink: 'listPhone',
        })
    }

    stateCancel = () => {
        this.setState({
            activeLink: 'listPhone',
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { props } = this.props;
        const { state } = this.state;
        return !shallowequal(props, nextProps) || !shallowequal(state, nextState);
    }

    phoneSelect = (IdPhone) => {
        this.setState({
            activeLink: 'xx',
            selectPhone: IdPhone,
        })
    }

    getPhoneById = (IdPhone) => {
        const { phones } = this.props;
        return phones.filter(x => x.IdPhone === IdPhone)[0];
    }

    renderList = () => {
        const { phones } = this.props;
        return (
            <div>
                <div className="jumbotron jumbo">
                    <div className="container">
                            <div className="title"> Hello, Phones!</div>
                        
                            <div className="stylep">
                                "Lorem ipsum dolor sit amet, interdum turpis, aliquam dui et, sit pede justo, magna ullamcorper pharetra elit, curabitur lectus leo.
                                 Mi eget nostra amet risus sociis. Ut tristique, elit wisi interdum. Mi eget nostra amet risus sociis.Mi eget nostra nostra."
                        </div>

                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="caja2" >
                            <div className="">
                                <div>
                                    {phones.map((phones) => {
                                        return (<div className="cajadetails" key={phones.IdPhone}><PhoneItem key={phones.IdPhone} phones={phones} changeHandler={this.phoneSelect} /></div>);
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
    renderComponentItem = () => {
        const { activeLink, selectPhone } = this.state;
        if (activeLink === 'xx') {
            return (                
                <div>
                    {this.renderList()}
                    <div>
                        <PhoneDetails phone={this.getPhoneById(selectPhone)} cancelHandler={this.stateCancel} />
                    </div>
                </div>
            );
        }
        else {
            return (
                <div>
                    {this.renderList()}
                </div>
            );
        }
    }

    render = () =>{
        const { phones } = this.props;

        if (phones.length > 0) {
            return (this.renderComponentItem())

        } else {
            return (<p></p>)
        }
    }
}
