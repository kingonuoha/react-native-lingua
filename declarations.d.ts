declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";


declare module "@clerk/expo/token-cache" {
	const tokenCache: any;
	export { tokenCache };
	export default tokenCache;
}
