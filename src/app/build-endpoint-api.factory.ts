import {BuildEndpointFactory} from 'mht-test-libraries';

export class BuildEndpointApiFactory extends BuildEndpointFactory {
  buildUrl(endpoint: string): string {
    return buildUrl(endpoint);
  }
}


export function buildUrl(endpoint): string {
  return 'nguyenvangiap' + endpoint;
}
