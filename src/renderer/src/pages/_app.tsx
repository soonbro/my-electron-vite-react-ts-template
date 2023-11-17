import AppLayout from '@renderer/components/AppLayouts/AppLayout'
import { antdTheme, colors, sizes } from '@renderer/styles/themes'
import {
  Avatar,
  Button,
  ColorPicker,
  ConfigProvider,
  Divider,
  FloatButton,
  Input,
  Space,
  Switch,
  ThemeConfig,
  theme,
} from 'antd'
import { useMemo, useState } from 'react'

type Sizes = typeof sizes
type Colors = typeof colors

export interface DefaultTheme {
  sizes: Sizes
  colors: Colors
}
//const { useToken } = theme

const App: React.FC = () => {
  const [primary, setPrimary] = useState('#1677ff')

  return (
    <div id="app">
      <>
        <ConfigProvider theme={{ token: { colorPrimary: primary } }}>
          <AppLayout
            children={
              <ColorPicker
                //showText
                value={primary}
                onChangeComplete={color => {
                  setPrimary(color.toHexString())
                }}
              />
            }
          ></AppLayout>

          <Switch></Switch>
        </ConfigProvider>
        <Divider />
        <ConfigProvider theme={antdTheme}>
          <Space>
            <Input placeholder="Please Input" />
            <Button type="primary">Submit</Button>
          </Space>
          <div
            style={{
              backgroundColor: antdTheme.token?.colorPrimaryBg,
              padding: antdTheme.token?.padding,
              borderRadius: antdTheme.token?.borderRadius,
              color: antdTheme.token?.colorPrimaryText,
              fontSize: antdTheme.token?.fontSize,
            }}
          >
            Consume Design Token
          </div>
          <FloatButton></FloatButton>
        </ConfigProvider>
      </>
    </div>
  )
}

export default App
