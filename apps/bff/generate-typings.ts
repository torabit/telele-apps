import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ['./schema/**/*.gql'],
  path: join(process.cwd(), 'src/graphql.entity.ts'),
  outputAs: 'class',
});
