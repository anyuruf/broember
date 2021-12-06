import Base from 'ember-simple-auth/authenticators/base';
import { useMutation } from 'glimmer-apollo';
import { SIGN_IN } from '../gql/mutations/sign-in';

export default class extends Base {
  signIn = useMutation(this, () => [
    SIGN_IN,
    {
      onComplete: (data) => {
        console.log('Received token:', data);
        return data;
      },
      onError: (error) => {
        console.error('Error:', error.message);
        throw new Error(error.message);
      },
    },
  ]);

  async authenticate(email, password) {
    await this.signIn.mutate({ email, password });
  }
}
