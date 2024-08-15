import Link from "next/link";
import ListProject from "./components/UI/List";

// hero page
export default function Page() {
  return (
    <>
      <section>
        <div className="main-container">
          <div className="row row-60">
            <h1>Список проектов подгружаемые с MongoDB</h1>
            <ListProject />
          </div>
        </div>
      </section>
    </>
  );
}
