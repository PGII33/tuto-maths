import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <div class="title"> Les nombres décimaux </div>
      <div class="courses">
        <h2> Définition </h2>
        <p>
          Un nombre décimal est un nombre qui peut s'écrire avec un nombre fini
          de chiffres après la virgule <br />
          Par exemple :
        </p>

        <ul>
          <li> 1,1 </li>
          <li> 40,98 </li>
          <li> 0,03 </li>
          <li> 1 </li>
        </ul>

        <p>Sont des nombres décimaux</p>
      </div>
      <div class="activity">
        <h2> Est-ce un nombre décimal ?</h2>
        <p>
          Dans cette activité, vous pouvez entrer un nombre pour s'avoir s'il
          s'agit d'un nombre décimal !<br />
        </p>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Les nombres décimaux ",
  meta: [
    {
      name: "description",
      content: "Un site avec des cours et des exercices mathématiques",
    },
  ],
};
