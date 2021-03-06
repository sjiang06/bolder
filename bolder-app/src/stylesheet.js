import {StyleSheet} from 'react-native';

let CIRCLE_RADIUS = 30;

export default StyleSheet.create({
  logo: {
    alignItems: 'center',
    width: '100%',
    height: 100,
    marginBottom: 0,
    top: 50,
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
  homeButton: {
    width:160,
    height:160,
    backgroundColor: 'transparent'
  },

  labelText: {
    fontFamily: 'Gill Sans',
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  },
  iconSmall: {
    width: 100,
    height: 100,
  },
  scrollstyle: {
    marginTop: 0,
    paddingTop: 0,
    marginBottom: 30,
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
    alignItems: 'center',
    marginBottom: 0,
  },

  nonActiveViewButtons: {
    width: 75,
    height: 75,
    backgroundColor: '#778899',
    margin: 5,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonFrame: {
    flexWrap: 'wrap',
    width: '100%',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  },

  screenFrame: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: 1,
    paddingTop: 50,
    width: '100%',
  },

  calendarFrame: {
    marginTop: 50
  },

  searchBarView: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 0,
    width: '100%',
    height: 35,
    marginTop: 0
  },

  calendarSearchBarView: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 0,
    width: '100%',
    height: 35,
    marginTop: 120
  },

  searchBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: 250,
    height: '100%',
    borderColor: '#00b2ca',
    borderWidth: 1,
  },

  achievementContainer: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingLeft: 30,
  },

  columnText: {
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'left'
  },

  pillFrame: {
    paddingTop: 3,
    width: 150,
  },

  columnView: {
    marginTop: 10,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  spacing: {
    marginTop: 50,
  }, 

  spacing_1: {
    marginTop: 100,
  },

  largeText: {
    marginTop: 20,
    fontSize:20, 
    color: '#646363', 
    paddingVertical: 0, 
    fontFamily: 'Gill Sans',
    textAlign: 'center'
  },

  horizontalFrame: {
    marginTop: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },

  dot: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: 40,
    height: 40,
    backgroundColor: '#E5E5E5',
    borderRadius: 50,
    alignItems: 'center',
    color: 'white',
    fontFamily: 'Gill Sans',
    fontSize:30, 
  },

  whiteText: {
    color: 'white',
    fontFamily: 'Gill Sans',
    fontSize: 20, 
  },

  centerColumn: {
    flexDirection: 'column',
    alignItems: 'center'
  },

  grayText: {
    color: '#646363',
    fontFamily: 'Gill Sans',
    fontSize: 15,
  },

  smallText: {
    fontSize: 14,
    color: '#646363',
    fontFamily: 'Gill Sans',
  },

  headerText: {
    fontSize: 30,
    color: '#646363',
    fontFamily: 'Gill Sans',
    marginBottom: 10
  },

  subheaderText: {
    fontSize: 25,
    color: '#646363',
    fontFamily: 'Gill Sans',
    marginBottom: 5
  },

  pillButton: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: 250,
    height: 50,
    backgroundColor: '#00b2ca',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center'
  },

  pillButtonText: {
    fontFamily: 'Gill Sans',
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
  },

  syncingButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },

  syncingButton: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 10,
  },

  bluetooth: {
    position: 'absolute',

  }
});