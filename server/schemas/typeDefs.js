const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    thoughts: [Thought]!
    todos: [ToDo]!  # 🔹 Added To-Do List to User
  }

  type Thought {
    _id: ID
    thoughtText: String
    thoughtAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type ToDo {   # 🔹 New To-Do Type
    _id: ID
    task: String!
    completed: Boolean!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(thoughtId: ID!): Thought
    me: User
    getToDos: [ToDo]  # 🔹 Query for all To-Dos

  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addThought(thoughtText: String!): Thought
    addComment(thoughtId: ID!, commentText: String!): Thought
    removeThought(thoughtId: ID!): Thought
    removeComment(thoughtId: ID!, commentId: ID!): Thought

      # 🔹 To-Do List Mutations
    addToDo(task: String!): ToDo
    toggleToDo(id: ID!): ToDo
    deleteToDo(id: ID!): ToDo
  }
`;

module.exports = typeDefs;
