import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import { PrivyProvider } from 'privy-react-native';

export default function RootLayout() {
  useFrameworkReady();

  return (
    <PrivyProvider
      appId="cmbdy8k89011cie0o1c0qowdn"
      environment="production"
    >
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={{ title: 'Not Found' }} />
      </Stack>
      <StatusBar style="auto" />
    </PrivyProvider>
  );
}