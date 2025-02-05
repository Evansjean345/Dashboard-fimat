import React, { useState, useContext } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { AuthContext } from "../services/account.service";
import { Link, useNavigate } from "react-router-dom";
<<<<<<< HEAD
import {
  Input,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Loader from "../utils/Loader";

export default function LoginSection() {
  //modal
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
    setTimeout(() => {
      setOpen(open);
    }, 5000);
  };
  const handleError = () => setError(!error);
  //auth
=======

export default function LoginSection() {
>>>>>>> 545eb86b (first commit)
  const { login, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
<<<<<<< HEAD
    handleOpen();
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/user/login`,
=======
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/user/login",
>>>>>>> 545eb86b (first commit)
        formData
      );
      const token = response.data.token;
      const userId = response.data.userId;
      Cookies.set("jwt", token, { expires: 3 });
      login({ userId, token });
    } catch (error) {
      console.log(error);
<<<<<<< HEAD
      handleError();
=======
>>>>>>> 545eb86b (first commit)
    }
    if (isAuthenticated()) {
      navigate("/");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
<<<<<<< HEAD
      <div class="bg-white">
        <div class="flex justify-center h-screen">
          <div
            class="hidden bg-cover   lg:block lg:w-2/3"
            style={{
              backgroundImage: `url(/images/user.png)`,
=======
      <div class="bg-white dark:bg-gray-900">
        <div class="flex justify-center h-screen">
          <div
            class="hidden bg-cover  lg:block lg:w-2/3"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1513672494107-cd9d848a383e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80`,
>>>>>>> 545eb86b (first commit)
            }}
          >
            <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
              <div>
                <h2 class="text-2xl font-bold text-white sm:text-3xl">
                  ChapChrono
                </h2>

                <p class="max-w-xl mt-3 text-gray-300">
                  Connectez-vous pour accéder à votre compte et passer une
                  commande. Si vous n'avez pas encore de compte, inscrivez-vous
                  gratuitement dès maintenant. Une fois connecté, vous pourrez
                  suivre l'état de votre commande et gérer vos informations
                  personnelles.
                </p>
              </div>
            </div>
          </div>

          <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div class="flex-1">
              <div class="text-center">
                <div class="flex justify-center mx-auto">
                  <img
                    class="w-auto h-12 sm:h-16"
                    src="/logo/logo-no-text.png"
                    alt=""
                  />
                </div>

<<<<<<< HEAD
                <p class="mt-3 text-gray-500">
=======
                <p class="mt-3 text-gray-500 dark:text-gray-300">
>>>>>>> 545eb86b (first commit)
                  Enregistrez vous pour accédez à votre compte
                </p>
              </div>

              <div class="mt-8">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label
                      for="username"
<<<<<<< HEAD
                      class="block mb-2 text-sm text-gray-600"
=======
                      class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
>>>>>>> 545eb86b (first commit)
                    >
                      Nom d'utilisateur
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="....."
                      value={formData.username}
                      onChange={handleChange}
<<<<<<< HEAD
                      class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring focus:ring-opacity-40"
=======
                      class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
>>>>>>> 545eb86b (first commit)
                    />
                  </div>

                  <div class="mt-6">
                    <div class="flex justify-between mb-2">
                      <label
                        for="password"
<<<<<<< HEAD
                        class="text-sm text-gray-600"
                      >
                        Mot de passe
                      </label>
                      {/*
                        <a
=======
                        class="text-sm text-gray-600 dark:text-gray-200"
                      >
                        Mot de passe
                      </label>
                      <a
>>>>>>> 545eb86b (first commit)
                        href="#"
                        class="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                      >
                        oublié
<<<<<<< HEAD
                      </a> */}
=======
                      </a>
>>>>>>> 545eb86b (first commit)
                    </div>

                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Mot de passe"
                      value={formData.password}
                      onChange={handleChange}
<<<<<<< HEAD
                      class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  {open ? (
                    <div className="w-96  flex items-center justify-center h-4 px-4 py-8 absolute">
                      <Loader />
                    </div>
                  ) : (
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      class="w-full mt-6 px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-[#db6013] rounded-lg hover:bg-[#ba571a] focus:outline-none  focus:ring-opacity-50"
                    >
                      Se connceter
                    </button>
                  )}
                </form>

                <p
                  class={
                    open
                      ? "mt-16 text-sm text-center text-gray-400"
                      : "mt-6 text-sm text-center text-gray-400"
                  }
                >
                  Vous n'avez pas de compte{" "}
                  <Link
                    to="/signup/user"
                    class="text-[#db6013] focus:outline-none focus:underline hover:underline"
                  >
=======
                      class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div class="mt-6">
                    <button
                      type="submit"
                      class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-[#db6013] rounded-lg hover:bg-[#ba571a] focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    >
                      Se connceter
                    </button>
                  </div>
                </form>

                <p class="mt-6 text-sm text-center text-gray-400">
                  &#x27; Vous n'avez pas de compte{" "}
                  <Link
                  to="/signup/user"
                   class="text-[#db6013] focus:outline-none focus:underline hover:underline">
>>>>>>> 545eb86b (first commit)
                    S'enregistrer
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      {/* commande refusée*/}
      <Dialog open={error} handler={handleError} size="xl">
        <DialogHeader>Erreur de connexion</DialogHeader>
        <DialogBody divider className="text-bold">
          Le nom d'utilisateur et le mot de passe ne correspondent pas veuillez
          réesayer
        </DialogBody>
        <DialogFooter>
          <Button variant="gradient" color="red" onClick={handleError}>
            <span>Fermer</span>
          </Button>
        </DialogFooter>
      </Dialog>
=======
>>>>>>> 545eb86b (first commit)
    </>
  );
}
