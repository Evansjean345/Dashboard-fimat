import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Input,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Loader from "../utils/Loader";
import { useNavigate } from "react-router-dom";

export default function AssistanceSection() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const form = useRef();

  const handleOpen = () => {
    setOpen(!open);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8ea4x1q",
        "template_xdf7fmp",
        form.current,
        "_nX_N-UePUdObCvSv"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    handleOpen();
    e.target.reset();
  };
  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <div className="px-2 py-12 ">
          <div className="flex flex-no-wrap items-start">
            <div className="w-full ">
              <div className="py-4 px-2">
                <div className="bg-white rounded shadow mt-7 py-7">
                  <div className="hidden lg:block md:hidden">
                    <div className="px-7 header flex bg-white lg:justify-around md:justify-around justify-start py-[30px] border-b-[2px] border-slate-100 flex-wrap gap-x-4 ">
                      <a className="cursor-pointer">
                        <div className="flex items-center instance group">
                          <div className="svg-container">
                            <svg
                              className="text-[#1E293B] group-hover:text-indigo-700"
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.24626 6.51211C8.73332 6.46145 8.21726 6.57057 7.76874 6.82454C7.32022 7.07851 6.96116 7.4649 6.74072 7.93082C6.52028 8.39673 6.44924 8.91939 6.53733 9.42724C6.62541 9.9351 6.86832 10.4033 7.23278 10.7678C7.59725 11.1322 8.06546 11.3751 8.57331 11.4632C9.08116 11.5513 9.60382 11.4803 10.0697 11.2598C10.5357 11.0394 10.922 10.6803 11.176 10.2318C11.43 9.78329 11.5391 9.26723 11.4884 8.7543C11.4307 8.17929 11.1759 7.64193 10.7673 7.23329C10.3586 6.82465 9.82127 6.56986 9.24626 6.51211V6.51211ZM15.2658 9C15.2642 9.27174 15.2442 9.54306 15.206 9.81211L16.972 11.1973C17.0489 11.261 17.1008 11.35 17.1183 11.4483C17.1358 11.5466 17.1179 11.648 17.0677 11.7344L15.397 14.625C15.3463 14.7106 15.267 14.7754 15.1731 14.8082C15.0792 14.841 14.9767 14.8396 14.8838 14.8043L13.1299 14.098C13.0331 14.0595 12.9284 14.0456 12.825 14.0576C12.7215 14.0695 12.6227 14.1069 12.5373 14.1664C12.2696 14.3507 11.9883 14.5145 11.6959 14.6562C11.6039 14.7009 11.5244 14.7676 11.4643 14.8503C11.4042 14.933 11.3654 15.0292 11.3513 15.1305L11.0884 17.0012C11.0712 17.1 11.0201 17.1897 10.944 17.255C10.868 17.3204 10.7715 17.3573 10.6713 17.3594H7.32985C7.23124 17.3577 7.13614 17.3224 7.06024 17.2594C6.98433 17.1965 6.93215 17.1095 6.91227 17.0129L6.64978 15.1449C6.63503 15.0426 6.59523 14.9454 6.53389 14.8621C6.47256 14.7789 6.3916 14.712 6.29821 14.6676C6.00611 14.5266 5.72578 14.3624 5.45993 14.1766C5.37481 14.1173 5.27629 14.0802 5.17326 14.0686C5.07022 14.0569 4.9659 14.0711 4.8697 14.1098L3.11618 14.8156C3.02325 14.851 2.92082 14.8525 2.82693 14.8197C2.73303 14.787 2.6537 14.7222 2.6029 14.6367L0.932196 11.7461C0.881967 11.6597 0.864017 11.5583 0.881543 11.46C0.899068 11.3616 0.950932 11.2727 1.0279 11.209L2.52048 10.0371C2.60225 9.9722 2.66652 9.88789 2.70745 9.79185C2.74837 9.6958 2.76467 9.59105 2.75485 9.48711C2.74079 9.32422 2.7322 9.16172 2.7322 8.99883C2.7322 8.83594 2.7404 8.67578 2.75485 8.51641C2.7636 8.4131 2.7465 8.30924 2.70511 8.21418C2.66372 8.11912 2.59933 8.03585 2.51774 7.97187L1.02595 6.8C0.950228 6.73597 0.899457 6.64734 0.88253 6.54964C0.865603 6.45194 0.8836 6.35139 0.933368 6.26562L2.60407 3.375C2.65481 3.28945 2.73412 3.22455 2.82802 3.19175C2.92192 3.15895 3.02438 3.16035 3.11735 3.1957L4.87126 3.90195C4.96798 3.94046 5.07274 3.95438 5.17616 3.94245C5.27958 3.93052 5.37843 3.89311 5.46384 3.83359C5.73151 3.64927 6.01279 3.48552 6.30524 3.34375C6.39719 3.29906 6.47671 3.23242 6.5368 3.14972C6.59689 3.06701 6.63569 2.97078 6.64978 2.86953L6.91267 0.998828C6.92993 0.900032 6.98097 0.810299 7.05707 0.744964C7.13316 0.679629 7.22958 0.642748 7.32985 0.640625H10.6713C10.7699 0.642331 10.865 0.677578 10.9409 0.74056C11.0168 0.803542 11.069 0.8905 11.0888 0.987109L11.3513 2.85508C11.3661 2.95745 11.4059 3.05459 11.4672 3.13787C11.5286 3.22114 11.6095 3.28798 11.7029 3.33242C11.995 3.47342 12.2753 3.63762 12.5412 3.82344C12.6263 3.88266 12.7248 3.91978 12.8279 3.93144C12.9309 3.9431 13.0352 3.92894 13.1314 3.89023L14.8849 3.18438C14.9779 3.14899 15.0803 3.14753 15.1742 3.18026C15.2681 3.21299 15.3474 3.2778 15.3982 3.36328L17.0689 6.25391C17.1191 6.34027 17.1371 6.44165 17.1196 6.54001C17.102 6.63837 17.0502 6.72732 16.9732 6.79102L15.4806 7.96289C15.3985 8.02759 15.3339 8.1118 15.2926 8.20786C15.2513 8.30392 15.2347 8.40878 15.2443 8.51289C15.2572 8.67461 15.2658 8.83711 15.2658 9Z"
                                stroke="Currentcolor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <div className="pl-3 heading-container">
                            <p className="text-base font-medium leading-none text-slate-800 group-hover:text-indigo-700 ">
                              General
                            </p>
                          </div>
                        </div>
                      </a>
                      <a className="cursor-pointer">
                        <div className="flex items-center group"></div>
                      </a>
                    </div>
                  </div>
                  <div className="block px-6 lg:hidden md:block">
                    <div className="relative top-1 ">
                      <div className="relative w-full mt-2 rounded outline-none dropdown-one bg-gray-50">
                        <button className="relative flex items-center justify-between w-full px-5 py-4 dropbtn-one">
                          <span
                            className="pr-4 text-sm font-medium text-indigo-700  flex flex-row-reverse	 justify-end gap-x-2 "
                            id="drop-down-content-setter-two_form_layout_wizard3"
                          >
                            <div className="flex gap-x-2 ">
                              <svg
                                className="text-inherit"
                                width={18}
                                height={18}
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9.24626 6.51211C8.73332 6.46145 8.21726 6.57057 7.76874 6.82454C7.32022 7.07851 6.96116 7.4649 6.74072 7.93082C6.52028 8.39673 6.44924 8.91939 6.53733 9.42724C6.62541 9.9351 6.86832 10.4033 7.23278 10.7678C7.59725 11.1322 8.06546 11.3751 8.57331 11.4632C9.08116 11.5513 9.60382 11.4803 10.0697 11.2598C10.5357 11.0394 10.922 10.6803 11.176 10.2318C11.43 9.78329 11.5391 9.26723 11.4884 8.7543C11.4307 8.17929 11.1759 7.64193 10.7673 7.23329C10.3586 6.82465 9.82127 6.56986 9.24626 6.51211V6.51211ZM15.2658 9C15.2642 9.27174 15.2442 9.54306 15.206 9.81211L16.972 11.1973C17.0489 11.261 17.1008 11.35 17.1183 11.4483C17.1358 11.5466 17.1179 11.648 17.0677 11.7344L15.397 14.625C15.3463 14.7106 15.267 14.7754 15.1731 14.8082C15.0792 14.841 14.9767 14.8396 14.8838 14.8043L13.1299 14.098C13.0331 14.0595 12.9284 14.0456 12.825 14.0576C12.7215 14.0695 12.6227 14.1069 12.5373 14.1664C12.2696 14.3507 11.9883 14.5145 11.6959 14.6562C11.6039 14.7009 11.5244 14.7676 11.4643 14.8503C11.4042 14.933 11.3654 15.0292 11.3513 15.1305L11.0884 17.0012C11.0712 17.1 11.0201 17.1897 10.944 17.255C10.868 17.3204 10.7715 17.3573 10.6713 17.3594H7.32985C7.23124 17.3577 7.13614 17.3224 7.06024 17.2594C6.98433 17.1965 6.93215 17.1095 6.91227 17.0129L6.64978 15.1449C6.63503 15.0426 6.59523 14.9454 6.53389 14.8621C6.47256 14.7789 6.3916 14.712 6.29821 14.6676C6.00611 14.5266 5.72578 14.3624 5.45993 14.1766C5.37481 14.1173 5.27629 14.0802 5.17326 14.0686C5.07022 14.0569 4.9659 14.0711 4.8697 14.1098L3.11618 14.8156C3.02325 14.851 2.92082 14.8525 2.82693 14.8197C2.73303 14.787 2.6537 14.7222 2.6029 14.6367L0.932196 11.7461C0.881967 11.6597 0.864017 11.5583 0.881543 11.46C0.899068 11.3616 0.950932 11.2727 1.0279 11.209L2.52048 10.0371C2.60225 9.9722 2.66652 9.88789 2.70745 9.79185C2.74837 9.6958 2.76467 9.59105 2.75485 9.48711C2.74079 9.32422 2.7322 9.16172 2.7322 8.99883C2.7322 8.83594 2.7404 8.67578 2.75485 8.51641C2.7636 8.4131 2.7465 8.30924 2.70511 8.21418C2.66372 8.11912 2.59933 8.03585 2.51774 7.97187L1.02595 6.8C0.950228 6.73597 0.899457 6.64734 0.88253 6.54964C0.865603 6.45194 0.8836 6.35139 0.933368 6.26562L2.60407 3.375C2.65481 3.28945 2.73412 3.22455 2.82802 3.19175C2.92192 3.15895 3.02438 3.16035 3.11735 3.1957L4.87126 3.90195C4.96798 3.94046 5.07274 3.95438 5.17616 3.94245C5.27958 3.93052 5.37843 3.89311 5.46384 3.83359C5.73151 3.64927 6.01279 3.48552 6.30524 3.34375C6.39719 3.29906 6.47671 3.23242 6.5368 3.14972C6.59689 3.06701 6.63569 2.97078 6.64978 2.86953L6.91267 0.998828C6.92993 0.900032 6.98097 0.810299 7.05707 0.744964C7.13316 0.679629 7.22958 0.642748 7.32985 0.640625H10.6713C10.7699 0.642331 10.865 0.677578 10.9409 0.74056C11.0168 0.803542 11.069 0.8905 11.0888 0.987109L11.3513 2.85508C11.3661 2.95745 11.4059 3.05459 11.4672 3.13787C11.5286 3.22114 11.6095 3.28798 11.7029 3.33242C11.995 3.47342 12.2753 3.63762 12.5412 3.82344C12.6263 3.88266 12.7248 3.91978 12.8279 3.93144C12.9309 3.9431 13.0352 3.92894 13.1314 3.89023L14.8849 3.18438C14.9779 3.14899 15.0803 3.14753 15.1742 3.18026C15.2681 3.21299 15.3474 3.2778 15.3982 3.36328L17.0689 6.25391C17.1191 6.34027 17.1371 6.44165 17.1196 6.54001C17.102 6.63837 17.0502 6.72732 16.9732 6.79102L15.4806 7.96289C15.3985 8.02759 15.3339 8.1118 15.2926 8.20786C15.2513 8.30392 15.2347 8.40878 15.2443 8.51289C15.2572 8.67461 15.2658 8.83711 15.2658 9Z"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <p className="text-base font-medium leading-none text-indigo-700 mt-[1px]">
                                General
                              </p>
                            </div>
                          </span>
                        </button>
                      </div>
                      {/* end */}
                    </div>
                  </div>
                  {/* end */}
                  <div className="mt-10 px-7">
                    <p className="text-xl sm:px-24 sm:py-12 font-semibold leading-tight text-gray-800">
                      Veuillez nous conctactez au numero ci dessous ou par email
                      si vous rencontrez des problèmes avec la plateforme ,
                      notre équipe se chargera de vous répondre dans les plus
                      brefs délais
                    </p>
                    <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-7 mt-7 ">
                      <div>
                        <p className="text-base font-medium leading-none text-gray-800">
                          Numéro de téléphone
                        </p>
                        {/*-Dropdown*/}
                        <div className="relative top-1 ">
                          <div className="relative w-full mt-2 border border-gray-300 rounded outline-none">
                            <button className="relative flex items-center justify-between w-full px-5 py-4 ">
                              <span
                                className="pr-4 text-sm font-medium text-gray-600"
                                id="drop-down-content-setter_form_layout_wizard3"
                              >
                                +225 05 85 28 97
                              </span>
                            </button>
                          </div>
                          {/* end */}
                        </div>
                        {/* end */}
                        <p className="mt-3 text-xs inline-flex leading-[15px] text-gray-600">
                          Vous pouvez aussi nous écrire via WhatsApp{" "}
                          <img
                            src="https://logowik.com/content/uploads/images/313_whatsapp_icon.jpg"
                            alt=""
                            className="h-6 w-8"
                          />
                        </p>
                      </div>
                      <div>
                        <p className="text-base font-medium leading-none text-gray-800">
                          Signaler le Type du problème
                        </p>
                        <input
                          className="w-full p-3 mt-4 border border-gray-300 rounded outline-none focus:bg-gray-50"
                          type="text"
                          name="type_error"
                        />
                        <p className="mt-3 text-xs  leading-[15px] text-gray-600">
                          Ecrivez ici le type de problème que vous rencontrez
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6 border-gray-300 mt-2 px-7">
                    <p className="text-base font-semibold leading-4 text-gray-800">
                      Details
                    </p>
                    <div className="mt-10 border border-gray-300 rounded">
                      <div className="flex flex-wrap items-center px-4 py-3 border-b border-gray-300">
                        <div className="flex h-full gap-2 p-2 rounded cursor-pointer hover:bg-blue-50 w-fit">
                          <p className="text-sm leading-none text-gray-600">
                            Normal
                          </p>{" "}
                        </div>
                        <div className="flex items-center gap-5 ml-0 lg:ml-7 md:ml-3">
                          <button className="p-1 hover:bg-gray-100 focus:bg-gray-100">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.8335 4.99984C5.8335 4.77882 5.92129 4.56686 6.07757 4.41058C6.23385 4.2543 6.44582 4.1665 6.66683 4.1665H10.8335C11.5106 4.16646 12.1716 4.37262 12.7287 4.75753C13.2857 5.14245 13.7123 5.68788 13.9517 6.32123C14.1911 6.95458 14.232 7.64582 14.0688 8.30296C13.9057 8.96011 13.5463 9.55199 13.0385 9.99984C13.5463 10.4477 13.9057 11.0396 14.0688 11.6967C14.232 12.3539 14.1911 13.0451 13.9517 13.6784C13.7123 14.3118 13.2857 14.8572 12.7287 15.2421C12.1716 15.6271 11.5106 15.8332 10.8335 15.8332H6.66683C6.44582 15.8332 6.23385 15.7454 6.07757 15.5891C5.92129 15.4328 5.8335 15.2209 5.8335 14.9998V4.99984ZM10.8335 9.1665C11.2755 9.1665 11.6994 8.99091 12.012 8.67835C12.3246 8.36579 12.5002 7.94187 12.5002 7.49984C12.5002 7.05781 12.3246 6.63389 12.012 6.32133C11.6994 6.00877 11.2755 5.83317 10.8335 5.83317H7.50016V9.1665H10.8335ZM7.50016 10.8332H10.8335C11.2755 10.8332 11.6994 11.0088 12.012 11.3213C12.3246 11.6339 12.5002 12.0578 12.5002 12.4998C12.5002 12.9419 12.3246 13.3658 12.012 13.6783C11.6994 13.9909 11.2755 14.1665 10.8335 14.1665H7.50016V10.8332Z"
                                fill="#475569"
                              />
                            </svg>
                          </button>
                          <button className="p-1 hover:bg-gray-100 focus:bg-gray-100">
                            <svg
                              width={10}
                              height={12}
                              viewBox="0 0 10 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0.833496 1.00033C0.833496 0.779312 0.921294 0.56735 1.07757 0.41107C1.23385 0.25479 1.44582 0.166992 1.66683 0.166992H8.3335C8.55451 0.166992 8.76647 0.25479 8.92275 0.41107C9.07903 0.56735 9.16683 0.779312 9.16683 1.00033C9.16683 1.22134 9.07903 1.4333 8.92275 1.58958C8.76647 1.74586 8.55451 1.83366 8.3335 1.83366H5.8335V10.167H8.3335C8.55451 10.167 8.76647 10.2548 8.92275 10.4111C9.07903 10.5674 9.16683 10.7793 9.16683 11.0003C9.16683 11.2213 9.07903 11.4333 8.92275 11.5896C8.76647 11.7459 8.55451 11.8337 8.3335 11.8337H1.66683C1.44582 11.8337 1.23385 11.7459 1.07757 11.5896C0.921294 11.4333 0.833496 11.2213 0.833496 11.0003C0.833496 10.7793 0.921294 10.5674 1.07757 10.4111C1.23385 10.2548 1.44582 10.167 1.66683 10.167H4.16683V1.83366H1.66683C1.44582 1.83366 1.23385 1.74586 1.07757 1.58958C0.921294 1.4333 0.833496 1.22134 0.833496 1.00033Z"
                                fill="#475569"
                              />
                            </svg>
                          </button>
                          <button className="p-1 hover:bg-gray-100 focus:bg-gray-100">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5 14.5882H15V16H5V14.5882ZM6.85714 12.6824C7.24571 13.054 7.70773 13.3424 8.21429 13.5294C8.78065 13.7606 9.38721 13.8805 10 13.8824C10.6128 13.8805 11.2193 13.7606 11.7857 13.5294C12.2759 13.3298 12.7192 13.0324 13.0879 12.6559C13.4566 12.2794 13.7427 11.8319 13.9286 11.3412C14.1505 10.8025 14.2715 10.2285 14.2857 9.64706V4H12.7143V9.64706C12.7138 10.0563 12.6413 10.4624 12.5 10.8471C12.3974 11.183 12.2274 11.4951 12 11.7647C11.7599 12.0131 11.4672 12.2059 11.1429 12.3294C10.7806 12.4767 10.3916 12.5488 10 12.5412C9.60839 12.5488 9.21938 12.4767 8.85714 12.3294C8.52587 12.1855 8.23258 11.9681 8 11.6941C7.77097 11.4257 7.60072 11.1132 7.5 10.7765C7.36902 10.4135 7.2967 10.0323 7.28571 9.64706V4H5.71429V9.64706C5.70569 10.2241 5.80247 10.798 6 11.3412C6.18927 11.8418 6.48107 12.2984 6.85714 12.6824Z"
                                fill="#475569"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <textarea
                        name="message"
                        className="resize-none w-full h-[170px] px-4 py-4 text-base outline-none text-slate-600"
                        placeholder="Start typing here ..."
                        defaultValue={" "}
                      />
                    </div>
                  </div>
                  <p className="mt-3 text-xs leading-[15px] text-gray-600 px-7">
                    Expliquez nous plus précisement le type de problème que vous
                    rencontrez NB:mentionnez votre nom svp et votre mail ou
                    votre numero de telephone svp
                  </p>
                  <hr className="h-[1px] bg-gray-100 my-14" />
                  <div className="flex flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4">
                    <button
                      onClick={() => {
                        navigate("/");
                      }}
                      className="bg-white border-indigo-700 rounded hover:bg-gray-50 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-indigo-700 border lg:max-w-[95px]  w-full "
                    >
                      Annuler
                    </button>
                    <button className="bg-indigo-700 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full ">
                      Envoyer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Dialog open={open} handler={handleOpen} size="xl">
        <DialogHeader>Votre message à bien été transféré</DialogHeader>
        <DialogBody divider className="text-semibold">
          Notre équipe se chargera de vous répondres dans les plus brefs delais
        </DialogBody>
        <DialogFooter>
          <Button
            variant="gradient"
            color="green"
            onClick={() => {
              window.location.reload();
            }}
          >
            <span>fermer</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
