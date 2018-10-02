import * as React from 'react';
import * as shallowequal from 'shallowequal';
import { PhoneDetails } from './phoneDetails';
import { PhoneItem } from './phoneItem';


export class listPhone extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getPhones();
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

        return !shallowequal(this.props, nextProps) || !shallowequal(this.state, nextState);
    }

    phoneSelect = (IdPhone) => {
        this.setState({
            activeLink: 'xx',
            selectPhone: IdPhone,
        })
    }

    getPhoneById = (IdPhone) => {
        return this.props.phones.filter(x => x.IdPhone === IdPhone)[0];
    }

    renderList = () => {
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
                                    {this.props.phones.map((phones) => {
                                        return (<div className="cajadetails"><PhoneItem phones={phones} changeHandler={this.phoneSelect} key={phones.IdPhone} /></div>);
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
        if (this.state.activeLink === 'xx') {
            return (

                <div>
                    {this.renderList()}
                    <div>
                        <PhoneDetails phone={this.getPhoneById(this.state.selectPhone)} cancelHandler={this.stateCancel} />
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

    render() {

        if (this.props.phones.length > 0) {
            return (this.renderComponentItem())

        } else {
            return (<p></p>)
        }
    }
}
