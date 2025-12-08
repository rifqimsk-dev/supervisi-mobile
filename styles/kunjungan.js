import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
  },

  // HEADER
  header: {
    backgroundColor: '#D11342',
    paddingTop: 15,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },

  // SECTION
  section: {
    marginTop: 15,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 6,
  },
  sectionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#444',
  },

  // CARD TODAY
  todayCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    flexDirection: 'row',
    padding: 10,
    elevation: 2,
    gap: 12,
  },
  todayImage: {
    width: 110,
    height: 80,
    borderRadius: 10,
  },
  todayName: {
    fontSize: 16,
    fontWeight: '700',
  },
  todayDesc: {
    fontSize: 13,
    marginTop: 2,
    color: '#444',
  },
  todayAddress: {
    fontSize: 11,
    marginTop: 4,
    color: '#666',
  },

  // LIST CARD
  listCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    elevation: 2,
    flexDirection: 'row',
  },
  listName: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 3,
  },
  listAddress: {
    fontSize: 12,
    color: '#555',
    marginBottom: 5,
  },
  listDateText: {
    fontSize: 11,
    color: '#777',
  },

  calendarBox: {
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendarText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#555',
  },

  // FLOATING BUTTON
  fab: {
    position: 'absolute',
    bottom: 0,
    right: 20,
    backgroundColor: '#D11342',
    width: 55,
    height: 55,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
  },
});
