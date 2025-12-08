import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },

  header: {
    height: 55,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  headerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },

  profileContainer: {
    marginTop: 40,
    alignItems: 'center',
  },

  avatarWrapper: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 3,
    borderColor: '#fff',
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  cameraIcon: {
    position: 'absolute',
    bottom: 3,
    right: 3,
    backgroundColor: '#D11342',
    width: 28,
    height: 28,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  nama: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },

  email: {
    fontSize: 14,
    color: '#888',
  },

  menuBox: {
    marginTop: 30,
    paddingHorizontal: 20,
  },

  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 3,
  },

  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  menuText: {
    marginLeft: 12,
    fontSize: 15,
    color: '#333',
  },
});
