import {StyleSheet} from 'react-native';

let CIRCLE_RADIUS = 30;

export default StyleSheet.create({
  logo: {
    width: 200,
    height: 100,
    marginBottom: 0,
    marginTop: 75,
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
    ballContainer: {
    height:100,
  },
  circle: {
    backgroundColor: "skyblue",
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS
  },
  row: {
    flexDirection: "row"
  },  
  dropZone: {
    height: 100,
    backgroundColor: 'white'
  },
  text: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    textAlign: "center",
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold"
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  buttonLeft: {
    backgroundColor: 'transparent',
    flex: 1,
    width: 180,
    height: 180,
    position: 'absolute',
    top: -60,
    left: -180
  },
  buttonRight: {
    backgroundColor: 'transparent',
    flex: 1,
    width: 180,
    height: 180,
    position: 'absolute',
    top: -60,
    right: -180
  },
  iconRight: {
    backgroundColor: 'transparent',
    flex: 1,
    width: 120,
    height: 120,
    position: 'absolute',
    top: -30,
    right: -150
  },
  iconLeft: {
    backgroundColor: 'transparent',
    flex: 1,
    width: 120,
    height: 120,
    position: 'absolute',
    top: -30,
    left: -150
  },
  textLeft: {
    position: 'absolute',
    top: 110,
    right: -180,
    fontFamily: 'Gill Sans',
    fontSize: 16,
    color: 'white'
  },
  textRight: {
    position: 'absolute',
    top: 110,
    left: -180,
    fontFamily: 'Gill Sans',
    fontSize: 16,
    color: 'white'

  },
  iconSmall: {
    width: 100,
    height: 100,
  },
  scrollstyle: {
    marginBottom: 30,
    paddingLeft: 30,
  },
  font: {
    fontFamily: 'Gill Sans'
  },

  viewButtons: {
    width: 75,
    height: 75,
    backgroundColor: '#00b2ca',
    margin: 5,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonFrame: {
    width: '100%',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    marginBottom: 90
  },

  screenFrame: {
    flexDirection: 'column',
    flex: 1,
    paddingTop: 50,
    width: '100%'
  },

  searchBarView: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 10,
    width: '100%',
    height: 35,
  },

  searchBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: 250,
    height: '100%',
    borderColor: '#B6B4B4',
    borderWidth: 1,
  }

});