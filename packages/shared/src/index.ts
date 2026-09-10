export type WorkspaceSummary = {
  id: string;
  name: string;
  members: number;
};

export const workspaceSections = ['chat', 'agents', 'docs', 'settings'] as const;
