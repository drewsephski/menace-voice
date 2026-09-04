/**
 * Hexclave project configuration.
 *
 * Synced with the cloud project created at app.stack-auth.com / app.hexclave.com.
 * Google and GitHub OAuth use Hexclave-managed credentials — no separate
 * Google Cloud OAuth client is required for development.
 *
 * Menace Voice still uses @stackframe/stack at runtime (legacy SDK, same backend).
 * Connect the cloud project via STACK_* env vars on api + ui — see
 * docs/deployment/authentication.mdx.
 */
export const config = {
  apps: {
    installed: {
      authentication: {
        enabled: true,
      },
      teams: {
        enabled: true,
      },
      emails: {
        enabled: true,
      },
      analytics: {
        enabled: true,
      },
    },
  },
  auth: {
    password: {
      allowSignIn: true,
    },
    otp: {
      allowSignIn: true,
    },
    passkey: {
      allowSignIn: false,
    },
    oauth: {
      providers: {
        google: {
          type: "google",
          allowSignIn: true,
          allowConnectedAccounts: true,
        },
        github: {
          type: "github",
          allowSignIn: true,
          allowConnectedAccounts: true,
        },
      },
    },
  },
  teams: {
    createPersonalTeamOnSignUp: true,
    allowClientTeamCreation: true,
  },
  emails: {
    selectedThemeId: "a0172b5d-cff0-463b-83bb-85124697373a",
  },
};
