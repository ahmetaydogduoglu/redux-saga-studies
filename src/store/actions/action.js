
export const ageUp = () => {
    return { type: 'AGE_UP' }
}
export const ageDown = () => {
    return { type: 'AGE_DOWN' }
}
export const itemDel = (id) => {
    console.log(id);
    return { type: 'DEL_ITEM', payload: id }
}