import { createStore } from 'vuex'

export default createStore({
  state: {
    title: "Salom hammaga",
    send_confirm_code: false,
    phone: ''
  },
  getters: {
  },
  mutations: {
    ConfirmCode(state) {
      state.send_confirm_code = !state.send_confirm_code
    },
    changePhoneNumber (state, phone) {
      state.phone = phone;
    }
  },
  actions: {
  },
  modules: {
  }
})
