import "./back_p.css";
export default function Front() {
  return (
    <section className="container_form">
      <div className="imagenes">
        <img src="/backvsfront.png" alt="img1" />
        <img src="/cod.jpg" alt="img2" />
        <img src="/comp.jpg" alt="img3" />
      </div>
      <div className="content">
        <h1>Backend</h1>
        <h2>La Logica Oculta</h2>
        <p>
          Es la parte del desarrollo web que opera detrás de escena, procesando
          y gestionando la información para que el frontend funcione
          correctamente. Es responsable de la lógica, el almacenamiento de datos
          y la comunicación con bases de datos, APIs y servidores.
        </p>
      </div>
    </section>
  );
}