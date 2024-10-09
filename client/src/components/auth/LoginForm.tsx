import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/authService";
import { toast, ToastContainer } from "react-toastify";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import charcter from "../../assets/charcter.png";
import Loading from "../common/Loading"
import { FiUser } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();

    try {
      await login(username, password);
      navigate("/");
    } catch (error) {
      toast.error("Échec de la connexion. Veuillez vérifier vos identifiants.");
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
        <div className="bg-white xl:w-1/2 w-96 dark:bg-bs-dark xl:px-8  rounded-2xl text-gray-600 ">
          <form onSubmit={handleSubmit} className="w-full text-gray-600 p-5">
            <ToastContainer />
            <h1 className="text-2xl mb-5 font-bold text-gray-600">Connexion</h1>
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
            {loading && <Loading/>}
            <button
              className="w-full bg-bs-blue text-white p-2 rounded-lg"
              type="submit"
            >
              Se connecter
            </button>

            <div className="text-gray-500 text-center mt-5">
              <h1 className=" font-bold mb-4">
                Pas encore inscrit ?{" "}
                <Link to="/register" className="text-bs-blue underline">
                  S'inscrire
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

export default LoginForm;
