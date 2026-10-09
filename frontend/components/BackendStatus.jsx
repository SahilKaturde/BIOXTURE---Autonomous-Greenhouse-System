import { useEffect, useState } from "react";
import { checkBackend } from "../src/services/api.js";

export default function BackendStatus() {
    const [status, setStatus] = useState("Checking backend...");

    useEffect(() => {
        let active = true;

        checkBackend()
            .then((data) => {
                if (active) {
                    setStatus(`Connected — ${data.service}`);
                }
            })
            .catch(() => {
                if (active) {
                    setStatus("Backend connection failed");
                }
            });

        return () => {
            active = false;
        };
    }, []);

    return <p>Backend status: {status}</p>;
}