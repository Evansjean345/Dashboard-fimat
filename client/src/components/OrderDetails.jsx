import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";

const OrderDetails = () => {
  const { id } = useParams();
  const [order, setOrder] = useState({});

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/order/${id}`)
      .then((res) => setOrder(res.data));
  }, [id]);

  const {
    recipient,
    orderUrl,
    date,
    destination,
    totalCost,
    payement,
    tracking,
    goods_price,
    reception,
    delivery_day,
    delivery_hours,
    user,
  } = order;

  return (
    <>
      <div className="flex flex-col h-full  xl:flex-row">
        <div className="xl:w-[17%] w-full">
          <Navbar />
        </div>
        <div className="bg-gray-200 xl:w-[83%] w-full py-4 xl:px-16 px-8 flex flex-col  ">
          <strong className="px-2 py-6 font-mono  text-2xl text-gray-800">
            Facture de la commande{" "}
            <img src="/logo/logo-no-text.png" alt="" className="h-12 mt-4" />
          </strong>
          <div className="flex w-full pb-24 font-mono border border-black px-8 py-16 ">
            <div className="w-1/2 border border-black px-2 py-4">
              {" "}
              <h3>Destinataire</h3>
              <p className="mt-2">
                nom du destinataire: {recipient && recipient.name} 
              </p>
              <p className="mt-1">
                numéro du destinataire: {recipient && recipient.phone}
              </p>
              <p className="mt-1">
                adresse du destinataire: {recipient && recipient.address}
              </p>
              <p className="mt-1">Coût Total: {totalCost}</p>
              <h3 className="mt-3">Expéditeur</h3>
              <p className="mt-2">
                nom du destinataire: {user && user.name}   {user && user.lastname} 
              </p>
              <p className="mt-1">
                numéro du destinataire:  {user && user.phone} 
              </p>
            </div>
            <div className="w-1/2 border border-black px-2 py-4">
              <h3 className="mt-1">Details de la facture</h3>
              <p className="mt-2">numero de la commande: {tracking}</p>
              <p className="mt-1">date de la commande: {date}</p>
              <p className="mt-1">moyen de paiyement: {payement}</p>
              <p className="mt-1">Prix de la marchandise : {goods_price}</p>
              <p className="mt-1">Lieu de reception du colis : {reception}</p>
              <p className="mt-1">
                Jour et heure de livraison : {delivery_day} / {delivery_hours} h
              </p>
              <p className="mt-1">Destination: {destination}</p>
              <p className="mt-1">Total Cost: {totalCost}</p>
            </div>
            {orderUrl === null ? (
              <img
                src="/images/order-img.png"
                alt=""
                className="h-24 w-24 ml-4"
              />
            ) : (
              <img src={orderUrl} alt="" className="h-24 w-24" />
            )}
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
