import Route from '@ember/routing/route';

export default class AddMemberRoute extends Route {
  beforeModel(transition) {
    this.session.requireAuthentication(transition, 'login');
  }
}
