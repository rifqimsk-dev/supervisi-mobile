import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },

  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 60,
    backgroundColor: '#fff',
  },

  logo: {
    width: 200,
    height: 70,
    marginBottom: 60,
  },

  title: {
    fontSize: 26,
    fontWeight: '600',
    color: '#333',
    marginBottom: 1,
  },

  subtitle: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 40,
  },

  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },

  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },

  otpInput: {
    width: 45,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    fontSize: 20,
    textAlign: 'center',
  },

  buttonWrapper: {
    marginTop: 10,
  },

  button: {
    paddingVertical: 13,
    borderRadius: 8,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  resendText: {
    marginTop: 15,
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },

  resendLink: {
    color: '#D11342',
    fontWeight: '600',
  },

  footerContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },

  footer: {
    fontSize: 11,
    textAlign: 'center',
    color: '#aaa',
    marginBottom: 20,
  },
});
