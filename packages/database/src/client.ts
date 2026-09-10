export function getDatabaseClient() {
  return {
    provider: 'prisma',
    status: 'not-initialized',
  };
}
