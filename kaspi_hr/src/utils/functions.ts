import type { NameTitleType } from "./types";

export const headerTitle = (path: string): string => {
  const nameTitle: NameTitleType = {
    '/': 'Log In',
    '/sign-up': 'Sign Up',
    '/feed': 'Feed',
    '/profile': 'Profile',
  }
  const contentRouteRegex = /^\/content(\/.*)?$/;

  if (contentRouteRegex.test(path)) {
    return 'Content';
  }

  return nameTitle[path];

}