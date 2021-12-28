import Component from '@glimmer/component';
import { useMutation } from 'glimmer-apollo';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { SIGN_UP } from '../../gql/mutations/sign-up';

export default class AdminRegisterComponent extends Component {
  @tracked firstName;
  @tracked lastName;
  @tracked email;
  @tracked role;
  @tracked password;

  SignUp = useMutation(this, () => [
    SIGN_UP,
    {
      onComplete: (data) => {
        console.log('The token is: ', data);
      },
      onError: (error) => {
        throw new Error(error);
      },
    },
  ]);

  @action
  async createUser(e) {
    e.preventDefault();

    await this.SignUp.mutate({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      role: this.role,
      password: this.password,
    });
  }
}
