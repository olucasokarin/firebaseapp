import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f7',
    justifyContent: 'center',
  },

  title: {
    color: '#000',
    fontSize: 32,
    fontWeight: '700',
    alignSelf: 'center',
    // marginVertical: 30
    marginBottom: 65
  },

  createText: {
    alignSelf: 'center',
    fontSize: 18,
  },

  searchForm: {
    margin: 24,
  },

  input: {
    height: 54,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },
  submitButton: {
    backgroundColor: '#04d361',
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
})

export default styles
