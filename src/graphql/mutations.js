/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createShoppingListItem = /* GraphQL */ `
  mutation CreateShoppingListItem(
    $input: CreateShoppingListItemInput!
    $condition: ModelShoppingListItemConditionInput
  ) {
    createShoppingListItem(input: $input, condition: $condition) {
      id
      itemName
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateShoppingListItem = /* GraphQL */ `
  mutation UpdateShoppingListItem(
    $input: UpdateShoppingListItemInput!
    $condition: ModelShoppingListItemConditionInput
  ) {
    updateShoppingListItem(input: $input, condition: $condition) {
      id
      itemName
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteShoppingListItem = /* GraphQL */ `
  mutation DeleteShoppingListItem(
    $input: DeleteShoppingListItemInput!
    $condition: ModelShoppingListItemConditionInput
  ) {
    deleteShoppingListItem(input: $input, condition: $condition) {
      id
      itemName
      createdAt
      updatedAt
      owner
    }
  }
`;
