// components/Detail.tsx

const Detail = () => {
  return (
    <section className="w-10/12 mx-auto mt-10">
      <div className="py-12 bg-gray-900 rounded-xl">
    <div className="flex flex-col justify-center w-10/12 mx-auto">
  <div
    className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-gray-800 bg-gray-800">
    <div className="w-full md:w-1/3 bg-white grid place-items-center rounded-xl">
      <img src="https://images.unsplash.com/photo-1508528075895-be7a6cabd37a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vdW50YWluJTIwd2F0ZXJmYWxsfGVufDB8fDB8fHww" alt="tailwind logo" className="rounded-xl" />
    </div>
    <div className="w-full md:w-2/3 bg-gray-800 flex flex-col space-y-2 p-3">
      <div className="flex  item-center">
      <div className="lg:text-center">
          <h2 className="text-4xl md:mb-10 md:ml-20 font-bold text-center transition-transform duration-500 transform hover:scale-105 text-white hover:cursor-pointer">
      <span className="text-red-900">WHY</span>&nbsp;US ?
      </h2>  
          </div>

      </div>
      
      <p className="md:text-lg text-gray-300 text-base">The best kept secret of The Bahamas is the country’s sheer
        size and diversity. With 16 major islands, The Bahamas is an unmatched destination</p>
      
    </div>
  </div>
  
</div>
</div>
</section>
  );
};

export default Detail;
