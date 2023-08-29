import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleHideModal, handleTaskData } from "./redux/counterSlice";

const AttachmentModal = () => {
  const { showModal, attachmentData, tasksData } = useSelector(
    (state) => state.counter
  );
  const dispatch = useDispatch();
  const [file, setFile] = useState();
  const initialInputValues = {
    name: "",
    message: "",
  };
  let obj = [];
  const [inputValues, setInputValues] = useState(initialInputValues);

  const handleInputChange = (e) => {
    setInputValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = {
      name: inputValues.name,
      message: inputValues.message,
      file: file.name,
    };

    tasksData.map((item) => {
      if (item.id == attachmentData.boxId) {
        const updatedItems = item.items.map((task) => {
          if (task.id == attachmentData.id) {
            obj = [...obj, finalData];
            return { ...task, attachedData: obj };
          }
          return task;
        });

        return { ...item, items: updatedItems };
      }
      return item;
    });
    // dispatch(handleTaskData(newData));
  };

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <>
      <div
        className={`overlay fixed top-0 left-0 h-screen w-full bg-gray-500 transition-all duration-300 ${
          showModal ? "opacity-50 visible" : "opacity-0 invisible"
        }`}
        onClick={() => dispatch(handleHideModal())}></div>
      <div
        className={`popup fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[510px] bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6 duration-300 ${
          showModal
            ? "opacity-1 visible scale-100"
            : "opacity-0 invisible scale-75"
        }`}>
        <form
          method="POST"
          className="grid grid-cols-1 gap-y-6"
          onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="sr-only">
              Full name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 border border-gray-300 rounded-md"
              placeholder="Full name"
              value={inputValues.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
              placeholder="Message"
              value={inputValues.message}
              onChange={handleInputChange}></textarea>
          </div>
          <div className="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true">
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {file ? (
                <p className="pl-1">{file.name}</p>
              ) : (
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      onChange={handleFileChange}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
              )}

              {/* <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p> */}
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AttachmentModal;
