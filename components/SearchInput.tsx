interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  url: string;
}

function SearchInput(searchProps: SearchInputProps) {
  const { onChange, url, ...otherProps } = searchProps;
  return (
    <input
      className="search md:w-96 w-64 m-auto text-white bg-transparent h-16 focus:outline-none appearance-none text-md leading-6 placeholder-slate-white rounded-none py-2 pl-5 ring-1 ring-slate-200"
      type="text"
      aria-label="Enter any url"
      placeholder="Enter any url... and hit ENTER"
      value={url}
      onChange={onChange}
      {...otherProps}
    />
  );
}

export default SearchInput;
