

export const addUser = (name,email,avatar) => `
  mutation{
    addUser(name: "${name}", email: "${email}", avatar: "${avatar}") {
      name
      avatar
      email
      events
    }
  }
`;
export const updateUser = (token,events = []) => `
  mutation {
    updateUser(token: "${token}", events: "${events}") {
      events
    }
  }
`;
