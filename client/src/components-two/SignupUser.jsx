import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { PhotoIcon } from "@heroicons/react/24/solid";
import {
  Input,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
<<<<<<< HEAD
import Loader from "../utils/Loader";
=======
>>>>>>> 545eb86b (first commit)

export default function SignupUser() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [profile, setProfile] = useState("");

<<<<<<< HEAD
  //gestion

  const [loader, setLoader] = useState(false);

  const handleLoader = () => {
    setLoader(!loader);
    setTimeout(() => {
      setLoader(loader);
    }, 7000);
  };

=======
>>>>>>> 545eb86b (first commit)
  const navigate = useNavigate();

  //gestion
  //modal
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Le nom est obligatoire"),
    lastname: Yup.string().required("Le prénom est obligatoire"),
    username: Yup.string().required("Le nom d'utilisateur est obligatoire"),
    phone: Yup.string().required("Le numéro de téléphone est obligatoire"),
    email: Yup.string()
      .email(`L'adresse email n'est pas valide`)
      .required("L'adresse email est obligatoire"),
    password: Yup.string().required(
      "Le mot de passe doit contenir au moins 4 caractères"
    ),
    imgUrl: Yup.mixed().required("l'image est requise"),
  });

  const onChangeFile = (e) => {
    setImgUrl(e.target.files[0]);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setImgUrl(file);
    setProfile(url);
  };

  const handleOpen = () => setOpen(!open);
  const handleError = () => setError(!error);

  const changeOnClick = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("lastname", lastname);
    formData.append("username", username);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("imgUrl", imgUrl);

    setName("");
    setLastname("");
    setUsername("");
    setPhone("");
    setEmail("");
    setPassword("");

    axios
<<<<<<< HEAD
      .post(`${process.env.REACT_APP_API_URL}/user/signup`, formData)
=======
      .post("http://localhost:4000/user/signup", formData)
>>>>>>> 545eb86b (first commit)
      .then((res) => {
        console.log(res);
        handleOpen();
      })
      .catch((err) => {
        console.log(err);
        handleError();
      });

    console.log(formData);
<<<<<<< HEAD
    handleLoader();
=======
>>>>>>> 545eb86b (first commit)
  };

  return (
    <div className="pb-32 sm:pb-0">
<<<<<<< HEAD
      <section class="bg-white  sm:p-0  px-6 py-12  rounded-xl">
=======
      <section class="bg-white dark:bg-gray-900 sm:p-0  px-6 py-12  rounded-xl">
>>>>>>> 545eb86b (first commit)
        <div class="flex justify-center sm:min-h-screen h-full">
          <div
            class="hidden bg-cover lg:block lg:w-2/5"
            style={{
<<<<<<< HEAD
              backgroundImage: "url('/images/user-text.png')",
=======
              backgroundImage:
                "url('https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
>>>>>>> 545eb86b (first commit)
            }}
          ></div>

          <div class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div class="w-full">
<<<<<<< HEAD
              <h1 class="text-2xl font-semibold tracking-wider text-gray-800 capitalize ">
                Obtenez Votre Compte Gratuit Dès Maintenant.
              </h1>

              <p class="mt-4 text-gray-500 ">
=======
              <h1 class="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                Obtenez Votre Compte Gratuit Dès Maintenant.
              </h1>

              <p class="mt-4 text-gray-500 dark:text-gray-400">
>>>>>>> 545eb86b (first commit)
                Commençons par vous préparer afin que vous puissiez vérifier
                votre compte personnel et commencer à configurer votre profil.
              </p>

              <div class="mt-6">
<<<<<<< HEAD
                <h1 class="text-gray-500 ">Créer votre compte gratuitement</h1>

                <div class="mt-3 md:flex md:items-center md:-mx-2">
                  <Link to="/signup/user">
                    <button class="flex justify-center w-full px-6 py-3 mt-4 text-white border bg-[#db6013] border-[#db6013] rounded-lg md:mt-0 md:w-auto md:mx-2  focus:outline-none">
=======
                <h1 class="text-gray-500 dark:text-gray-300">
                  Sélectionnez le type de compte
                </h1>

                <div class="mt-3 md:flex md:items-center md:-mx-2">
                  <Link to="/signup/admin">
                    <button class="flex justify-center w-full px-6 py-3 text-blue-500 border border-blue-500  bg-blue-white rounded-lg md:w-auto md:mx-2 focus:outline-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>

                      <span class="mx-2">administrateur</span>
                    </button>
                  </Link>
                  <Link to="/signup/user">
                    <button class="flex justify-center w-full px-6 py-3 mt-4 text-white border bg-blue-500 border-blue-500 rounded-lg md:mt-0 md:w-auto md:mx-2 dark:border-blue-400 dark:text-blue-400 focus:outline-none">
>>>>>>> 545eb86b (first commit)
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>

                      <span class="mx-2">client</span>
                    </button>
                  </Link>
                </div>
              </div>
              {/* Formulaire Start */}
              <Formik
                initialValues={{
                  name: name,
                  lastname: lastname,
                  username: username,
                  phone: phone,
                  email: email,
                  password: password,
                  //  imgUrl: imgUrl,
                }}
                validationSchema={validationSchema}
                onSubmit={changeOnClick}
              >
                {({
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  isSubmitting,
                }) => (
                  <form
                    class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
                    encType="multipart/form-data"
                    onSubmit={changeOnClick}
                  >
                    <div>
                      <label
<<<<<<< HEAD
                        class="block mb-2 text-sm text-gray-600 "
                        htmlFor="name"
                        enctype
                      >
                        Prénoms
=======
                        class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                        htmlFor="name"
                        enctype
                      >
                        First Name
>>>>>>> 545eb86b (first commit)
                      </label>
                      <Field
                        type="text"
                        placeholder="entrez votre nom"
                        name="name"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        onBlur={handleBlur}
<<<<<<< HEAD
                        class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border focus:border-[#db6013] border-gray-200 rounded-lg  focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                      {touched.name && errors.name && (
                        <div className="w-full border flex  py-1 bg-green-200 text-gray-600 border-green-500 px-6 mt-1 rounded-lg text-sm">
=======
                        class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                      {touched.name && errors.name && (
                        <div className="w-full border flex  py-1 bg-red-200 text-gray-600 border-red-500 px-6 mt-1 rounded-lg text-sm">
>>>>>>> 545eb86b (first commit)
                          {errors.name}
                        </div>
                      )}
                    </div>

                    <div>
                      <label
<<<<<<< HEAD
                        class="block mb-2 text-sm text-gray-600 "
                        htmlFor="lastname"
                      >
                        Prénoms
=======
                        class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                        htmlFor="lastname"
                      >
                        Last name
>>>>>>> 545eb86b (first commit)
                      </label>
                      <Field
                        type="text"
                        placeholder="entrez votre prenom"
                        name="lastname"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        onBlur={handleBlur}
<<<<<<< HEAD
                        class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-[#db6013] focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                      {touched.name && errors.lastname && (
                        <div className="w-full border flex  py-1 bg-green-200 text-gray-600 border-green-500 px-6 mt-1 rounded-lg text-sm">
=======
                        class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                      {touched.name && errors.lastname && (
                        <div className="w-full border flex  py-1 bg-red-200 text-gray-600 border-red-500 px-6 mt-1 rounded-lg text-sm">
>>>>>>> 545eb86b (first commit)
                          {errors.lastname}
                        </div>
                      )}
                    </div>
                    <div>
                      <label
<<<<<<< HEAD
                        class="block mb-2 text-sm text-gray-600 "
                        htmlFor="username"
                      >
                        Nom d'utilisateur
=======
                        class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                        htmlFor="username"
                      >
                        Username
>>>>>>> 545eb86b (first commit)
                      </label>
                      <Field
                        type="text"
                        placeholder="choisissez un nom d'utilisateur"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        onBlur={handleBlur}
<<<<<<< HEAD
                        class="block w-full px-5 py-3 mt-2 text-gray-700 focus:border-[#db6013]  placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                      {touched.name && errors.username && (
                        <div className="w-full border flex  py-1 bg-green-200 text-gray-600 border-green-500 px-6 mt-1 rounded-lg text-sm">
=======
                        class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                      {touched.name && errors.username && (
                        <div className="w-full border flex  py-1 bg-red-200 text-gray-600 border-red-500 px-6 mt-1 rounded-lg text-sm">
>>>>>>> 545eb86b (first commit)
                          {errors.username}
                        </div>
                      )}
                    </div>

                    <div>
                      <label
<<<<<<< HEAD
                        class="block mb-2 text-sm text-gray-600"
                        htmlFor="phone"
                      >
                        Numéro de téléphone
=======
                        class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                        htmlFor="phone"
                      >
                        Phone number
>>>>>>> 545eb86b (first commit)
                      </label>
                      <input
                        type="text"
                        placeholder="XXX-XX-XXXX-XXX"
                        name="phone"
                        value={phone}
                        onBlur={handleBlur}
                        onChange={(e) => setPhone(e.target.value)}
<<<<<<< HEAD
                        class="block w-full px-5 py-3 mt-2 text-gray-700 focus:border-[#db6013]  placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                      {touched.phone && errors.phone && (
                        <div className="w-full border flex  py-1 bg-green-200 text-gray-600 border-green-500 px-6 mt-1 rounded-lg text-sm">
=======
                        class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                      {touched.phone && errors.phone && (
                        <div className="w-full border flex  py-1 bg-red-200 text-gray-600 border-red-500 px-6 mt-1 rounded-lg text-sm">
>>>>>>> 545eb86b (first commit)
                          {errors.phone}
                        </div>
                      )}
                    </div>

                    <div>
                      <label
<<<<<<< HEAD
                        class="block mb-2 text-sm text-gray-600 "
                        htmlFor="email"
                      >
                        Adresse mail
=======
                        class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                        htmlFor="email"
                      >
                        Email address
>>>>>>> 545eb86b (first commit)
                      </label>
                      <Field
                        type="email"
                        placeholder="johnsnow@example.com"
                        name="email"
                        value={email}
                        onBlur={handleBlur}
                        onChange={(e) => setEmail(e.target.value)}
<<<<<<< HEAD
                        class="block w-full px-5 py-3 mt-2   text-gray-700 focus:border-[#db6013]  placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                      {touched.email && errors.email && (
                        <div className="w-full border flex  py-1 bg-green-200 text-gray-600 border-green-500 px-6 mt-1 rounded-lg text-sm">
=======
                        class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                      {touched.email && errors.email && (
                        <div className="w-full border flex  py-1 bg-red-200 text-gray-600 border-red-500 px-6 mt-1 rounded-lg text-sm">
>>>>>>> 545eb86b (first commit)
                          {errors.email}
                        </div>
                      )}
                    </div>

                    <div>
                      <label
<<<<<<< HEAD
                        class="block mb-2 text-sm text-gray-600"
                        htmlFor="password"
                      >
                        Mot de passe
=======
                        class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                        htmlFor="password"
                      >
                        Password
>>>>>>> 545eb86b (first commit)
                      </label>
                      <Field
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        value={password}
                        onBlur={handleBlur}
                        onChange={(e) => setPassword(e.target.value)}
<<<<<<< HEAD
                        class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 focus:border-[#db6013]  bg-white border border-gray-200 rounded-lg  focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                      {touched.password && errors.password && (
                        <div className="w-full border flex  py-1 bg-green-200 text-gray-600 border-green-500 px-6 mt-1 rounded-lg text-sm">
=======
                        class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                      {touched.password && errors.password && (
                        <div className="w-full border flex  py-1 bg-red-200 text-gray-600 border-red-500 px-6 mt-1 rounded-lg text-sm">
>>>>>>> 545eb86b (first commit)
                          {errors.password}
                        </div>
                      )}
                    </div>

                    <div className="mt-8 flex flex-col xl:w-3/5 lg:w-1/2 md:w-1/2 w-full">
                      <label
                        htmlFor="imgUrl"
                        className=" text-sm font-bold text-gray-800"
                      >
                        Photo de profile
                      </label>
                    </div>
                    <div className="col-span-full">
                      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                        <div className="text-center">
                          <PhotoIcon
                            className="mx-auto h-12 w-12 text-gray-300"
                            aria-hidden="true"
                          />
                          <div className="mt-4 flex text-sm leading-6 text-gray-600">
                            <label
                              htmlFor="imgUrl"
                              className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                            >
                              <span>Upload a file</span>
                              <input
                                id="imgUrl"
                                name="imgUrl"
                                type="file"
                                onChange={handleFileChange}
                                className="sr-only"
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs leading-5 text-gray-600">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                    {profile && (
                      <img src={profile} alt="" className="rounded-lg h-64" />
                    )}
                    {touched.imgUrl && errors.imgUrl && (
                      <div className="w-full border flex  py-1 bg-red-200 text-gray-600 border-red-500 px-6 mt-1 rounded-lg text-sm">
                        {errors.imgUrl}
                      </div>
                    )}
                    <br />
<<<<<<< HEAD
                    {loader ? (
                      <div
                        className="w-72 flex items-center justify-center h-4 px-4 py-8
                      "
                      >
                        {" "}
                        <Loader />
                      </div>
                    ) : (
                      <button
                        class="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#db6013] rounded-lg hover:bg-[#a4511e] focus:outline-none focus:ring focus:ring-[#db6013] focus:ring-opacity-50"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        <span>S'enregistrer </span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-5 h-5 rtl:-scale-x-100"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                    )}
=======
                    <button
                      class="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      <span>S'enregistrer </span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5 rtl:-scale-x-100"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
>>>>>>> 545eb86b (first commit)
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
      {/* commande confirmée */}
<<<<<<< HEAD
      <Dialog open={open} handler={handleOpen} size="xl">
=======
      <Dialog open={open} handler={handleOpen}>
>>>>>>> 545eb86b (first commit)
        <DialogHeader>Votre Compte a bien été crée avec succès</DialogHeader>
        <DialogBody divider className="text-semibold">
          Nous vous prions de cliquer sur le bouton-ci dessous afin que vous
          puissez vous connecter
        </DialogBody>
        <DialogFooter>
          <Button
            variant="gradient"
            color="green"
            onClick={() => {
              navigate("/login");
            }}
          >
            <span>se connecter</span>
          </Button>
        </DialogFooter>
      </Dialog>
      {/* commande refusée*/}
<<<<<<< HEAD
      <Dialog open={error} handler={handleError} size="xl">
=======
      <Dialog open={error} handler={handleError}>
>>>>>>> 545eb86b (first commit)
        <DialogHeader>
          Veuillez remplir tous les champs pour créer un compte
        </DialogHeader>
        <DialogBody divider className="text-bold">
          Notez bien : vous ne pouvez pas utilisé le même nom d'utilisateur , la
          même addresse mail ou le même numéro de telephone pour deux comptes
        </DialogBody>
        <DialogFooter>
          <Button variant="gradient" color="red" onClick={handleError}>
            <span>Fermer</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
