
const options = [
  { label: 'Latest', value: '' },
  { label: 'Oldest', value: '' },
  { label: 'Recommended', value: '' },
]

export function SortBy(): JSX.Element {
  return (
    <div>
      <label htmlFor="sort-by">Sort By</label>
      <select name="sort by" id="sort-by">
        <option value=''></option>
        {options.map((opt, key) => {
          return (
            <option value={opt.value} key={key}>{opt.label}</option>
          )})
        }
      </select>
    </div>
  )
}