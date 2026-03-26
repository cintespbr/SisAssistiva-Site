import { useState } from "react";
import api from "../../axiosConfig";

export const useFormContato = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const clearForm = () => {
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await api.post('/messages', {
                nome: name,
                email,
                phone,
                message,
            });
            clearForm();
        } catch (error) {
            const err = error as { response?: { status?: number; data?: unknown }; message?: string };
            const status = err.response?.status;
            const data = err.response?.data;
            console.error("Erro ao enviar mensagem:", { status, data, message: err.message });
        }
    };

    return {
        name,
        setName,
        email,
        setEmail,
        phone,
        setPhone,
        message,
        setMessage,
        handleSubmit,
        clearForm,
    };
};
