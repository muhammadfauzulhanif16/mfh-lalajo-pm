export const Input = (props) => {
  return (
    <label className="flex flex-col">
      {props.label}
      
      <input
        type={props.type}
        value={props.value}
        className="mt-2 h-12 px-4 border border-neutral-200"
        placeholder={`Masukkan ${props.label.toLowerCase()}...`}
        onChange={props.onChange}
      />
    </label>
  )
}
