import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { usePrivy } from '@privy-io/expo';
import { Image } from 'expo-image';

export default function HomeScreen() {
  const { login, user } = usePrivy();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          source="https://images.pexels.com/photos/3277808/pexels-photo-3277808.jpeg"
          style={styles.backgroundImage}
          contentFit="cover"
        />
        <View style={styles.overlay}>
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subtitle}>Sign in to continue</Text>
          
          <TouchableOpacity style={styles.button} onPress={login}>
            <Text style={styles.buttonText}>Continue with Privy</Text>
          </TouchableOpacity>
          
          <Text style={styles.terms}>
            By continuing, you agree to our Terms of Service and Privacy Policy
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 32,
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 18,
    color: '#fff',
    marginBottom: 32,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    width: '100%',
    maxWidth: 320,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Inter-Bold',
    color: '#000',
    fontSize: 16,
  },
  terms: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
    marginTop: 16,
    maxWidth: 280,
  },
});