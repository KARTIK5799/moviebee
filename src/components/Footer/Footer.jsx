import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto flex justify-between">
        <div className="flex items-center space-x-4">
          <Logo />
        </div>

        <div className="flex flex-row items-center space-x-4">
          <div className="flex flex-col">
            <span className="mr-4">Home</span>
            <span className="mr-4">Contact</span>
            <span className="mr-4">About</span>
            <span className="mr-4">Information</span>
          </div>
          <div className="flex flex-col">
            <span className="mr-4">Careers</span>
            <span className="mr-4">Join Us</span>
            <span className="mr-4">Newsletter</span>
            <span>Blog</span>
          </div>
        </div>

        <div className="flex flex-col mt-4 w-60">
          <p>
            MovieBee is your go-to platform for exploring and booking tickets
            for the latest movies. Stay tuned for exciting updates and
            entertainment!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
