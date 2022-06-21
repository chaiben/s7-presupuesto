export default function Panel(props) {
  return (
    <div className="panel">
      Número de páginas: 
      <input
        type="text"
        onChange={(event) => props.addProduct(event.target)}
        id="numPages"
        name="numPages"
        value={props.formData["numPages"]}
      />
      Número de idiomas: 
      <input
        type="text"
        id="numLanguages"
        onChange={(event) => props.addProduct(event.target)}
        name="numLanguages"
        value={props.formData["numLanguages"]}
      />

    </div>
  );
}