import { connect } from 'react-redux';
import { loadListPhoneAction } from './actions/loadListPhone';
import { listPhone } from './listPhone';


const mapStateToProps = (state) => ({
    phones: state.phones,
});

const mapDispatchToProps = (dispatch) => ({
    getPhones: () => dispatch(loadListPhoneAction())
});

export const ListPhoneContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(listPhone);
