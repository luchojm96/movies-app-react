import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MoviesContext } from "../contexts/MoviesContext";
import { useForm } from "../hooks/useForm";

export default function Detail() {
  const { id } = useParams();
  const { selectedMovie, getMovieById, addReview, comments } =
    useContext(MoviesContext);

  const { values, handleInputChange } = useForm({
    comment: "",
    stars: 1,
  });

  useEffect(() => {
    getMovieById(id);
  }, []);

  if (selectedMovie === null) {
    return <>Cargando ...</>;
  } else {
    const { title, year, image, synopsis, stars, categories } = selectedMovie;
    return (
      <>
        <h1 className="section-title">{title}</h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            paddingBottom: "1rem",
          }}
        >
          <div style={{ marginRight: "auto", marginLeft: "auto" }}>
            <img
              src={image}
              alt={title}
              style={{ width: "auto", height: "700px" }}
            />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <h2
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              Descripción
            </h2>
            <p>Año: {year}</p>
            <p>Sinopsis:</p>
            <p>{synopsis}</p>
            <p>
              Calificación:{" "}
              {stars === 5
                ? "⭐⭐⭐⭐⭐"
                : stars === 4
                ? "⭐⭐⭐⭐"
                : stars === 3
                ? "⭐⭐⭐"
                : stars === 2
                ? "⭐⭐"
                : "⭐"}
            </p>
            <p>Categorias: {categories.map((cat) => `${cat} `)}</p>
          </div>
        </div>
        <hr />
        {/* Comment input */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <label style={{ display: "block" }} htmlFor="comment">
            Comentar
          </label>
          <input
            type="text"
            name="comment"
            placeholder="Comentar..."
            style={{ padding: "4px 8px" }}
            onChange={handleInputChange}
          />
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <label htmlFor="stars">Puntuación ⭐</label>
            <input
              type="number"
              name="stars"
              max={5}
              min={1}
              onChange={handleInputChange}
            />
            <button
              style={{
                padding: "4px 12px",
                backgroundColor: "#84cc16",
                color: "#fff",
                fontWeight: "700",
                borderRadius: "4px",
              }}
              onClick={() => {
                addReview(id, values.comment, parseInt(values.stars));
                console.log(values);
                console.log(comments);
              }}
            >
              Publicar
            </button>
          </div>
        </div>
        {/* Comments */}
        <div>
          <p style={{ marginTop: "8px", marginBottom: "8px", fontWeight: 600 }}>
            Comentarios
          </p>
          <hr />
          {comments.map((comment) =>
            parseInt(comment.movieId) == id ? (
              <div key={comment.id}>
                <p>{comment.comment}</p>
                <p>{comment.stars} ⭐</p>
                <hr />
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </>
    );
  }
}
