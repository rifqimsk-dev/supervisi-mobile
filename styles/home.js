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

  content: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },

  // WELCOME CARD
  cardWelcome: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 18,
    marginBottom: 18,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },

  title: {
    fontSize: 20,
    fontWeight: '500',
    color: '#333',
  },

  boldRed: {
    color: '#D11342',
    fontWeight: '700',
  },

  subtitle: {
    marginTop: 4,
    color: '#666',
    fontSize: 13,
  },

  // STATISTIC CARD
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 18,
    marginBottom: 18,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },

  iconCircle: {
    width: 45,
    height: 45,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },

  statNumber: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
  },

  statLabel: {
    fontSize: 14,
    color: '#555',
    marginTop: 2,
  },

  // FLOATING BUTTON
  fab: {
    position: 'absolute',
    bottom: 85,
    right: 20,
  },

  fabInner: {
    backgroundColor: '#D11342',
    width: 55,
    height: 55,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
  },
});
