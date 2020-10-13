import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f0f0f7',
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
    fontWeight: '700'
  },

  touchableOpacityStyle: {
    backgroundColor: '#ff9000',
    borderRadius: 50,
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 25,
    bottom: 20,
    zIndex: 15,
  },

  post: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 15,
    // padding: 12,
    // shadowOffset: { width: 5, height: 10 },
    shadowColor: '#ff9000',
    shadowOffset: {
      width: 0,
      height: -22,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  title: {
    // fontSize: 18,
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 37,
    padding: 12,
    // maxWidth: 180,
  },

  content: {
    marginLeft: 15,
    color: '#000',
    fontSize: 16,
    // marginTop: 24,
    // color: '#d4c2ff',
    lineHeight: 26,
    paddingHorizontal: 12,
  },

  detailsButton: {
    marginTop: 12,
  },

  detailsButtonRemove: {
    marginTop: 12,
  },

  detailsButtonText: {
    fontSize: 16,
    fontWeight: '700',
  },

  detailsButtonTextRemove: {
    fontWeight: '700',
    fontSize: 16,
    color: '#F15E5E',
  },

  containerButtons: {
    flexDirection: 'row',
    // alignContent: 'space-between',
    justifyContent: 'space-between',
    backgroundColor: '#fafafc',
    paddingVertical: 22,
    paddingHorizontal: 25,
    // alignItems: 'center',
    borderTopWidth: 1,
    marginTop: 24,
    borderColor: '#e6e6f0',
  }

})

export default styles
