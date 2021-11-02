import Base from 'ember-simple-auth/authenticators/base';
import { queryManager } from 'ember-apollo-client';
import mutation from 'app/gql/mutations/sign-in';

export default class GraphqlAuthenticator extends Base {
  @queryManager apollo;

  restore() {}

  async authenticate({ email, password }) {
    let variables = { email, password };
    const token = await this.apollo.mutate({ mutation, variables }, 'sign-in');
    return token;
  }

  invalidate() {}
}
