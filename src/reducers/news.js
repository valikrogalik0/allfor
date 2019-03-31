const initialState = {
    title: '',
    photoURL: '',
    text: '',
    id: 0,
};

export const news = (state = initialState, action) => {
    switch(action.type) {
    case 'GET_NEWS': return {
            title: action.payload.title,
            photoURL: action.payload.photoURL,
            text: action.payload.text,
            id: action.payload.id,
        }
    default: return state;
    }
};