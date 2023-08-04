const SBtn = ({ prop }) => {
  return (
    <button className="border px-10 py-2 rounded text-white hover:bg-white hover:text-[#1f1e1f] duration-125 transition-all ease">
      {prop}
    </button>
  );
};

export default SBtn;
