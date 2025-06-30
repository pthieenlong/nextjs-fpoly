import Link from 'next/link'
function Navbar() {
  return (
    <ul className="flex align-middle">
      <li className="p-4">
        <Link href="/">Trang chủ</Link>
      </li>
      <li className="p-4">
        <Link href="/product">Sản phẩm</Link>
      </li>
      <li className="p-4">
        <Link href="/news">Tin tức</Link>
      </li>
      <li className="p-4">
        <Link href="/contact">Liên hệ</Link>
      </li>
      <li className="p-4">
        <Link href="/register">Đăng ký</Link>
      </li>
      <li className="p-4">
        <Link href="/login">Đăng nhập</Link>
      </li>
    </ul>
  )
}

export default Navbar