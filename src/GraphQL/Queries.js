
export const getUserQuery = (token, email) =>
  `
  query {
  getUser(email: "${email}", token: "${token}") {
    token
    name
    email
    avatar
    events
  }
}`



