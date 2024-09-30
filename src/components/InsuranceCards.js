import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/InsuranceCards.css'; // Import CSS

const InsuranceCards = () => {
  return (
    <section className="insurance-cards">
      <h2>Bảo Hiểm Cá Nhân</h2>
      <div className="card-container">
        <div className="card">
          <Link to="/xe-co-gioi">
            <h3>Bảo Hiểm Xe Cơ Giới</h3>
            <p>Voucher lên đến 3.5 triệu</p>
            <span>Chỉ từ 4TR VND / Năm</span>
          </Link>
        </div>
        <div className="card">
          <Link to="/du-lich">
            <h3>Bảo Hiểm Du Lịch</h3>
            <p>Du lịch quốc tế</p>
            <span>Chỉ từ 25K VND / Ngày</span>
          </Link>
        </div>
        <div className="card">
          <Link to="/suc-khoe-ca-nhan">
            <h3>Bảo Hiểm Sức Khỏe và Tai Nạn Cá Nhân</h3>
            <p>Voucher lên đến 3.5 triệu</p>
            <span>Chỉ từ 2K VND / Ngày</span>
          </Link>
        </div>
        <div className="card">
          <Link to="/nha-cua">
            <h3>Bảo Hiểm Nhà Cửa</h3>
            <p>Nhà và tài sản trong nhà</p>
            <span>Bảo hiểm toàn diện</span>
          </Link>
        </div>
      </div>

      <h2>Bảo Hiểm Doanh Nghiệp</h2>
      <div className="card-container">
        <div className="card">
          <Link to="/doanh-nghiep">
            <h3>Bảo Hiểm Doanh Nghiệp</h3>
            <p>Hàng hóa, tài sản, kỹ thuật</p>
            <span>Lựa chọn tối ưu</span>
          </Link>
        </div>
        <div className="card">
          <Link to="/suc-khoe-doanh-nghiep">
            <h3>Bảo Hiểm Sức Khỏe và Tai Nạn Con Người</h3>
            <p>Sức khỏe, tai nạn, ung thư</p>
            <span>Hạn mức đến 46.4 Tỷ</span>
          </Link>
        </div>
        <div className="card">
          <Link to="/nang-dong">
            <h3>Bảo Hiểm Doanh Nghiệp Năng Động</h3>
            <p>Thiết kế theo yêu cầu</p>
            <span>Bảo vệ toàn diện</span>
          </Link>
        </div>
        <div className="card">
          <Link to="/xe-thuong-mai">
            <h3>Bảo Hiểm Xe Thương Mại</h3>
            <p>Xe tải, xe vận chuyển</p>
            <span>Phạm vi bảo hiểm rộng</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InsuranceCards;
