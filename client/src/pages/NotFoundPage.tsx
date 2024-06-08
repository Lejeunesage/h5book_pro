import React from 'react';
import { useNavigate } from 'react-router-dom'; 
// import notfound from '../assets/notfound1.png'

const NotFoundPage: React.FC = () => {
    const navigate = useNavigate(); // Utilisez useNavigate pour gérer le retour

    return (
        <div className="flex items-center justify-center h-screen bg-blue-50">
            <div className=" flex text-center justify-center items-center gap-5">
                {/* <div>
                    <img src={notfound} alt="Page Not Found" className="mx-auto w-96 " />
                </div> */}
                <div>
                    <h1 className="text-4xl font-bold text-blue-600 mt-2">Erreur 404</h1>
                    <p className="text-lg text-blue-800 mt-2">Désolé, la page que vous recherchez est introuvable.</p>
                    <button
                        onClick={() => navigate(-1)} 
                        className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 transition-colors"
                    >
                        Retourner en arrière
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NotFoundPage;
