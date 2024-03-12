import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant/constant';

export const style = StyleSheet.create({
  home:{
flex:1,
backgroundColor:'white'
  },
  toolBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SIZES.paddingSmall,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },
  tbTitle: {
    fontSize: FONTS.fontMedium,
    color: COLORS.primary,
    fontWeight: '700',
  },
  tbSubTitle: {
    color: COLORS.blackGray,
    // padding: SIZES.paddingMedium,
  },
  search:{
    paddingHorizontal:SIZES.paddingSmall
  },
  cHintRecipe:{
    flexDirection:'row',
    alignItems:"center",
    backgroundColor:COLORS.lightGreen,
    borderRadius:10,
    marginTop:SIZES.marginMedium,
    padding:SIZES.paddingSmall
  },
  cHintRecipeLink:{
    color:COLORS.primary,
    fontWeight:'700',
    marginTop:SIZES.marginSmall
  },
   cTrending:{
    padding:SIZES.paddingSmall
   },
   cTrendingTitle:{
    fontSize:FONTS.fontMedium,
    fontWeight:'700',
    marginBottom:SIZES.marginSmall
   },
   cCategory:{
   
    padding:SIZES.paddingSmall
   },
   cCategoryTitleWrapper:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
   },
   cCategoryTitle:{
    fontSize:FONTS.fontMedium,
    fontWeight:'700'
   }
});
