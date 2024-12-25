const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          {/* Branding */}
          <div className="text-center mb-6">
            <h3 className="text-3xl font-semibold">BioInfo Academy</h3>
            <p className="text-sm text-gray-400 mt-2">
              Your one-stop solution for mastering bioinformatics. Learn, practice, and grow.
            </p>
          </div>
  
          {/* Footer Links */}
          <div className="flex justify-center space-x-8 mb-6">
            <a
              href="#help"
              className="text-gray-300 hover:text-white transition-all"
            >
              Help and Support
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-all"
            >
              About Us
            </a>
            <a
              href="#privacy"
              className="text-gray-300 hover:text-white transition-all"
            >
              Privacy Policy
            </a>
          </div>
  
          {/* Footer Bottom */}
          <div className="text-center text-sm text-gray-500 mt-6">
            &copy; {new Date().getFullYear()} BioInfo Academy. All Rights Reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  