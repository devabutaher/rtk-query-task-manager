"use client";

import TaskForm from "@/component/TaskForm";
import { useGetTaskQuery } from "@/redux/features/tasks/taskApi";

const EditTaskPage = ({ params }) => {
  const { data: initialData } = useGetTaskQuery(params.id);

  return (
    <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
      <h1 className="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">
        Edit Task for Your Team
      </h1>

      <div className="justify-center mb-10 space-y-2 md:flex md:space-y-0">
        <TaskForm initialData={initialData} />
      </div>
    </main>
  );
};

export default EditTaskPage;
