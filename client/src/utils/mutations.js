import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_THOUGHT = gql`
  mutation addThought($thoughtText: String!) {
    addThought(thoughtText: $thoughtText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($thoughtId: ID!, $commentText: String!) {
    addComment(thoughtId: $thoughtId, commentText: $commentText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

/** ✅ ADD TO-DO LIST MUTATIONS **/
export const ADD_TODO = gql`
  mutation addToDo($task: String!) {
    addToDo(task: $task) {
      _id
      task
      completed
    }
  }
`;

export const TOGGLE_TODO = gql`
  mutation toggleToDo($id: ID!) {
    toggleToDo(id: $id) {
      _id
      task
      completed
    }
  }
`;

export const DELETE_TODO = gql`
  mutation deleteToDo($id: ID!) {
    deleteToDo(id: $id) {
      _id
      task
      completed
    }
  }
`;
