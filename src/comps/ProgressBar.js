import React, { useEffect } from 'react';
import useStorage from "../hooks/useStorage";
import { motion } from "framer-motion";

export default function ProgressBar({ file, setFile }) {
    const { url, progress } = useStorage(file);

    useEffect(() => {
        if (url) {
            setFile(null);
        }

    }, [url, setFile]);

    return (
        <motion.div className="progress-bar"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: progress }}
        ></motion.div>
    );
}
