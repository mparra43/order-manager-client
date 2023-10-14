import { gql } from 'graphql-request';

export const GET_ORDER = gql`
query GetOrder($orderId:String!, $document:Int!, $documentType:String!) {
  order(filters: { orderId: $orderId, document: $document, documentType: $documentType }) {
    id
    address
    estimatedDeliveryDate
    state
    orderProducts {
      id
      quantity
      product {
        name
        reference
      }
    }
    customer {
      name
      documentType
      document
    }
  }
}
`;

