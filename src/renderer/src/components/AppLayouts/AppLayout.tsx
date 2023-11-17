import { Menu } from 'antd'
import Link from 'antd/es/typography/Link'

const AppLayout = ({ children }) => {
  return (
    <div className="Menu">
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>메인</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/signin">
            <a>로그인</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      {children}
    </div>
  )
}

export default AppLayout
