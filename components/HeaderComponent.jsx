const HeaderComponent = ({ children }) => {
  return (
    <>
      <div
        className='relative h-screen bg-cover bg-center'
        style={{ backgroundImage: "url(/travelBanner.jpg)" }}
      >
        <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
          {children}
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
