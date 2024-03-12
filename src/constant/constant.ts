
export const enum SCREENS {
    SPLASHSCREEN = 'SPLASHSCREEN',
    HOME = 'HOME',
    SEARCH = 'SEARCH',
    BOOKMARK = 'BOOKMARK',
    SETTING = 'SETTING',
    DETAIL='DETAIL'
}

export const ICONS = {
    home: require('../images/home-icon.png'),
    search: require('../images/search-icon.png'),
    bookmark: require('../images/bookmark-icon.png'),
    setting: require('../images/setting-icon.png'),
    iconBack:require('../images/icon-back.png'),
    iconForward:require('../images/icon-arrow-forward.png')

}

export const TEXT = {
    LOGIN:'LOGIN',
    SIGNUP:'SIGNUP',
}

export const IMAGES = {
    backgroundSlashScreen: require('../images/splashscreen.jpg'),
    avatar:require('../images/testimonial_img1.png'),
    recipeBookMark: require('../images/fry-sushi.png')
}

export const COLORS = {
    black: '#000000',
    transparent:"transparent",
    white:'#ffffff',
    primary:'#11b88f',
    gray:'#ccc',
    blackGray:'#5e5e62',
    lightGray:'#eaebee',
    lightGreen:'#e8faef'

}

export const SIZES = {
    paddingLarge: 36,
    paddingMedium: 24,
    paddingSmall: 16,
    paddingExtraSmall:8,
    marginLarge:32,
    marginMedium:24,
    marginSmall:16,
    marginExtraSmall:8
}

export const FONTS = {
    fontLarge:42,
    fontMedium:24,
    fontSmallMedium:20,
    fontSmall:16,
    fontWeightLarge:'700',
    fontWeightMedium:'500'
}

export const STORAGE_KEY = {
    bookmark:'BOOKMARK'
}