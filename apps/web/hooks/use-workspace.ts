import { useMemo } from 'react';

export function useWorkspace() {
  return useMemo(
    () => ({
      id: 'demo-workspace',
      name: 'WealthyExpress Demo Workspace',
      plan: 'team',
    }),
    [],
  );
}
