// Type declarations for CSS files
declare module "*.css";

// Type declarations for CSS side-effect imports
declare module "./globals.css";

// Type declarations for CSS files
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

// Type declarations for CSS side-effect imports
declare module "./globals.css" {
  // This module is a side-effect import only
  const nothing: undefined;
  export default nothing;
}