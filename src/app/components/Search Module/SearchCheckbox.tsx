'use client';
import { useValueContext } from './ValueContext';

export default function SearchCheckbox() {
  const { filters, setFilters } = useValueContext();

  function hadnleCheckBox(e: any) {
    const { value, checked } = e.target;
    console.log(value, 'вывели в консоль велью');
    console.log(checked, 'вывели в консоль чекд');

    const updateCheckbox = checked
      ? [...filters.checkboxValue, value]
      : filters.checkboxValue.filter(item => item !== value);

    setFilters({ ...filters, checkboxValue: updateCheckbox });
  }

  return (
    <div className="col col-20">
      <input
        type="checkbox"
        name="check-filter"
        id="check-filter"
        value="5000"
        onChange={hadnleCheckBox}
      />
      <label htmlFor="check-filter">5000$</label>
      <input
        type="checkbox"
        name="check-filter2"
        id="check-filter2"
        value="3000"
        onChange={hadnleCheckBox}
      />
      <label htmlFor="check-filter2">3000$</label>
    </div>
  );
}
