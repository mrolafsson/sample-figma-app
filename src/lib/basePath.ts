// Base path for GitHub Pages deployment
// This is needed because assets in /public need the basePath prefix
export const basePath = process.env.NODE_ENV === 'production' ? '/sample-figma-app' : '';

export function getAssetPath(path: string): string {
  return `${basePath}${path}`;
}
