function Accordion({ data }: any) {
  const { tasks } = data;
  return (
    <div className="accordion flex items-center justify-center">
      <div className="bg-transparent">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold text-center">SEO Result</h2>
          <br />
          <div className="space-y-4">
            <details className="w-full rounded-lg ring-1 ring-purple-400 cursor-pointer">
              <summary className="px-4 py-6">Site Address</summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                {tasks[0]?.data?.url}
              </p>
            </details>
            <details className="w-full rounded-lg ring-1 ring-purple-400 cursor-pointer">
              <summary className="px-4 py-6">What is the Description?</summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                {tasks[0]?.result[0]?.items[0]?.meta?.description}
              </p>
            </details>
            <details className="w-full rounded-lg ring-1 ring-purple-400 cursor-pointer">
              <summary className="px-4 py-6">
                What is the On Page Score?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                Score: {tasks[0]?.result[0]?.items[0]?.onpage_score}
              </p>
            </details>
            <details className="w-full rounded-lg ring-1 ring-purple-400 cursor-pointer">
              <summary className="px-4 py-6">How Many Internal Links</summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                {tasks[0]?.result[0]?.items[0]?.meta?.internal_links_count}{" "}
                Internal Links
              </p>
            </details>
            <details className="w-full rounded-lg ring-1 ring-purple-400 cursor-pointer">
              <summary className="px-4 py-6">
                What is the resource type?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                {tasks[0]?.result[0]?.items[0]?.resource_type} Resource
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
