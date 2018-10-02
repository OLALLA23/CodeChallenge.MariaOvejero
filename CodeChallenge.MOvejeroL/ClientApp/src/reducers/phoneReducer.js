import { actiontypes } from "../common/constants/actiontypes";



export const phoneReducer = (state = [], action) => {
    switch (action.type) {
        case actiontypes.LOAD_LIST_PHONE:
            return handleloadListPhoneAction(state, action.payload);
    }
    return state;
};

const handleloadListPhoneAction = (state, payload) => {
    return payload;
};