const TextRenderLine = ({value, onChange}) => {
  return (
    <div className="type-text">
      Наберите текст
      <textarea onChange={(event) => onChange(event.currentTarget.value)} value={value} name="text" id="font-text" cols="30" rows="2" placeholder="Введите текст для футболки"></textarea>
    </div>
  );
};
