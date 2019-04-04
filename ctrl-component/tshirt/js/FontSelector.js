
const FontSelector = ({fonts, selectedFont, onSelect}) => {
    return (
        <div className="font-picker">
           {fonts.map(font => <Font font={font} onChange={onSelect}/>)}
        </div>
    )
};

const Font = ({font, onChange}) => {
  return (
    <div className="grid center font-item">
      <input onChange={() => onChange(font)} type="radio" name="font" value={font.name} id={font.name} />
      <label for={font.name} className="grid-1">
        <PictureFont text="abc" path={font.path}/>
      </label>
    </div>
  )
}