import { actiontypes } from "../../../common/constants/actiontypes";


export const loadCallStart = () => ({
    type: actiontypes.HTTP_CALL_START,
    payload: true,
});

export const loadCallEnd = () => ({
    type: actiontypes.HTTP_CALL_END,
    payload: false,
});