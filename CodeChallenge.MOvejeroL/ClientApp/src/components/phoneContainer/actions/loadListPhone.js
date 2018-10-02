import { phonesAPI } from "../../../api";
import { actiontypes } from "../../../common/constants/actiontypes";
import { loadCallEnd, loadCallStart } from "../../spinnerContainer/actions/loadSpinner";


export const loadListPhoneAction = () => (dispatch) => {

    dispatch(loadCallStart());

    phonesAPI.GetDetailsPhones().then((result) => {
        dispatch(loadListPhoneActionResult(result));
    }).then(() => { dispatch(loadCallEnd()); });

    const loadListPhoneActionResult = (result) => ({
        type: actiontypes.LOAD_LIST_PHONE,
        payload: result,
        meta: {
            httpEnd: true
        }
    });

}