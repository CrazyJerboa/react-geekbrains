import update from 'react-addons-update';

const initialStore = {
    name: 'John Doe',
    age: 35,
    email: 'johndoe@gmail.com'
};

export default function profileReducer(store = initialStore) {
    return store;
}