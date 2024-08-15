'use server';

import ErrorDialog from '@/components/features/ErrorDialog';
import { SettingsProvider } from '@/context/SettingsContext';

export default async function Home() {
  return (
    <SettingsProvider>
      <main className="p-6">
        <ErrorDialog />
      </main>
    </SettingsProvider>
  );
}
