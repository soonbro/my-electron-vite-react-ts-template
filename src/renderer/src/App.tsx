import { Button, ColorPicker, ConfigProvider, Divider, Input, Space, theme } from 'antd'
import { useState } from 'react'

const { useToken } = theme

const App: React.FC = () => {
  const [primary, setPrimary] = useState('#1677ff')
  const { token } = useToken()

  return (
    <div id="app">
      <>
        <ColorPicker
          showText
          value={primary}
          onChangeComplete={color => setPrimary(color.toHexString())}
        />
        <Divider />
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: primary,
            },
          }}
        >
          <Space>
            <Input placeholder="Please Input" />
            <Button type="primary">Submit</Button>
          </Space>
          <div
            style={{
              backgroundColor: token.colorPrimaryBg,
              padding: token.padding,
              borderRadius: token.borderRadius,
              color: token.colorPrimaryText,
              fontSize: token.fontSize,
            }}
          >
            Consume Design Token
          </div>
        </ConfigProvider>
      </>
    </div>
  )
}

export default App
