import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { usePrivy } from '@privy-io/react-native';
import { LogOut, Moon, Bell, Shield, HelpCircle } from 'lucide-react-native';

export default function SettingsScreen() {
  const { logout, user } = usePrivy();

  const SettingItem = ({ icon: Icon, title, onPress, color = '#000' }) => (
    <TouchableOpacity style={styles.settingItem} onPress={onPress}>
      <View style={styles.settingIcon}>
        <Icon size={24} color={color} />
      </View>
      <Text style={[styles.settingText, { color }]}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Settings</Text>
        
        <View style={styles.section}>
          <SettingItem icon={Moon} title="Dark Mode" onPress={() => {}} />
          <SettingItem icon={Bell} title="Notifications" onPress={() => {}} />
          <SettingItem icon={Shield} title="Privacy" onPress={() => {}} />
          <SettingItem icon={HelpCircle} title="Help & Support" onPress={() => {}} />
          
          {user && (
            <SettingItem
              icon={LogOut}
              title="Sign Out"
              onPress={logout}
              color="#FF3B30"
            />
          )}
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
    padding: 20,
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 32,
    marginBottom: 24,
  },
  section: {
    backgroundColor: '#f5f5f5',
    borderRadius: 16,
    overflow: 'hidden',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
    ...Platform.select({
      web: {
        cursor: 'pointer',
      },
    }),
  },
  settingIcon: {
    marginRight: 16,
  },
  settingText: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
  },
});