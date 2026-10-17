export type NavigationLink = {
  label: string;
  hint?: string;
  route: string;
};

export type NavigationMenuItem = NavigationLink & {
  items?: NavigationMenuItem[];
};

export type NavigationLiteralLink = Omit<NavigationLink, 'route'>;

export type NavigationLiteralItem = NavigationLiteralLink & {
  items?: NavigationLiteralItem[];
};

export type NavigationRouteLink = Pick<NavigationLink, 'route'>;

export type NavigationRouteItem = NavigationRouteLink & {
  items?: NavigationRouteItem[];
};
