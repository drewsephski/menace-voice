import { expect, it, vi } from 'vitest';

import CreateWorkflowPage from './page';

const redirect = vi.hoisted(() => vi.fn(() => { throw new Error('NEXT_REDIRECT'); }));
vi.mock('next/navigation', () => ({ redirect }));

it('preserves legacy creation links with a server redirect to guided onboarding', () => {
    expect(() => CreateWorkflowPage()).toThrow('NEXT_REDIRECT');
    expect(redirect).toHaveBeenCalledWith('/agent-onboarding');
});
