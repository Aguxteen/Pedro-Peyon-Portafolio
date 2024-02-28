import styles from "../../styles/Home.module.css";
import Techs from "./techs";

const ProjectsDisplay = ({ projects }) => {
  return (
    <>
      <div className={styles.grid}>
        {projects?.map((el, key) => (
           <a
            key={key}
            target="_blank "
            href={el.anchor}
            className={`${styles.flex2}`}
          >
            <div>
              <img
                alt={el.img.alt}
                className={styles.proyectos}
                src={el.img.src}
              />{" "}
              <p>{el.anchor_msg}</p>
            </div>
            <div className={styles.card}>
              <h2>{el.title}</h2>
              <p>
                {el.description}
              </p>
              <Techs {...el.techs} />
              <p style={{
                textAlign:"center",
                fontSize:15
              }}>{el.rol}</p>

            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default ProjectsDisplay;
