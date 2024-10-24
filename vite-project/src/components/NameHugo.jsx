
import React from "react";
import styles from "./Name.module.css"

const Nombre = () => {
    const miNombre = "Hugo Eseverri🤗"

    return (
        <div className={styles.container}>
            <div className={styles.nameBox}>
                {miNombre}
            </div>
        </div>
    )
};

export default Nombre;
