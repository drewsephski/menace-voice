import { writeFileSync } from 'node:fs';
import { fireEvent, render, screen } from '@testing-library/react';
import { it, vi } from 'vitest';
import OverviewPage from '../../overview/page';
vi.mock('next/navigation', () => ({useRouter: () => ({push: vi.fn()})}));
vi.mock('@/lib/auth', () => ({useAuth: () => ({user: {id: 'preview', displayName: 'Drew'}, provider: 'stack', loading: false, getAccessToken: vi.fn(), redirectToLogin: vi.fn()})}));
vi.mock('@/client/sdk.gen', () => ({getModelConfigurationV2ApiV1OrganizationsModelConfigurationsV2Get: vi.fn(), createWorkflowFromTemplateApiV1WorkflowCreateTemplatePost: vi.fn()}));
it('exports the rendered overview for visual inspection', () => {
  const { container } = render(<OverviewPage />);
  for (const state of ['empty', 'filled']) {
    if (state === 'filled') fireEvent.click(screen.getByRole('button', {name: 'Receptionist'}));
    for (const theme of ['light', 'dark']) {
      writeFileSync(`/tmp/menace-quick-setup-preview/${theme}${state === 'filled' ? '-filled' : ''}.html`, `<!doctype html><html class="${theme}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="/layout.css"><style>body {font-family: Geist, Arial, sans-serif}</style></head><body>${container.innerHTML}</body></html>`);
    }
  }
});
