import axios from 'axios'

export const state = () => ({
  apps: []
})

export const actions = {
  async loadApps(context) {
    try {
      const { data } = await axios.get('http://localhost:5000/api/apps')
      context.commit('setApps', data)
    } catch (err) {
      console.error('Failed to load apps.')
      console.error(err)
    }
  }
}

export const mutations = {
  setApps(state, apps) {
    state.apps = [...apps]
  }
}
