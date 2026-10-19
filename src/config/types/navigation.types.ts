export type NavigationLink = {
  label: string;
  hint?: string;
  route: string;  
};

export type NavigationLinks = Record<string, NavigationLink>;

export type NavigationMenuItem = {
  label: string;
  hint?: string;
  route: string;  

  children?: NavigationLink[];
}
export type NavigationMenu = Record<string, NavigationMenuItem>;


