import ApolloService from 'ember-apollo-client/services/apollo';
import { inject as service } from '@ember/service';
import { setContext } from '@apollo/client/link/context';

export default class OverridenApollo extends ApolloService {
  @service session;

  link() {
    let httpLink = super.link();

    let authLink = setContext((request, context) => {
      return this._runAuthorize(request, context);
    });
    return authLink.concat(httpLink);
  }

  _runAuthorize() {
    if (!this.session.isAuthenticated) {
      return {};
    }
    return new Promise((success) => {
      let headers = {};
      let token = this.session.data.authenticated.token;
      headers['Authorization'] = `Bearer ${token}`;

      success({ headers });
    });
  }

  clientOptions() {
    return {
      link: this.link(),
      cache: this.cache,
    };
  }

  /**
   * This is the options hash that will be passed to the ApolloClient constructor.
   * You can override it if you wish to customize the ApolloClient.
   *
   * @method clientOptions
   * @return {!Object}
   * @public
   */
}
