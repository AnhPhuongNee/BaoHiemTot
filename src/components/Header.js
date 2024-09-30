import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

  const Header = () => {
    const [isPersonalDropdownVisible, setPersonalDropdownVisible] = useState(false);
    const [isBusinessDropdownVisible, setBusinessDropdownVisible] = useState(false);
  
    const handlePersonalDropdown = () => {
      setPersonalDropdownVisible(!isPersonalDropdownVisible);
    };
  
    const handleBusinessDropdown = () => {
      setBusinessDropdownVisible(!isBusinessDropdownVisible);
    };
  

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Bảo Hiểm Tốt</Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <div className="dropdown" onMouseEnter={handlePersonalDropdown} onMouseLeave={handlePersonalDropdown}>
              <button className="dropbtn">Bảo hiểm cá nhân</button>
              {isPersonalDropdownVisible && (
                <div className="dropdown-content">
                  <div className="dropdown-column">
                    <h3>Bảo hiểm Du lịch</h3>
                    <Link to="/du-lich">Bảo hiểm Du lịch</Link>
                  </div>
                  <div className="dropdown-column">
                    <h3>Bảo hiểm Xe</h3>
                    <Link to="/xe-o-to">Bảo hiểm Ô tô</Link>
                    <Link to="/xe-may">Bảo hiểm Xe máy</Link>
                    <Link to="/xe-bat-buoc">Bảo hiểm Bắt buộc Ô tô</Link>
                  </div>
                  <div className="dropdown-column">
                    <h3>Bảo hiểm Sức khỏe</h3>
                    <Link to="/ung-thu">Bảo hiểm Ung thư</Link>
                    <Link to="/tai-nan">Bảo hiểm Tai nạn</Link>
                    <Link to="/gia-dinh">Bảo hiểm Gia đình</Link>
                    <Link to="/tieu-chuan">Bảo hiểm Sức khỏe Tiêu chuẩn</Link>
                    <Link to="/cao-cap">Bảo hiểm Sức khỏe Cao cấp</Link>
                    <Link to="/quoc-te">Bảo hiểm Sức khỏe Quốc tế</Link>
                  </div>
                  <div className="dropdown-column">
                    <h3>Bảo hiểm Nhà</h3>
                    <Link to="/nha-cua">Bảo hiểm Nhà Cửa</Link>
                  </div>
                </div>
              )}
            </div>
          </li>
          <li>
            <div className="dropdown" onMouseEnter={handleBusinessDropdown} onMouseLeave={handleBusinessDropdown}>
              <button className="dropbtn">Bảo hiểm doanh nghiệp</button>
              {isBusinessDropdownVisible && (
                <div className="dropdown-content">
                  <div className="dropdown-column">
                    <h3>Bảo hiểm Du lịch</h3>
                    <Link to="/du-lich">Bảo hiểm Du lịch</Link>
                  </div>
                  <div className="dropdown-column">
                    <h3>Bảo hiểm Xe</h3>
                    <Link to="/xe-o-to">Bảo hiểm Ô tô</Link>
                    <Link to="/xe-may">Bảo hiểm Xe máy</Link>
                    <Link to="/xe-bat-buoc">Bảo hiểm Bắt buộc Ô tô</Link>
                  </div>
                  <div className="dropdown-column">
                    <h3>Bảo hiểm Sức khỏe</h3>
                    <Link to="/ung-thu">Bảo hiểm Ung thư</Link>
                    <Link to="/tai-nan">Bảo hiểm Tai nạn</Link>
                    <Link to="/gia-dinh">Bảo hiểm Gia đình</Link>
                    <Link to="/tieu-chuan">Bảo hiểm Sức khỏe Tiêu chuẩn</Link>
                    <Link to="/cao-cap">Bảo hiểm Sức khỏe Cao cấp</Link>
                    <Link to="/quoc-te">Bảo hiểm Sức khỏe Quốc tế</Link>
                  </div>
                  <div className="dropdown-column">
                    <h3>Bảo hiểm Nhà</h3>
                    <Link to="/nha-cua">Bảo hiểm Nhà Cửa</Link>
                  </div>
                </div>
              )}
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
