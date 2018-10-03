import { actiontypes } from "../common/constants/actiontypes";


export const httpReducer = (state = true, action) => {
    switch (action.type) {
        case actiontypes.HTTP_CALL_START:
            return handleHttpStart(state, action.payload);
        case actiontypes.HTTP_CALL_END:
            return handleHttpEnd(state, action.payload);
        default: return state;
    }
};

const handleHttpStart = (state, payload) => {
    return payload;
};

const handleHttpEnd = (state, payload) => {
    return payload;
};