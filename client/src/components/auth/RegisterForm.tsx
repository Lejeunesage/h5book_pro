import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../services/authService";
import { toast, ToastContainer } from "react-toastify";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import charcter from "../../assets/charcter.png";
import { HiOutlineMail } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();

    try {
      await register(
        username,
        password,
        confirmPassword,
        firstName,
        lastName,
        email
      );
      navigate("/login");
    } catch (error) {
      toast.error(
        "Échec de l'inscription. Veuillez vérifier vos informations."
      );
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="w-full login-container flex justify-center items-center min-h-screen dark:bg-gray-900">
      <div className="container px-5 xl:px-32 flex justify-center items-center xl:gap-14">
        {/* Image à gauche sur les grands écrans */}
        <div className="hidden xl:block xl:w-1/2 flex flex-col text-center items-center">
          <img
            src={charcter}
            alt="left-img"
            className="w-full h-auto filter blur-5xl transition-all duration-400 blur-up mb-5"
          />
          <h1 className="text-white text-5xl font-bold">Bienvenue!</h1>
        </div>
        <div className="bg-white xl:w-1/2 w-96 dark:bg-gray-800 xl:px-8  rounded-2xl text-gray-600 ">
          <form onSubmit={handleSubmit} className="w-full text-gray-600 p-5">
            <ToastContainer />
            <h1 className="text-2xl mb-5 font-bold text-gray-600">
              Inscription
            </h1>
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-500 dark:text-gray">
                Nom d'utilisateur
              </label>
              <input
                className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Nom d'utilisateur"
              />
              <div className="absolute top-[2.6rem] right-4 transform -translate-y-1/2 focus:outline-none">
                <FiUser />
              </div>
            </div>
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-500 dark:text-gray">
                Prénoms
              </label>

              <input
                className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Prénoms"
              />
              <div className="absolute top-[2.6rem] right-4 transform -translate-y-1/2 focus:outline-none">
                <FiUser />
              </div>
            </div>
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-500 dark:text-gray">
                Nom de famille
              </label>

              <input
                className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Nom de famille"
              />
              <div className="absolute top-[2.6rem] right-4 transform -translate-y-1/2 focus:outline-none">
                <FiUser />
              </div>
            </div>
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-500 dark:text-gray">
                Email
              </label>

              <input
                className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Adresse Email"
              />
              <div className="absolute top-[2.6rem] right-4 transform -translate-y-1/2 focus:outline-none">
                <HiOutlineMail />
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-semibold text-gray-500 dark:text-gray">
                Mot de passe
              </label>
              <div>
                <input
                  className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mot de passe"
                />
                <button
                  type="button"
                  className="absolute top-[2.6rem] right-4 transform -translate-y-1/2 focus:outline-none"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
                </button>
              </div>
            </div>
            <label className="block text-sm font-semibold text-gray-500 dark:text-gray">
              Confirmer mot de passe
            </label>
            <div className="relative">
              <input
                className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirmer le mot de passe"
              />
              <button
                type="button"
                className="absolute top-5 right-4 transform -translate-y-1/2 focus:outline-none"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? <RiEyeOffLine /> : <RiEyeLine />}
              </button>
            </div>
            {loading && <div>Loading...</div>}
            <button
              className="w-full bg-bs-blue text-white p-2 rounded-lg"
              type="submit"
            >
              S'inscrire
            </button>

            <div className="text-gray-500 text-center mt-5">
              <h1 className=" font-bold mb-4">
                Déjà inscrit ?{" "}
                <Link to="/login" className="text-bs-blue underline">
                  Se connecter
                </Link>
              </h1>
            </div>

            <div className="mt-4 border-t text-center">
              <h1 className="text-[.8em] m-2"> Ou se connecter avec</h1>
              <button className="text-3xl">
                <FcGoogle />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
