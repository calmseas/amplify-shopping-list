/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getShoppingListItem = /* GraphQL */ `
  query GetShoppingListItem($id: ID!) {
    getShoppingListItem(id: $id) {
      id
      itemName
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listShoppingListItems = /* GraphQL */ `
  query ListShoppingListItems(
    $filter: ModelShoppingListItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShoppingListItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        itemName
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
