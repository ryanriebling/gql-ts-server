// resolverMap.ts
import { IResolvers } from 'graphql-tools';
import { Album } from './generated/graphql';

const resolverMap: IResolvers = {
  Query: {
    albumSet(_: void, args: void): Album[] {
      return [{ title: 'Creamfields ID 2018' }];
    },
  },
};
export default resolverMap;
