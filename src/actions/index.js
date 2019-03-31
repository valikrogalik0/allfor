export const news = payload => {
    return {
        type: 'GET_NEWS',
        payload: payload,
    }
}