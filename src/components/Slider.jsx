import React, { useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import { Container } from "react-bootstrap";

import { FaPlay, FaPlus } from "react-icons/fa";
import CustomizeButton from "./CustomizeButton";
import { useDispatch, useSelector } from "react-redux";
import { getBanners } from "../redux/actions/bannerAction";

import "react-alice-carousel/lib/alice-carousel.css";

const Slider = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBanners());
  }, [dispatch]);
  const banner = useSelector((store) => store.banners);
  return (
    <div>
      <div className="d-flex">
        <Container className="">
          <AliceCarousel
            mouseTracking
            items={banner.map((item, index) => (
              <div key={index} className="align-bottom rounded d-flex">
                <img className="cover" src={item.imagenUrl} alt={item.name} />
                <div className="d-flex btn-banner">
                  <CustomizeButton
                    custom="primary"
                    value="Ver Ahora"
                    margin="0px 5px"
                    Icon={FaPlay}
                    iconSize="15"
                    iconClassName="mx-1"
                    className="text-uppercase bold p-3 custom-btn-banner"
                  />
                  <CustomizeButton
                    custom="dark"
                    value="Ver Despues"
                    margin="0px 5px"
                    borderColor="primary"
                    Icon={FaPlus}
                    iconSize="15"
                    iconClassName="mx-1"
                    className="text-uppercase bold p-3 custom-btn-banner"
                  />
                </div>
              </div>
            ))}
            controlsStrategy="alternate"
            autoPlay={true}
            disableButtonsControls={true}
            infinite={true}
            animationDuration={5000}
          />
        </Container>
      </div>
    </div>
  );
};

export default Slider;
