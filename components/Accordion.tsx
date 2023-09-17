interface AccordionProps<T = any> {
  data: T;
}

const Details = ({ tasks, title }) => {
  return (
    <details className="w-full rounded-lg ring-1 ring-purple-400 cursor-pointer">
      <summary className="px-4 py-6">{title}</summary>
      <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
        {tasks}
      </p>
    </details>
  );
};

function Accordion({ data }: AccordionProps) {
  const { tasks } = data;
  return (
    <div className="accordion flex items-center justify-center">
      <div className="bg-transparent">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold text-center">SEO Result</h2>
          <br />
          <div className="space-y-4">
            <Details tasks={tasks[0]?.data?.url} title="Site Address" />
            <Details
              tasks={tasks[0]?.result[0]?.items[0]?.meta?.description}
              title="What is the Description?"
            />
            <Details
              tasks={tasks[0]?.result[0]?.items[0]?.onpage_score}
              title=" What is the On Page Score?"
            />
            <Details
              tasks={tasks[0]?.result[0]?.items[0]?.meta?.internal_links_count}
              title="How Many Internal Links"
            />
            <Details
              tasks={tasks[0]?.result[0]?.items[0]?.resource_type} Resource
              title="What is the resource type?"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
