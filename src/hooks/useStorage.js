import { useState, useEffect } from "react";
import { projectStorage, projectFirestore, timestamp } from "../firebase/config";

function useStorage(file) {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // references
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection("images");

        storageRef.put(file).on("state_changed", (snapshot) => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes);

            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            try {
                const url = await storageRef.getDownloadURL();
                const createdAt = timestamp();

                collectionRef.add({ url, createdAt });
                setUrl(url);
                
            } catch (err) {
                console.error(err);
            }
        });

    }, [file]);

    return {
        progress,
        url,
        error
    };

}

export default useStorage;