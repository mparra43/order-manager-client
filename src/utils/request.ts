import { API_URL } from '@/config';
import { GraphQLClient } from 'graphql-request';

const url = API_URL
export const client = new GraphQLClient(url, {
 
});
