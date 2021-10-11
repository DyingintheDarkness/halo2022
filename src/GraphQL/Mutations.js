

export const addUserQuery = (name,email,avatar) => `
  mutation{
    addUser(name: "${name}", email: "${email}", avatar: "${avatar}") {
      name
      avatar
      email
      events
    }
  }
`;
export const updateUserQuery = (token,events = []) => `
  mutation {
    updateUser(token: "${token}", events: "${events}") {
      events
    }
  }
`;
