import React, { useEffect, useState } from "react";
import axios from "axios";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
>>>>>>> 545eb86b (first commit)

export default function PanelBlocs() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    function fetchData() {
      const response1 = axios
<<<<<<< HEAD
        .get(`${process.env.REACT_APP_API_URL}/order/`)
        .then((res) => setData1(res.data));
      const response2 = axios
        .get(`${process.env.REACT_APP_API_URL}/user/`)
=======
        .get("http://localhost:4000/order/")
        .then((res) => setData1(res.data));
      const response2 = axios
        .get("http://localhost:4000/user/")
>>>>>>> 545eb86b (first commit)
        .then((res) => setData2(res.data));
    }

    fetchData();
  }, []);

  const valid = data1.filter((item) => item.status === true);
  const invalid = data1.filter((item) => item.status === false);
  const validuser = data2.filter((item) => item.isAdmin === false);

  return (
<<<<<<< HEAD
    <div className=" py-12 rounded-xl sm:p-12 bg-[#1507231a]">
=======
    <div className=" py-12 rounded-xl p-12 bg-[#1507231a]">
>>>>>>> 545eb86b (first commit)
      <div>
        <div className="flex md:flex-row  md:flex-nowrap flex-wrap flex-col w-full h-full md:space-x-12 md:space-y-0 space-y-12 rounded-xl p-12">
          {/* Panel 1 */}
          <div className="md:w-1/3 w-full bg-white flex justify-center items-center rounded-xl space-x-1 sm:space-x-4 lg:space-x-8 py-8 px-5 h-44">
            <img src="/images/order-1.png" alt="" className="w-16 h-16 mt-2" />
<<<<<<< HEAD
            <Link to="/dashboard/admin/order-administration">
              <div>
                <p className="mb-2 font-semibold font-mono text-sm">
                  Nombres total de livraisons
                </p>
                <strong className="pl-2 text-xl font-mono text-[#5d6bd1]">
                  {data1.length}
                </strong>
              </div>
            </Link>
=======
            <div>
              <p className="mb-2 font-semibold font-mono text-sm">
                Nombres total de livraisons
              </p>
              <strong className="pl-2 text-xl font-mono text-[#5d6bd1]">
                {data1.length}
              </strong>
            </div>
>>>>>>> 545eb86b (first commit)
          </div>
          {/* Panel 2 */}
          <div className="md:w-1/3 w-full bg-white flex justify-center items-center rounded-xl space-x-1 sm:space-x-4 lg:space-x-8 py-8 px-5 h-44">
            <img src="/images/order.png" alt="" className="w-16 h-16 mt-2" />
<<<<<<< HEAD
            <Link to="/dashboard/admin/all-order">
              <div>
                <p className="mb-2 font-semibold font-mono text-sm">
                  Nombres de livraisons effectuées
                </p>
                <strong className="pl-2 text-xl font-mono text-[#5d6bd1]">
                  {valid.length}
                </strong>
              </div>
            </Link>
=======
            <div>
              <p className="mb-2 font-semibold font-mono text-sm">
                Nombres de livraisons effectuées
              </p>
              <strong className="pl-2 text-xl font-mono text-[#5d6bd1]">
                {valid.length}
              </strong>
            </div>
>>>>>>> 545eb86b (first commit)
          </div>
          {/* Panel 3 */}
          <div className="md:w-1/3 w-full bg-white flex justify-center items-center rounded-xl  space-x-1 sm:space-x-4 lg:space-x-8 py-8 px-5 h-44">
            <img
              src="/images/video-call.png"
              alt=""
              className="w-16 h-16 mt-2"
            />
<<<<<<< HEAD
            <Link to="/dashboard/admin/all-user">
              <div>
                <p className="mb-2 font-semibold font-mono text-sm">
                  Nombres de total d'utilisateurs
                </p>
                <strong className="pl-2 text-xl font-mono text-[#5d6bd1]">
                  {validuser.length}
                </strong>
              </div>
            </Link>
=======
            <div>
              <p className="mb-2 font-semibold font-mono text-sm">
                Nombres de total d'utilisateurs
              </p>
              <strong className="pl-2 text-xl font-mono text-[#5d6bd1]">
                {validuser.length}
              </strong>
            </div>
>>>>>>> 545eb86b (first commit)
          </div>
        </div>
      </div>
      <div className="px-12">
        <div className="md:w-1/3 w-full bg-white flex justify-center items-center rounded-xl  space-x-1 sm:space-x-4 lg:space-x-8 py-8 px-5 h-44">
          <img src="/images/suivi.png" alt="" className="w-16 h-16 mt-2" />
<<<<<<< HEAD
          <Link to="/dashboard/admin/all-order">
            <div>
              <p className="mb-2 font-semibold font-mono text-sm">
                Nombres de total de livraisons en cours
              </p>
              <strong className="pl-2 text-xl font-mono text-[#5d6bd1]">
                {invalid.length}
              </strong>
            </div>
          </Link>
=======
          <div>
            <p className="mb-2 font-semibold font-mono text-sm">
              Nombres de total de livraisons en cours
            </p>
            <strong className="pl-2 text-xl font-mono text-[#5d6bd1]">{invalid.length}</strong>
          </div>
>>>>>>> 545eb86b (first commit)
        </div>
      </div>
    </div>
  );
}
