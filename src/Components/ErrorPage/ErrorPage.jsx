import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-bold text-orange-500 mb-4">404</h1>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>

        <p className="text-gray-600 mb-6">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition"
        >
          Back to Home
        </Link>
        
      </div>
    </section>
  );
};

export default ErrorPage;
