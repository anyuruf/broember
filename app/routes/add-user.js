import Route from '@ember/routing/route';

export default class AddUserRoute extends Route {
  beforeModel(transition) {
    this.session.requireAuthentication(transition, 'login');
  }
}
