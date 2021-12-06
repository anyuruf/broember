import Base from 'ember-simple-auth/authenticators/base';
import { useMutation } from 'glimmer-apollo';
import { SIGN_IN } from '../gql/mutations/sign-in';

export default class extends Base {
  signIn = useMutation(this, () => [
    SIGN_IN,
    {
      onComplete: (data) => {
        return data;
      },
      onError: (error) => {
        throw new Error(error);
      },
    },
  ]);

  async authenticate(email, password) {
    await this.signIn.mutate({ email, password });
  }
}
