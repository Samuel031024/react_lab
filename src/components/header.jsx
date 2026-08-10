import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="site-header">
      <nav>
        <ul>
          <li><Link to="/">HEM</Link></li>
          <li><Link to="/om-oss">OM OSS</Link></li>
          <li><Link to="/kontakt">KONTAKT</Link></li>
          <li><Link to="/iphone">IPHONE</Link></li>
        </ul>
      </nav>
    </header>
  );
}