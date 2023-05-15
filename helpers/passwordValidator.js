export function passwordValidator(password) {
  if (!password) return "Contraseña no puede estar vacia."
  if (password.length < 5) return 'Contraseña debe ser mayor a 5 carácteres.'
  return ''
}
