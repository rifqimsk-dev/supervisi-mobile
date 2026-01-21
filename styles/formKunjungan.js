import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },

  header: {
    height: 55,
    flexDirection: 'row',
    justifyContent: 'left',
    paddingHorizontal: 20,
    alignItems: 'center',
  },

  headerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 6,
  },

  formWrapper: {
    padding: 11,
  },

  input: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    marginBottom: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ddd',
  },

  dropdown: {
    backgroundColor: '#fff',
    paddingHorizontal: 14,
    height: 52,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 14,
    justifyContent: 'center',
  },

  textInput: {
    backgroundColor: '#fff',
    paddingHorizontal: 14,
    height: 52,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 14,
    color: '#000',
  },

  rowBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },

  btnSave: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D11342',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '48%',
    justifyContent: 'center',
  },

  btnReset: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E96E2F',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '48%',
    justifyContent: 'center',
  },

  textBtn: {
    color: '#fff',
    marginLeft: 6,
    fontWeight: '600',
  },
});
