import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const backgroundImageUri = 'https://i.postimg.cc/bvmNrJPt/03.jpg';
  const handleLogin = () => {
    Alert.alert('Bienvenido Humano', 'Te has logeado con éxito');
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: backgroundImageUri }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.iconContainer}>
          <Ionicons name="logo-playstation" size={80} color="black" />
          <Text style={styles.title}>Bienvenido</Text>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={24} color="#0a2fff" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Correo electrónico"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={24} color="#0a2fff" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              secureTextEntry
            />
          </View>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          </TouchableOpacity>
          <View style={styles.socialButtonsContainer}>
            <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#3b5998' }]}>
              <Ionicons name="logo-facebook" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#ff9f1a' }]}>
              <Ionicons name="logo-instagram" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#db4437' }]}>
              <Ionicons name="logo-google" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.forgotPasswordButton}>
            <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>¿No tienes una cuenta?</Text>
            <TouchableOpacity style={styles.signupButton}>
              <Text style={styles.signupButtonText}>Registrarse</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  contentContainer: {
    backgroundColor: 'rgba(196, 196, 196, 0.79)',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    maxWidth: 400,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 40,
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: 'black',
  },
  loginButton: {
    width: '100%',
    height: 40,
    backgroundColor: '#373fcdde',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  socialButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  forgotPasswordButton: {
    marginTop: 20,
    alignSelf: 'center',
  },
  forgotPasswordText: {
    color: 'blue',
    fontSize: 16,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  signupText: {
    fontSize: 16,
  },
  signupButton: {
    marginLeft: 5,
  },
  signupButtonText: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
  },
});