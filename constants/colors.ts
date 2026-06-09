/**
 * Raw color values that mirror CSS design tokens from global.css.
 * Use these ONLY for React Native component props that don't support
 * NativeWind classes (e.g. icon color, placeholderTextColor).
 * For all other styling, use the NativeWind utility classes instead.
 */
export const colors = {
  primary: "#6c4ef5",
  primaryDeep: "#5b3bf6",
  primaryLight: "#f4f4ff",
  primaryBlue: "#4d8bff",
  green: "#21c16b",
  warning: "#ffc800",
  streak: "#ff8a00",
  error: "#ff4d4f",
  info: "#4d8bff",
  textPrimary: "#0d132b",
  textSecondary: "#6b7280",
  muted: "#9ca3af",
  border: "#e5e7eb",
  surface: "#f6f7fb",
  background: "#ffffff",
} as const;
