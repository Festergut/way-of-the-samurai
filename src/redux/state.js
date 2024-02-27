import DialogsReducer from "./DialogsReducer"

let store = {
    _state: {
        FriendsData: [
            {'id': 1, "name": "Masha", "followed": false, "description": "My name is masha and im a whore", 
            "city": "netherlands",
            "img_url": "https://thegillnetter.com/wp-content/uploads/2022/08/IMG-0897.jpg"},
            {'id': 2, "name": "Minority", "followed": false, "description": "hello minority class", 
            "city": "minor city",
             "img_url": "https://grist.org/wp-content/uploads/2020/08/destroying-term-minority.jpg"},
            {'id': 3, "name": "Makiavelly", "followed": false, "description": "im really genius", 
            "city": "Florence",
            "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Portrait_of_Niccol%C3%B2_Machiavelli_by_Santi_di_Tito.jpg/640px-Portrait_of_Niccol%C3%B2_Machiavelli_by_Santi_di_Tito.jpg"},
            {'id': 4, "name": "Makaronina", "followed": false, "description": "blblllblblbll", 
            "city": "pan", 
            "img_url": "https://imgtest.mir24.tv/uploaded/images/crops/2023/February/870x489_0x352_detail_crop_20230202114303_b8a534ea_46d7de74f8ea0ec22dfaf323c872c881886f6cf74ffcc6a7363e24b6cce02d58.jpg"},
        ],
        DialogsData: {
            Dialogs: [
                {'id': 1, "name": "Masha"},
                {'id': 2, "name": "Maria"},
                {'id': 3, "name": "Makiavelly"},
                {'id': 4, "name": "Makaronina"},
            ],
            Messages: [
                {'id': 1, 'message': "hello"},
                {'id': 2, 'message': "nigga"},
                {'id': 3, 'message': "rabochii"},
                {'id': 4, 'message': "collective"},
                {'id': 5, 'message': "correctly"}
            ],
            Message: 'some text'
        },
    },
    getState() {
        return this._state;
    },

    _renderTree() {
        // callback
    },
    subscribe(observer) {
        this._renderTree = observer;
    },
    dispatch(action) {
        this._state.DialogsData = DialogsReducer(this._state.DialogsData, action)
        this._renderTree(this._state)
    }
}
window.state = store._state;