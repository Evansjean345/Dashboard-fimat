import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import { CardFooter, Button, IconButton, Chip } from "@material-tailwind/react";
=======
import {
  CardFooter,
  Button,
  IconButton,
  Chip,
} from "@material-tailwind/react";
>>>>>>> 545eb86b (first commit)
import "../App.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

export default function UserOrder() {
  const { id } = useParams();
  const [order, setOrder] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
<<<<<<< HEAD
      .get(`${process.env.REACT_APP_API_URL}/user/${id}/order`)
      .then((res) => setOrder(res.data.orders));
  }, [id]);

 console.log("order",order);
=======
      .get(`http://localhost:4000/user/${id}/order`)
      .then((res) => setOrder(res.data.orders));
  }, [id]);

>>>>>>> 545eb86b (first commit)

  const recordsPerPage = 7;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const currentData = order.slice(firstIndex, lastIndex);
  const npage = Math.ceil(order.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

<<<<<<< HEAD
=======

>>>>>>> 545eb86b (first commit)
  const prePage = () => {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changePage = (id) => {
    setCurrentPage(id);
  };

  const nextPage = () => {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  };

<<<<<<< HEAD
=======
  const total = order.find((element) => "totalCost" in element);

>>>>>>> 545eb86b (first commit)
  const moov = (
    <img
      src="/logo/Moov_africa_logo.png"
      alt=""
      className="h-[48px] w-[119px]  cursor-pointer hover:shadow-2xl hover:scale-75  focus:scale-75 transition-all object-cover"
    />
  );

  const mtn = (
    <img
      src="/logo/MTN-1.jpg"
      alt=""
      className="h-[48px] w-[119px]  cursor-pointer hover:shadow-2xl hover:scale-75  focus:scale-75 transition-all object-cover"
    />
  );

  const orange = (
    <img
      src="/logo/orange-money.jpg"
      alt=""
      className="h-[48px] w-[119px]  cursor-pointer hover:shadow-2xl hover:scale-75  focus:scale-75 transition-all object-cover"
    />
  );

  const gtbBank = (
    <img
      src="/logo/gtbBank.png"
      alt=""
      className="h-[48px] w-[119px]  cursor-pointer hover:shadow-2xl hover:scale-75  focus:scale-75 transition-all object-cover"
    />
  );

  const livraison = (
    <img
<<<<<<< HEAD
      src="/logo/cashOndelivery.png"
      alt=""
      className="h-[48px] w-[119px]  cursor-pointer hover:shadow-2xl hover:scale-75  focus:scale-75 transition-all"
    />
  );
=======
    src="/logo/cashOndelivery.png"
    alt=""
    className= "h-[48px] w-[119px]  cursor-pointer hover:shadow-2xl hover:scale-75  focus:scale-75 transition-all"
  />
  )
>>>>>>> 545eb86b (first commit)

  const facture = (
    <Chip
      variant="ghost"
<<<<<<< HEAD
      color="red"
      size="sm"
      value="en attente de facturation"
      icon={
        <span className="content-[''] block w-2 h-2 rounded-full mx-auto mt-1 bg-red-900" />
=======
      color="yellow"
      size="sm"
      value="en attente de facturation"
      icon={
        <span className="content-[''] block w-2 h-2 rounded-full mx-auto mt-1 bg-yellow-900" />
>>>>>>> 545eb86b (first commit)
      }
    />
  );

<<<<<<< HEAD
  const price = order.find((obj) => obj.totalCost !== undefined);
  const Noprice = order.find((obj) => obj.totalCost === undefined);

  return (
    <>
      <div className="flex flex-col h-full  xl:flex-row ">
=======
  return (
    <>
      <div className="flex flex-col h-full  xl:flex-row">
>>>>>>> 545eb86b (first commit)
        <div className="xl:w-[17%] w-full">
          <Navbar />
        </div>
        <div className="font-mono bg-gray-200 xl:w-[83%] w-full py-4 xl:px-16 px-8 flex flex-col  ">
          {/* Order */}
          <section>
<<<<<<< HEAD
            <section class="container px-4 mx-auto h-[100vh]">
              <div class="flex items-center gap-x-3">
                <h2 class="text-lg font-medium text-gray-800 ">
                  Nombres de commandes
                </h2>

                <span class="px-3 py-1 font-bold text-xs text-blue-600 bg-blue-100 rounded-full ">
=======
            <section class="container px-4 mx-auto">
              <div class="flex items-center gap-x-3">
                <h2 class="text-lg font-medium text-gray-800 dark:text-white">
                  Nombres de commandes
                </h2>

                <span class="px-3 py-1 font-bold text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
>>>>>>> 545eb86b (first commit)
                  {order.length} commandes
                </span>
              </div>

              <div class="flex flex-col mt-6">
                <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
<<<<<<< HEAD
                    <div class="overflow-hidden border border-gray-200 md:rounded-lg">
                      <table class="min-w-full divide-y divide-gray-200 ">
                        <thead class="bg-gray-50 ">
                          <tr>
                            <th
                              scope="col"
                              class="py-3.5 px-4 text-sm font-normal text-start rtl:text-right text-gray-500 "
=======
                    <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                      <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead class="bg-gray-50 dark:bg-gray-800">
                          <tr>
                            <th
                              scope="col"
                              class="py-3.5 px-4 text-sm font-normal text-start rtl:text-right text-gray-500 dark:text-gray-400"
>>>>>>> 545eb86b (first commit)
                            >
                              <div class="flex items-center gap-x-3">
                                <span>Numéro et jour de la commande</span>
                              </div>
                            </th>

                            <th
                              scope="col"
<<<<<<< HEAD
                              class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
=======
                              class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
>>>>>>> 545eb86b (first commit)
                            >
                              <button class="flex items-center gap-x-2">
                                <span>prix de la marchandise</span>
                              </button>
                            </th>
                            <th
                              scope="col"
<<<<<<< HEAD
                              class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
=======
                              class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
>>>>>>> 545eb86b (first commit)
                            >
                              <button class="flex items-center gap-x-2">
                                <span>Moyen de Paiemnet</span>
                              </button>
                            </th>

                            <th
                              scope="col"
<<<<<<< HEAD
                              class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
=======
                              class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
>>>>>>> 545eb86b (first commit)
                            >
                              <button class="flex items-center gap-x-2">
                                <span>Nombre de packs</span>
                              </button>
                            </th>

                            <th
                              scope="col"
<<<<<<< HEAD
                              class="px-16 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
=======
                              class="px-16 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
>>>>>>> 545eb86b (first commit)
                            >
                              Coût Total
                            </th>

                            <th
                              scope="col"
<<<<<<< HEAD
                              class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
=======
                              class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
>>>>>>> 545eb86b (first commit)
                            ></th>

                            <th scope="col" class="relative py-3.5 px-4">
                              <span class="">
                                Date et heure de la livraison
                              </span>
                            </th>
                          </tr>
                        </thead>
<<<<<<< HEAD
                        <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 ">
=======
                        <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
>>>>>>> 545eb86b (first commit)
                          {currentData.map((item) => {
                            return (
                              <tr>
                                <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                  <div class="inline-flex items-center gap-x-3">
                                    <div class="flex items-center gap-x-2">
                                      {item.imgUrl === null ? (
                                        <img
                                          class="object-cover w-10 h-10 rounded-full"
                                          src="/images/user.jpeg"
                                          alt=""
                                        />
                                      ) : (
                                        <img
                                          class="object-cover w-10 h-10 rounded-full"
                                          src={item.orderUrl}
                                          alt=""
                                        />
                                      )}
                                      <div>
                                        <h2 class="font-medium text-gray-800">
                                          {item.tracking}
                                          <br />
                                          {item.date}
                                        </h2>
<<<<<<< HEAD
                                        <p class="text-sm font-normal text-gray-600 "></p>
=======
                                        <p class="text-sm font-normal text-gray-600 dark:text-gray-400"></p>
>>>>>>> 545eb86b (first commit)
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td class="px-20 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                  <div class="inline-flex items-center px-1 py-1 rounded-full gap-x-2">
                                    {item.goods_price} cfa
                                  </div>
                                </td>
                                <td class="px-8 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                  <div class="inline-flex items-center px-1 py-1 rounded-full gap-x-2">
                                    {item.payement === "MOOV-africa"
                                      ? moov
                                      : item.payement === "MTN-momo"
                                      ? mtn
                                      : item.payement === "ORANGE-money"
                                      ? orange
                                      : item.payement === "GTBank"
                                      ? gtbBank
<<<<<<< HEAD
                                      : item.payement === "à-la-Livraison"
                                      ? livraison
                                      : ""}
                                  </div>
                                </td>
                                <td class="px-8 py-4 text-sm text-gray-500  whitespace-nowrap">
                                  {item.packs} packs
                                </td>
                                <td class="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                                  {price === undefined ? (
=======
                                      : item.payement === "à-la-Livraison" ? livraison : ""}
                                  </div>
                                </td>
                                <td class="px-8 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                  {item.packs} packs
                                </td>
                                <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                  {total === undefined ? (
>>>>>>> 545eb86b (first commit)
                                    facture
                                  ) : (
                                    <Chip
                                      variant="ghost"
<<<<<<< HEAD
                                      color={item.totalCost !== undefined ? "green" : "red"}
                                      size="sm"
                                      value={item.totalCost === undefined ? "en attente de facturation" : item.totalCost}
=======
                                      color="green"
                                      size="sm"
                                      value={item.totalCost}
>>>>>>> 545eb86b (first commit)
                                      icon={
                                        <span className="content-[''] block w-2 h-2 rounded-full mx-auto mt-1 bg-green-900" />
                                      }
                                    />
                                  )}
                                </td>
                                <td class="px-4 py-4 text-sm whitespace-nowrap">
                                  <div class="flex items-center gap-x-2"></div>
                                </td>
                                <td class="px-16 py-4 text-sm whitespace-nowrap">
                                  <div class="flex items-center gap-x-6">
                                    <Chip
                                      color="teal"
                                      value={`${item.delivery_day} / ${item.delivery_hours} h`}
                                    />
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <CardFooter className="flex  items-center justify-between border-t border-blue-gray-50 p-4">
                <Button
                  variant="outlined"
                  color="blue-gray"
                  size="sm"
                  onClick={prePage}
                >
                  Previous
                </Button>
                <div className="flex items-center gap-2">
                  {numbers.map((n, i) => {
                    return (
                      <>
                        <IconButton
                          key={n}
                          className={`${
                            currentPage === n ? "border border-blue-300" : ""
                          }`}
                          variant="outlined"
                          color="blue-gray"
                          size="sm"
                          onClick={() => {
                            changePage(n);
                          }}
                        >
                          {n}
                        </IconButton>
                      </>
                    );
                  })}
                </div>
                <Button
                  variant="outlined"
                  color="blue-gray"
                  size="sm"
                  onClick={nextPage}
                >
                  Next
                </Button>
              </CardFooter>
            </section>
          </section>
          {/* Order */}
          <Footer />
        </div>
      </div>
    </>
  );
}
