import TaskBox from "./component/taskBox";
// import { tasksAllData } from "./component/data";
import AttachmentModal from "./component/attachmentModal";
import { useSelector } from "react-redux";

function App() {
  const { tasksData } = useSelector((state) => state.counter);

  return (
    <>
      <div className="bg-gray-200 w-screen overflow-x-auto h-screen p-2">
        {/* full container */}
        <div className="bg-white p-3 flex gap-3 overflow-x-auto h-full">
          {/* box */}
          {tasksData &&
            tasksData.map((data) => {
              const { id } = data;
              return <TaskBox key={id} data={data} />;
            })}
        </div>
      </div>
      <AttachmentModal />
    </>
  );
}

export default App;
