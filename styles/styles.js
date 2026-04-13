import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
    padding: 20,
    paddingTop: 50,
  },

  h1: {
    color: '#2ecc71',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    textTransform: 'uppercase'
  },

  h3: {
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
    fontStyle: 'italic',
  },

  inputArea: {
    flexDirection: 'row',
    marginBottom: 20
  },

  input: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    color: '#000',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#2ecc71',
    marginRight: 10,
  },

  button: {
    backgroundColor: '#2ecc71',
    padding: 12,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textButton: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

  itemView: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    borderLeftWidth: 6,
    borderLeftColor: '#2ecc71',
  },

  itemTouchable: {
    flex: 1,
    marginRight: 10,
  },

  item: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '600',
    flexWrap: 'wrap',
  },

  itemConclude: {
    color: '#2ecc71',
    textDecorationLine: 'line-through',
    fontWeight: 'bold',
  },

  buttonRemove: {
    color: '#e74c3c',
    fontWeight: 'bold',
    fontSize: 14,
    padding: 5,
  },

  emptyList: {
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: 40,
    fontSize: 16,
    fontStyle: 'italic'
  },
});