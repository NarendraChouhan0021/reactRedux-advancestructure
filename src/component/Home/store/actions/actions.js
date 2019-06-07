import t from "./types"

export function addItem(payload) {
    return { type: t.ADD_ITEM, payload:payload }
};

export function removeItem(payload,index) {
    let listArray=payload.filter((_, j) => j !== index)
    return { type: t.REMOVE_ITEM, payload:listArray }
};