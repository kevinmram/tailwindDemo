function Navbar() {
    return (
      <nav className="bg-black p-4 text-white flex justify-between">
        <div className="text-lg font-bold">Cornell DTI</div>
        <div className="flex space-x-4">
          <span>Home</span>
          <span>About Us</span>
          <span>Our Products</span>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  