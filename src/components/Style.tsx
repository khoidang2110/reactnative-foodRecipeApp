import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constant/constant';

export const style = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  btnPrimary: {
    padding: SIZES.paddingSmall,
    backgroundColor: COLORS.primary,
    borderRadius: 8,
  },
  textWhite: {
    color: COLORS.white,
    textAlign: 'center',
    fontWeight: '700',
  },
  btnOutline: {
    padding: SIZES.paddingSmall,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 8,
  },
  tabIconContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIconSelected: {
    tintColor: COLORS.primary,
  },
  tabIconUnSelected: {
    tintColor: COLORS.gray,
  },
  tabBottomLine: {
    position: 'absolute',
    bottom: 0,
    height: 3,
    backgroundColor: COLORS.primary,
    width: '100%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  containerSearch: {
    flexDirection: 'row',
    height: 42,
    backgroundColor: COLORS.lightGray,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  searchInput: {
    width: '100%',
    height: 42,
    color: COLORS.black,
  },
  item: {
    marginRight: SIZES.marginSmall,
  },
  itemImage: {
    borderRadius: 10,
    height: 350,
    width: 230,
  },
  itemContent: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: SIZES.paddingSmall,
    borderRadius: 20,
    overflow: 'hidden',
 
  },
  itemTextColor: {
    color: COLORS.white,
  },
  itemIcon: {
    tintColor: COLORS.primary,
  },
  itemContainerContent: {
    flexDirection: 'row',
    padding: SIZES.paddingExtraSmall,
    borderRadius: 10,
    backgroundColor:'rgba(52, 52, 52, 0.8)'
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  itemContainerCategory:{
    flexDirection:'row',
    padding:SIZES.paddingSmall,
    backgroundColor:'#f4f4f4',
    borderRadius:10,
    marginTop:SIZES.marginSmall
  },
  ItemCategoryImage:{
    borderRadius:10,
    width:80,
  height:80
  },
  itemCategoryWrapper:{
    marginLeft:SIZES.marginSmall,
    marginRight:SIZES.marginSmall,
    flex:1,
    justifyContent:'space-between'
  },
  itemCategoryTitle:{
    fontSize:FONTS.fontSmallMedium,
    fontWeight:'500'
  }
});
