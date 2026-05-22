declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";

declare module "react-native-vector-icons/FontAwesome";
declare module "react-native-vector-icons/Ionicons";
declare module "react-native-vector-icons/*";

// Clerk Expo SDK (lightweight ambient types to avoid build-time errors when the
// package is not installed in the environment). These are intentionally minimal
// — install `@clerk/expo` for full typings.
declare module "@clerk/expo" {
	export const ClerkProvider: any;
	export const tokenCache: any;
	export function useSignUp(): any;
	export function useSignIn(): any;
	export function useAuth(opts?: any): any;
	export function useUser(): any;
	export function useClerk(): any;
	export const Show: any;
	export default {} as any;
}

declare module "@clerk/expo/token-cache" {
	const tokenCache: any;
	export { tokenCache };
	export default tokenCache;
}
