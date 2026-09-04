export const ACCOUNT_SETTINGS_PATH = "/handler/account-settings";

export function isAccountSettingsPath(pathname: string): boolean {
  return (
    pathname === ACCOUNT_SETTINGS_PATH ||
    pathname.startsWith(`${ACCOUNT_SETTINGS_PATH}/`)
  );
}
