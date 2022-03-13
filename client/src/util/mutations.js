import {
  gql
} from "@apollo/client";

export const CREATE_USER = gql `
  mutation createUser($email: String!, $password: String!) {
    createUser(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const LOGIN = gql `
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const ADD_BOX = gql`
  mutation AddBox($title: String!) {
    addBox(title: $title) {
      _id
      title
    }
  }
`;

export const ADD_ITEM = gql`
  mutation AddBox($boxId: ID!, $title: String!) {
    addItem(BoxId: $boxId, title: $title) {
      _id
      title
    }
  }
`;

export const UPDATE_BOX = gql`
  mutation AddBox($id: ID!, $title: String!) {
    updateBox(_id: $id, title: $title) {
      _id
      title
    }
  }
`;

export const UPDATE_ITEM = gql`
  mutation AddBox($id: ID!, $title: String!) {
    updateItem(_id: $id, title: $title) {
      _id
      title
    }
  }
`;

export const REMOVE_BOX = gql`
  mutation AddBox($boxId: ID!) {
    removeBox(boxId: $boxId) {
      _id
      title
    }
  }
`;

export const REMOVE_ITEM = gql`
  mutation AddBox($boxId: ID!, $itemId: ID!) {
    removeItem(boxId: $boxId, itemId: $itemId) {
      _id
      title
    }
  }
`;