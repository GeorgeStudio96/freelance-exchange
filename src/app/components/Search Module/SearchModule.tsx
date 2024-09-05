import { Search, SearchCheckbox } from "./index";
import { ValueContextProvider } from "./ValueContext";
import FilteredProjectList from "./FilteredProjectList";

export default function SearchModule() {
  return (
    <div>
      {/* это мой главный модуль выводящий разные фильтр-компоненты */}
      <form>
        <ValueContextProvider>
          <Search />
          <SearchCheckbox />
          <FilteredProjectList />
        </ValueContextProvider>
      </form>
    </div>
  );
}
