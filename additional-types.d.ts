// For global CSS imports
declare module "*.css" {}

// For CSS Modules (if you use .module.css)
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}