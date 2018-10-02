import { StateReducer } from '../../reducers';
import { connect } from 'react-redux';
import { Spinner } from './spinner';


const mapStateToProps = (state) => ({
    httpLoading: state.httpLoading
});

export const SpinnerContainer = connect(
    mapStateToProps,
)(Spinner);
