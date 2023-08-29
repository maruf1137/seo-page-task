/* eslint-disable react/prop-types */
import TaskSingleItem from "./taskSingleItem";

const TaskBox = ({ data }) => {
  const { title, flagColor, items, id } = data;

  return (
    <div className="wrapper min-w-[340px] rounded-md h-full overflow-auto">
      <div className="bg-gray-100 ">
        {/* box nav */}
        <div className="flex justify-between items-center py-2 px-3 sticky top-0 bg-gray-100">
          <div className="flex items-center gap-2">
            {data.flagColor && (
              <div
                className={`round h-6 w-6 rounded-l-full ${flagColor}`}></div>
            )}
            <h4 className="title text-lg font-semibold">{title}</h4>
          </div>
          <div className="number text-md bg-gray-200 rounded-md h-8 w-8 flex justify-center items-center">
            {items.length}
          </div>
        </div>
        {/* all items */}
        <div className="items px-2 pb-2">
          {/* single item */}
          {items.map((item, index) => {
            return <TaskSingleItem key={index} item={item} boxId={id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TaskBox;
