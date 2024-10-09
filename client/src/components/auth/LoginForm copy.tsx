import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authService";
import { toast, ToastContainer } from "react-toastify";
import charcter from '../../assets/charcter.png';

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
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

    return (
        <div className="w-full login-container flex justify-center items-center min-h-screen dark:bg-gray-900 p-10">
            <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:rounded-lg overflow-hidden">
                {/* Image à gauche sur les grands écrans */}
                <div className="hidden lg:block relative lg:w-1/2">
                    <img src={charcter} alt="left-img" className="w-full h-full object-cover" />
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <h2 className="text-2xl font-bold mb-2">Bonjour à tous, Bienvenue</h2>
                        <p>Bienvenue sur h5book, veuillez vous connecter à votre compte.</p>
                        <p>Vous n'avez pas encore de compte ? <a href="/register" className="text-white font-bold hover:underline">Inscrivez-vous ici</a></p>
                    </div>
                </div>
                <div className="bg-white dark:bg-bs-dark p-8 lg:w-1/2">
                    <form onSubmit={handleSubmit}>
                        <ToastContainer />
                        <h1 className="text-2xl font-bold mb-6 text-center">Connexion</h1>
                        <input
                            className="w-full p-2 mb-4 border border-gray-300 rounded"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Adresse Email"
                        />
                        <input
                            className="w-full p-2 mb-4 border border-gray-300 rounded"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Mot de passe"
                        />
                        <div className="flex items-center justify-between mb-4">
                            <label className="flex items-center">
                                <input type="checkbox" className="form-checkbox mr-2" />
                                <span>Se souvenir de moi</span>
                            </label>
                            <a href="#" className="text-blue-500">Mot de passe oublié ?</a>
                        </div>
                        <div className="flex items-center mb-4">
                            <button className="w-full bg-blue-500 text-white p-2 rounded" type="submit">
                                Connexion
                            </button>
                        </div>
                        <p className="text-center">OU Connectez-vous avec</p>
                        {/* Ajoutez ici vos boutons de connexion avec d'autres services */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
