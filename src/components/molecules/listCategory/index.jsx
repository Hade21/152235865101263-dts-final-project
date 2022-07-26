import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { api } from "../../../config/api/api";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../../app/bookSlice/bookSlice";

const ListCategory = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cookies] = useCookies(["token"]);
  const token = `Bearer ${cookies.token}`;
  const [listCategory, setlistCategory] = useState([]);
  const category = useSelector((state) => state.book.category);

  useEffect(() => {
    api
      .get("/categories", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setlistCategory(res.data.categories);
      })
      .catch((err) => {
        if (err.response?.status === 0) {
          alert("No Network Access!");
        } else if (err.response?.status === 401) {
          alert("Silahkan Login terlebih dahulu!");
          navigate("/login");
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="text-left w-full h-full overflow-y-scroll transition-all duration-300">
      {listCategory.map((item) => {
        return (
          <p
            className={`font-rubik font-normal text-base cursor-pointer transition-all duration-100 ${
              category === item.slug
                ? "text-slate-800 font-semibold"
                : "text-slate-500"
            }`}
            onClick={() => dispatch(setCategory(item.slug))}
          >
            {item.name}
          </p>
        );
      })}
    </div>
  );
};

export default ListCategory;
