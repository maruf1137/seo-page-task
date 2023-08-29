/* eslint-disable no-unused-vars */
import React from "react";
import { handleShowModal } from "./redux/counterSlice";
import { useDispatch } from "react-redux";

const TaskSingleItem = ({ item, boxId }) => {
  const {
    id,
    clientName,
    clientImg,
    developerName,
    developerImg,
    description,
    contributeImg1,
    contributeImg2,
    contributeCount,
    comment,
    copy,
    date,
    attachedData,
  } = item;

  const dispatch = useDispatch();

  return (
    <div className="item bg-white rounded-md mt-2 py-2 px-2">
      {/* names */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center">
          <figure className="h-6 w-6 rounded-full mr-2">
            <img
              src={clientImg}
              alt=""
              className="h-full w-full rounded-full object-cover"
            />
          </figure>
          <span className="text-base block font-medium text-capitalize">
            {clientName}
          </span>
        </div>
        <div className="flex items-center">
          <figure className="h-6 w-6 rounded-full mr-2">
            <img
              src={developerImg}
              alt=""
              className="h-full w-full rounded-full object-cover"
            />
          </figure>
          <span className="text-base block font-medium text-capitalize">
            {developerName}
          </span>
        </div>
      </div>

      {/* description */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center">
          <svg className="icon h-3 w-3 mr-2">
            <use xlinkHref="/icons.svg#icon-database"></use>
          </svg>
          <p className="text-sm">
            {description.substring(0, 20)}
            ...
          </p>
        </div>
        <div className="flex items-center bg-gray-100 text-md rounded-sm h-8 px-2">
          <svg className="icon h-4 w-4 mr-1">
            <use xlinkHref="/icons.svg#icon-cabinet"></use>
          </svg>
          <span className="block text-sm">1/2</span>
        </div>
      </div>

      {/* bottom */}
      <div className="flex items-center justify-between">
        <figure className="h-6 w-6 rounded-full mr-2">
          <img
            src={contributeImg1}
            alt=""
            className="h-full w-full rounded-full object-cover"
          />
        </figure>
        <figure className="h-6 w-6 rounded-full mr-2">
          <img
            src={contributeImg2}
            alt=""
            className="h-full w-full rounded-full object-cover"
          />
        </figure>
        <div className="h-6 w-6 rounded-full mr-2 flex items-center justify-center bg-gray-100 text-xs font-medium">
          {contributeCount}
        </div>
        <button className="flex items-center cursor-pointer border-none outline-none bg-transparent transition-all duration-300 hover:bg-gray-100 p-1 rounded-sm">
          <svg className="icon h-3 w-3 mr-1">
            <use xlinkHref="/icons.svg#icon-comments"></use>
          </svg>
          <span className="block text-sm">{comment}</span>
        </button>
        <button
          className="flex items-center cursor-pointer border-none outline-none bg-transparent transition-all duration-300 hover:bg-gray-100 p-1 rounded-sm"
          onClick={() => dispatch(handleShowModal({ boxId, id }))}>
          <svg className="icon h-3 w-3 mr-1">
            <use xlinkHref="/icons.svg#icon-attachment"></use>
          </svg>
          <span className="block text-sm">
            {!attachedData && attachedData == [] ? "0" : attachedData.length}
          </span>
        </button>
        <button className="flex items-center cursor-pointer border-none outline-none bg-transparent transition-all duration-300 hover:bg-gray-100 p-1 rounded-sm">
          <svg className="icon h-3 w-3 mr-1">
            <use xlinkHref="/icons.svg#icon-calendar"></use>
          </svg>
          <span className="block text-sm">{date}</span>
        </button>
      </div>
    </div>
  );
};

export default TaskSingleItem;
