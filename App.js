import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Alert,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  // State untuk navigasi antar halaman (login / home)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // State untuk form input login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Fungsi saat tombol login ditekan
  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Perhatian', 'Silakan masukkan email dan password terlebih dahulu!');
      return;
    }
    // Berhasil login dan pindah ke halaman Home
    setIsLoggedIn(true);
  };

  // Fungsi saat tombol logout ditekan
  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
  };

  // Tampilan Halaman Login
  if (!isLoggedIn) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />
        <View style={styles.loginBox}>
          {/* Judul Aplikasi */}
          <Text style={styles.title}>FROM LOGIN</Text>
          <Text style={styles.subtitle}>UTS MOBILE 1</Text>

          {/* Form Input Email & Password */}
          <TextInput
            style={styles.input}
            placeholder="INPUT EMAIL"
            placeholderTextColor="#81c784"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="INPUT PASSWORD"
            placeholderTextColor="#81c784"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {/* Tombol Login */}
          <TouchableOpacity style={styles.btnLogin} onPress={handleLogin}>
            <Text style={styles.btnText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.homeBox}>

        <Text style={styles.homeTitle}>HOME PAGE</Text>

        <View style={styles.profileCard}>
          <View style={styles.photoBox}>
            <Image
              source={require('./assets/fauzan.jpg')}
              style={styles.photoImage}
            />
          </View>
          <Text style={styles.profileName}>Muhammad Fauzan Putra</Text>
          <Text style={styles.profileName}>FICT 2B</Text>
        </View>

        {/* Grid Menu (2 Baris x 2 Kolom) */}
        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => Alert.alert('GOFOOD', 'Mau Makan APA?')}>
            <Text style={styles.menuText}>GOFOOD</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => Alert.alert('GORIDE', 'Mau Jalan Kemana?')}>
            <Text style={styles.menuText}>GORIDE</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => Alert.alert('GOMART', 'Mau Belanja Apa?')}>
            <Text style={styles.menuText}>GOMART</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuButton}
            onPress={() => Alert.alert('GOSEND', 'Mau Kirim Apa?')}>
            <Text style={styles.menuText}>GOSEND</Text>
          </TouchableOpacity>
        </View>

        {/* Tombol Logout */}
        <TouchableOpacity style={styles.btnLogout} onPress={handleLogout}>
          <Text style={styles.btnLogoutText}>TOMBOL LOGOUT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// Styling simpel warna hijau & putih khas tugas mahasiswa
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5faf6', // Putih kehijauan lembut
    justifyContent: 'center',
    alignItems: 'center',
  },

  // ===== STYLE HALAMAN LOGIN =====
  loginBox: {
    width: '85%',
    maxWidth: 320,
    alignItems: 'center',
    backgroundColor: '#ffffff', // Putih
    padding: 24,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#2e7d32', // Hijau
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2e7d32', // Hijau utama
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4caf50', // Hijau muda
    textAlign: 'center',
    marginBottom: 35,
    marginTop: 5,
  },
  input: {
    width: '100%',
    height: 48,
    borderWidth: 1.5,
    borderColor: '#2e7d32', // Border hijau
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    fontSize: 14,
    color: '#1b5e20',
    backgroundColor: '#ffffff', // Background input putih
  },
  btnLogin: {
    backgroundColor: '#2e7d32', // Tombol hijau solid
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#1b5e20',
  },
  btnText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff', // Teks tombol putih
    textAlign: 'center',
  },

  // ===== STYLE HALAMAN HOME =====
  homeBox: {
    width: '85%',
    maxWidth: 340,
    alignItems: 'center',
  },
  homeTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2e7d32', // Judul hijau
    marginBottom: 20,
    textAlign: 'center',
  },
  profileCard: {
    width: '100%',
    borderWidth: 1.5,
    borderColor: '#2e7d32', // Border hijau
    borderRadius: 10,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    backgroundColor: '#ffffff', // Card putih
  },
  photoBox: {
    width: 90,
    height: 90,
    borderWidth: 1.5,
    borderColor: '#2e7d32', // Border foto hijau
    borderRadius: 16,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    backgroundColor: '#e8f5e9', // Latar foto hijau pastel
  },
  photoImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  profileName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1b5e20', // Teks nama hijau tua
  },
  menuContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  menuButton: {
    width: '47%',
    borderWidth: 1.5,
    borderColor: '#2e7d32', // Border hijau
    borderRadius: 8,
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    backgroundColor: '#ffffff', // Menu putih
  },
  menuText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2e7d32', // Teks menu hijau
  },
  btnLogout: {
    borderWidth: 1.5,
    borderColor: '#2e7d32',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 24,
    marginTop: 15,
    backgroundColor: '#2e7d32', // Tombol hijau
  },
  btnLogoutText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff', // Teks tombol logout putih
    textAlign: 'center',
  },
});

