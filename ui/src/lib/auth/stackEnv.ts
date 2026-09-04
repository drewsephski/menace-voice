/**
 * Server-only Stack / Hexclave env. Compose may inject empty strings for the
 * unused alias; treat those as unset so HEXCLAVE_* wins.
 */
export function getStackSecretServerKey(): string | undefined {
  const value =
    process.env.HEXCLAVE_SECRET_SERVER_KEY?.trim() ||
    process.env.STACK_SECRET_SERVER_KEY?.trim() ||
    "";
  return value || undefined;
}

export function getStackApiUrl(): string | undefined {
  const value =
    process.env.HEXCLAVE_API_URL?.trim() ||
    process.env.STACK_AUTH_API_URL?.trim() ||
    "";
  return value || undefined;
}
