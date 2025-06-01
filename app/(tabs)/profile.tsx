import { StyleSheet, View, Text, SafeAreaView, Platform } from 'react-native';
import { usePrivy } from '@privy-io/react-native';
import { Image } from 'expo-image';

export default function ProfileScreen() {
  const { user } = usePrivy();

  if (!user) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.message}>Please sign in to view your profile</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Image
            source="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg"
            style={styles.coverImage}
            contentFit="cover"
          />
          <View style={styles.avatarContainer}>
            <Image
              source={user.avatarUrl || "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"}
              style={styles.avatar}
              contentFit="cover"
            />
          </View>
        </View>

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{user.displayName || 'Anonymous User'}</Text>
          <Text style={styles.email}>{user.email}</Text>
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
  header: {
    height: 200,
    position: 'relative',
  },
  coverImage: {
    width: '100%',
    height: '100%',
  },
  avatarContainer: {
    position: 'absolute',
    bottom: -50,
    left: '50%',
    transform: [{ translateX: -50 }],
    borderRadius: 75,
    borderWidth: 4,
    borderColor: '#fff',
    overflow: 'hidden',
    ...Platform.select({
      web: {
        transform: 'translateX(-50%)',
      },
    }),
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileInfo: {
    marginTop: 60,
    padding: 20,
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    marginBottom: 4,
  },
  email: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#666',
  },
  message: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
});