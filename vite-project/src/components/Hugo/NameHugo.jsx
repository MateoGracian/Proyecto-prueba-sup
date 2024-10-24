
import styles from "./NameHugo.module.css"

const NameHugo = () => {
    const miNombre = "Hugo Eseverri🤗"

    return (
        <div className={styles.container}>
            <div className={styles.nameBox}>
                <h1>{miNombre}</h1>
            </div>
        </div>
    )
};

export default NameHugo;
