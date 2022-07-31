import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../config/api/api";
import { Button } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

const Detail = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [cookies] = useCookies();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const query = `/books/${params.id}/detail`;
    const token = `Bearer ${cookies.token}`;
    api
      .get(query, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setBook(res.data);
          console.log(book);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      {book ? (
        <div className="p-10">
          <div className="top-bar text-left">
            <FontAwesomeIcon
              icon={faArrowLeftLong}
              size="3x"
              color="#809bce"
              className="cursor-pointer"
              onClick={() => navigate(-1)}
            />
          </div>
          <div className="rincian flex gap-8 mt-8 ml-12">
            <div className="poster w-fit h-full flex gap-6">
              <img
                src={book.book.image}
                alt="poster"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="title font-rubik self-center text-left">
              <h2 className="font-semibold text-6xl mb-6 text-slate-800">
                {book.book.title}
              </h2>
              <p className="font-medium text-2xl text-slate-700">
                Penulis : {book.book.author}
              </p>
              <p className="font-light text-xl">
                Tanggal rilis : {book.book.detail.release_date}
              </p>
              <p className="font-light text-xl ">
                Bahasa : {book.book.detail.language}
              </p>
              <p className="font-light text-xl">
                Penerbit : {book.book.detail.publisher}
              </p>
              <p className="font-semibold text-2xl text-red-600">
                Harga : {book.book.price}
              </p>
            </div>
          </div>
          <div className="sinopsis mx-12 mt-8 mb-20">
            <p className="text-3xl font-rubik text-slate-800 font-semibold">
              Sinopsis
            </p>
            <p className="text-xl font-rubik text-slate-700 font-normal text-justify mt-4">
              {book.book.detail.description}
            </p>
          </div>
          <div className="buttons fixed bottom-0 left-0 bg-slate-200 w-screen flex justify-center gap-8 py-6">
            <Button type="submit">
              <a
                href={book.book.original_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Beli
              </a>
            </Button>
            <Button type="submit" model="outlined">
              Wishlist
            </Button>
          </div>
        </div>
      ) : (
        <p className="w-screen h-screen flex justify-center items-center text-3xl font-rubik font-semibold">
          Tidak ada data buku!
        </p>
      )}
    </main>
  );
};

export default Detail;
