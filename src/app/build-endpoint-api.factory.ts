import {BuildEndpointFactory} from 'mht-test-libraries';
import {environment} from '../environments/environment';

export class BuildEndpointApiFactory extends BuildEndpointFactory {
  buildUrl(endpoint: string): string {
    return buildUrl(endpoint);
  }
}


export function buildUrl(endpoint): string {
  if (endpoint) {
    if (endpoint.startsWith('/')) {
      return environment.api + endpoint;
    } else {
      return environment.api + '/' + endpoint;
    }
  } else {
    return environment.api;
  }
}
