import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <div class="title"> Tuto Maths </div>
      <p> Les différents cours disponibles sont les suivants : </p>
      <div>
        <ul>
          <li>
            <Link href="/nombres-decimaux"> Les nombres décimaux </Link>
          </li>
        </ul>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Tuto Maths",
  meta: [
    {
      name: "description",
      content: "Un site avec des cours et des exercices mathématiques",
    },
  ],
};
