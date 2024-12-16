/* eslint-disable react/prop-types */
const Container = ({ children }) => {
  return (
    <div className="max-w-[2520px] w-full mx-auto xl:px-0 md:px-10 sm:px-2 px-4 bg-gray-100 rounded-xl">
      {children}
    </div>
  );
};

export default Container;
