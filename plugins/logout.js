import { ToastProgrammatic as Toast } from 'buefy'
export default (context, inject) => {
  inject('logout', async () => {
    await context.$auth.logout()
    Toast.open({
      duration: 3000,
      message: 'Successfully logged out.',
      type: 'is-success',
    })
  })
}
