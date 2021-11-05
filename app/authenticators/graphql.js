import Base from 'ember-simple-auth/authenticators/base';
import { useMutation } from 'glimmer-apollo';
import { SIGN_IN } from 'app/gql/mutations/sign-in';

export default class GraphqlAuthenticator extends Base {
  restore() {}

  signIn = useMutation(this, () => [
    SIGN_IN,
    {
      onComplete: (data) => {
        console.log('Received token:', data);
        return data;
      },
      onError: (error) => {
        console.error('Received an error:', error.message);
        return error.message;
      },
    },
  ]);

  async authenticate({ email, password }) {
    let variables = { email, password };
    this.signIn.mutate({ input: { variables } });
  }

  invalidate() {}
}
