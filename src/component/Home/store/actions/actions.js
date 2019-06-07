import t from "./types"

export function addItem(payload) {
    return { type: t.ADD_ITEM, payload:payload }
};