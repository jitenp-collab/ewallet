import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationref: any = createNavigationContainerRef();

export function getCurrentRoute() {
  if (navigationref.isReady()) {
    return navigationref.getCurrentRoute();
  }
  return null;
}