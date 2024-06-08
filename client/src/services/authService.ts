import api from "../utils/api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../utils/constraints";
import { toast } from "react-toastify";

export const login = async (username: string, password: string) => {
    try {
        const res = await api.post("/api/token/", { username, password });
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        return res.data;
    } catch (error : any) {
        toast.error(error.message);
        throw error;
    }
};

export const register = async (
    username: string,
    password: string,
    confirmPassword: string,
    firstName: string,
    lastName: string,
    email: string
) => {
    if (password !== confirmPassword) {
        toast.error("Passwords do not match.");
        throw new Error("Passwords do not match.");
    }

    try {
        const res = await api.post("/api/user/register/", {
            username,
            password,
            first_name: firstName,
            last_name: lastName,
            email
        });
        return res.data;
    } catch (error:any) {
      toast.error(error.message);
        throw error;
    }
};


// Fonction pour envoyer un email de réinitialisation du mot de passe
export const sendResetPasswordEmail = async (email: string) => {
  try {
    console.log(`Simuler l'envoi de l'email de réinitialisation du mot de passe à: ${email}`);
    
    // const response = await api.post('/forgot-password', { email });
    // return response.data; 

    return { message: "Email de réinitialisation envoyé avec succès." };
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email de réinitialisation du mot de passe", error);
    throw error;
  }
};

// Fonction pour réinitialiser le mot de passe
export const resetPassword = async (password: string, confirmPassword: string) => {
  // Assurez-vous que les mots de passe correspondent avant de faire l'appel API
  if (password !== confirmPassword) {
    throw new Error('Les mots de passe ne correspondent pas.');
  }

  try {
    console.log(`Simuler la réinitialisation du mot de passe avec le nouveau mot de passe: ${password}`);
    
    // const response = await api.post('/reset-password', { password });
    // return response.data; 

    return { message: "Mot de passe réinitialisé avec succès." };
  } catch (error) {
    console.error("Erreur lors de la réinitialisation du mot de passe", error);
    throw error;
  }
};
