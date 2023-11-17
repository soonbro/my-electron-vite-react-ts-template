import { ThemeConfig, theme } from 'antd'
import { rgba } from 'polished'

export const sizes = {}

const _colors = {
  primary: '#FFD369', //255, 211, 105
  sidebarBG: '#2E3136', //#2E3136
  contentBG: '#36393F', //#36393F
  selectedBG: '',
  buttonBG: '',
  scrollTrackBG: '#2e3338',
  scrollThumbBG: '#202225',
  borderColor: '#43474D',
  textColor1: '#ffffff',
  textColor2: '#8E9297',
  textColor3: '#000000',
  formFieldBG: '#313339',
  success: '#4caf50',
  error: '#FE6968', //	254, 105, 104
  relic: '#ff6000',
  ancient: '#c9a472',
  lotteRed: '#da291c',
  lotteGrey: '#545859',
  lotteSilver: '#8a8d8f',
  lotteChampagneGold: '#8B8075',
  lencisDarkGray: '#333333',
  lencisGray: '#bdbdbd',
  lotteCastleChandelierGold: '#8B6F4E',
  lotteCastleNebbioloWine: '#862633',
}

export const colors = _colors

export const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: colors.primary,
    colorPrimaryBg: rgba(colors.primary, 0.1),
    colorBgBase: colors.contentBG,
    colorBgContainer: colors.formFieldBG,
    colorText: colors.textColor1,
    colorTextQuaternary: colors.textColor2,
    colorBorder: colors.borderColor,
    colorIcon: colors.textColor1,
  },
  components: {
    Table: {
      colorBgContainer: colors.sidebarBG,
    },
    Popover: {
      colorBgElevated: colors.sidebarBG,
    },
  },
  //algorithm: theme.darkAlgorithm,
  //algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
}
