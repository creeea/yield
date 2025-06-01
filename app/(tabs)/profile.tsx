import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { usePrivy } from 'privy-react-native';

export default function ProfileScreen() {
  const { user } = usePrivy();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Profile</Text>
        {user ? (
          <View style={styles.profileInfo}>
            <Text style={styles.email}>{user.email}</Text>
          </View>
        ) : (
          <Text style={styles.message}>Please sign in to view your profile</Text>
        )}
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
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  profileInfo: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 12,
  },
  email: {
    fontSize: 16,
    color: '#333',
  },
  message: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});