import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  logo: {
    width: 200,
    height: 70,
    marginBottom: 60,
  },
  title: {
    fontSize: 26,
    marginBottom: 30,
    color: '#333',
  },
  titleBold: {
    color: '#D60040', // warna merah seperti desain
    fontWeight: '700',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
  },
  buttonWrapper: {
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden', // supaya gradient mengikuti radius tombol
  },

  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    flexDirection: 'row',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 5,
  },

  footer: {
    textAlign: 'center',
    fontSize: 11,
    color: '#666',
    position: 'absolute',
    bottom: 30,
  },
});
