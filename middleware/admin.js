export default function (context) {
  // If the user is not authenticated
  if (!process.env.admins.includes(context.$auth.user.id)) {
    return context.redirect('/')
  }
}
