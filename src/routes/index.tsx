import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <div class="title"> Tuto Maths </div>
      <p> Les différents cours disponibles sont les suivants : </p>
      <div>
        <ul>
          <li>
            <a href="nombres-decimaux"> Les nombres décimaux </a>
          </li>
          <li>
            <a href="suite-de-nombres"> Les suites de nombres </a>
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
