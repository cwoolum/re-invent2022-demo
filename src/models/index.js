// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Recommendation } = initSchema(schema);

export {
  Recommendation
};