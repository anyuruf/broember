import EmberRouter from '@ember/routing/router';
import config from 'broember/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('add-user');
  this.route('add-member');
  this.route('about');
});
