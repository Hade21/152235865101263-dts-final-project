import React from "react";
import { Header, Search } from "../../components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="top-bar px-4 py-4 bg-third-ocean flex justify-center">
          <div className="search">
            <Search />
          </div>
        </div>
        <div className="content w-1/2 mx-auto h-1/2"></div>
      </main>
    </div>
  );
};

export default Home;
