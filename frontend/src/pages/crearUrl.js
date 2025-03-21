import React, { useState } from 'react';
import {AcortarUrl} from '../service/acortar'
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { VerificarUrl } from '../service/verificar';


export default function AcortarUrlPage() {
    const [url, setUrl] = useState("");
    const [shortUrl, setShortUrl] = useState(null);
    const [sufijo, setSufijo] = useState("");
    const [disponibilidad, setDisponibilidad] = useState(null);
    const ver = new VerificarUrl();
    const shortener = new AcortarUrl();

    const generateSuffix = () => {
        let result = "";
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 5; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    };

    const handleAcortar = async () => {
        const finalSuffix = sufijo.trim() !== "" ? sufijo : generateSuffix();

        try {
            const response = await shortener.crearUrl(url, finalSuffix);
            if (response.data && response.data.shortUrl) {
                setShortUrl(response.data.shortUrl);
            } else {
                setShortUrl("Error al acortar la URL");
            }
        } catch (error) {
            setShortUrl("Error al acortar la URL");
        }
    };

    const verificarDisponibilidad = async () => {
        if (!sufijo.trim()) {
            setDisponibilidad("⚠ Ingresa un sufijo para verificar.");
            return;
        }
    
        try {
            const response = await ver.verificar(sufijo);
    
            // Verificamos si response.data es un booleano (true o false)
            if (response.data === true) {
                setDisponibilidad("✅ Sufijo disponible");
            } else if (response.data === false) {
                setDisponibilidad("❌ Sufijo no disponible");
            } else {
                setDisponibilidad("⚠ Respuesta inesperada del servidor");
            }
        } catch (error) {
            console.error("Error al verificar el sufijo:", error);
            setDisponibilidad("⚠ Error al verificar el sufijo");
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
            <h2>Acortador de URL</h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <InputText 
                    value={url} 
                    onChange={(e) => setUrl(e.target.value)} 
                    placeholder="Ingresa la URL"
                />
                <InputText 
                    value={sufijo} 
                    onChange={(e) => setSufijo(e.target.value)} 
                    placeholder="Sufijo personalizado (opcional)"
                />
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "15px" }}>
                <Button label="Verificar Disponibilidad" onClick={verificarDisponibilidad} />
                <Button label="Acortar" onClick={handleAcortar} />
            </div>

            {disponibilidad && (
                <p style={{ marginTop: "10px", color: disponibilidad.includes("✅") ? "green" : "red" }}>
                    {disponibilidad}
                </p>
            )}

            {shortUrl && (
                <p style={{ marginTop: "15px", color: "green", fontWeight: "bold" }}>
                    URL acortada: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a>
                </p>
            )}
        </div>
    );
}
