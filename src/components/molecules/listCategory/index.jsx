import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { api } from "../../../config/api/api";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../../app/bookSlice/bookSlice";
import { Loading } from "../../atoms";

const ListCategory = () => {
  const dispatch = useDispatch();
  const [cookies] = useCookies(["token"]);
  const token = `Bearer ${cookies.token}`;
  const [listCategory, setlistCategory] = useState([]);
  const category = useSelector((state) => state.book.category);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/categories", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setlistCategory(res.data.categories);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const content = (
    <div className="text-left w-full h-full overflow-y-scroll transition-all duration-300">
      {listCategory.map((item, i) => {
        return (
          <p
            className={`font-rubik font-normal text-base cursor-pointer transition-all duration-100 ${
              category
                ? category.slug === item.slug
                  ? "text-slate-800 font-semibold"
                  : "text-slate-500"
                : "text-slate-500"
            }`}
            onClick={() => dispatch(setCategory(item))}
            key={i}
          >
            {item.name}
          </p>
        );
      })}
    </div>
  );

  return <>{isLoading ? <Loading loading={isLoading} /> : content}</>;
};

export default ListCategory;
