/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRecommendation = /* GraphQL */ `
  query GetRecommendation($id: ID!) {
    getRecommendation(id: $id) {
      id
      name
      description
      address
      lat
      long
      coverImage
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listRecommendations = /* GraphQL */ `
  query ListRecommendations(
    $filter: ModelRecommendationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecommendations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        address
        lat
        long
        coverImage
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRecommendations = /* GraphQL */ `
  query SyncRecommendations(
    $filter: ModelRecommendationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRecommendations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        address
        lat
        long
        coverImage
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
