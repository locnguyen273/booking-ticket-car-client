import React, { useState } from "react";
import { MenuData } from "../../utils/menuData";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Image, Button, Drawer } from "antd";
import facebookLogo from "../../assets/images/facebook.png";
import youtubeLogo from "../../assets/images/youtube.png";
import useDeviceDetect from "./../../hooks/useDeviceDetect";
import "./style.scss"

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState(location.pathname);
  const [open, setOpen] = useState(false);
  const { isMobile } = useDeviceDetect();

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="header">
      {
        !isMobile &&
        <div className="header-top">
          <div className="header-top__container">
            <div className="header-top__left">
              <p>
                <i className="fas fa-phone-alt"></i> 19001080
              </p>
              <p>
                <i className="fas fa-envelope"></i> hotro@mika.vn
              </p>
            </div>
            <div className="header-top__right">
              <Image
                className="header-top__right--icon"
                src={facebookLogo}
                preview={false}
              />
              <Image
                className="header-top__right--icon"
                src={youtubeLogo}
                preview={false}
              />
              <Button
                className="header-top__right--login"
                onClick={() => navigate("/login")}
              >
                <i className="fas fa-user-circle"></i>
                Đăng nhập
              </Button>
            </div>
          </div>
        </div>
      }
      <div className="header-bottom">
        <div className="header-bottom__container">
          <div className="header-bottom__left">
            <Image
              className="header-bottom__left--logo"
              src="https://futabus.vn/_nuxt/img/logo-buslines-small.b4bfbf7.png"
              alt="logo"
              preview={false}
            />
          </div>
          {
            !isMobile ?
              <div className="header-bottom__center">
                {MenuData.data.length > 0 && MenuData.data.map((item) => {
                  return (
                    <Link
                      key={item.id} to={item.path}
                      className={`header-bottom__center--item ${active === item.path && 'active-menu'}`}
                      onClick={() => setActive(item.path)}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
              : <Button onClick={showDrawer}><i className="fas fa-bars"></i></Button>
          }
        </div>
      </div>
      <Drawer
        placement="left"
        width={350}
        onClose={onClose}
        open={open}
      >
        <ul>
          {MenuData.data.length > 0 && MenuData.data.map((item) => {
            return (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className="header-mobile__center--item"
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
          <li><Link className="header-mobile__center--item">Đăng nhập</Link></li>
        </ul>
      </Drawer>
    </div >
  );
};

export default Header;
