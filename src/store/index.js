const storeConfig = {
    state: {
        dataUser: ''
    },
    getters: {
        dataUser: state => state.dataUser
    },
    mutations: {
        setDataUser(state, data) {
            state.dataUser = data
        }
    },
    actions: {

    },
   
}
export default storeConfig;