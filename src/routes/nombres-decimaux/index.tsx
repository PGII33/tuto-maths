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
        <p>
          Sont des nombres décimaux. <br />
          En effet :
        </p>
        <ul>
          <li> 1,1 possède un uniqume chiffre après la virgule</li>
          <li> 40,98 possède 2 chiffres après la virgule</li>
          <li> 0,03 possède aussi 2 chiffres après la virgule</li>
          <li> 1 possède 0 chiffres après la virgule</li>
        </ul>
        <p>
          En revanche, 2/3 qui s'écrirait 0,6666... avec une infinité de 6 n'est
          pas un nombre décimal car il n'y a pas un nombre fini de chiffres
          après la virgule (ici une infinité). <br />
          De même pour π qui s'écrit 3,14159265358979323846... avec une infinité
          de chiffres
        </p>
      </div>
      <div class="activity">
        <h2> Est-ce un nombre décimal ?</h2>
        <p>
          Dans cette activité, vous pouvez entrer un nombre pour s'avoir s'il
          s'agit d'un nombre en écriture décimale !<br />
          <input type="text" id="decimalInput" placeholder="Entrez un nombre" />
          <button
            onClick$={() => {
              const inputElement = document.getElementById(
                "decimalInput",
              ) as HTMLInputElement;
              const input = inputElement.value;
              const isDecimal = /^-?\d+(\.\d+)?$/.test(input.replace(",", "."));
              alert(
                isDecimal
                  ? "C'est un nombre décimal"
                  : "Ce n'est pas un nombre décimal",
              );
            }}
          >
            Vérifier
          </button>
        </p>
      </div>

      <div class="method">
        <h2> Addition de nombres décimaux </h2>
        <p>
          Pour additionner des nombres décimaux, on procède de la même manière
          que pour les nombres entiers. <br />
          On aligne les virgules et on additionne les chiffres de droite à
          gauche. Si un nombre possède plus de chiffres après la virgule, il
          suffit d'ajouter des 0 à la suite du nombre qui en a le moins. <br />
          <br />
          Par exemple :
        </p>

        <div style="display: inline-block; font-family: monospace; text-align: right; line-height: 1.4;">
          <div> 23,40</div>
          <div>+ 12,73</div>
          <div>-------</div>
          <div> 36,13</div>
        </div>
      </div>

      <div class="activity">
        <h2> Additionnez deux nombres décimaux </h2>
        <p>
          Dans cette activité, vous pouvez entrer deux nombres décimaux et les
          additionner !<br />
          <input
            type="text"
            id="decimalInput1"
            placeholder="Entrez le premier nombre"
          />
          <input
            type="text"
            id="decimalInput2"
            placeholder="Entrez le deuxième nombre"
          />
          <button
            onClick$={() => {
              const inputElement1 = document.getElementById(
                "decimalInput1",
              ) as HTMLInputElement;
              const inputElement2 = document.getElementById(
                "decimalInput2",
              ) as HTMLInputElement;
              const input1 = inputElement1.value.replace(",", ".");
              const input2 = inputElement2.value.replace(",", ".");

              const isDecimal1 = /^-?\d+(\.\d+)?$/.test(input1);
              const isDecimal2 = /^-?\d+(\.\d+)?$/.test(input2);

              if (isDecimal1 && isDecimal2) {
                const getDecimalCount = (numStr) => {
                  const parts = numStr.split(".");
                  return parts.length > 1 ? parts[1].length : 0;
                };

                const decimals1 = getDecimalCount(input1);
                const decimals2 = getDecimalCount(input2);
                const maxDecimals = Math.max(decimals1, decimals2);

                const sum = parseFloat(input1) + parseFloat(input2);
                alert(
                  `La somme des deux nombres est : ${sum.toFixed(maxDecimals).replace(".", ",")}`,
                );
              } else {
                alert("Veuillez entrer deux nombres décimaux valides");
              }
            }}
          >
            Additionner
          </button>
        </p>
      </div>

      <div class="exercices">
        <h2> Addition de 2 nombres décimaux </h2>
        <div>
          <button
            onClick$={() => {
              const randomDecimal1 = (Math.random() * 200).toFixed(2);
              const randomDecimal2 = (Math.random() * 120).toFixed(2);
              document.getElementById("randomDecimal1").innerText =
                randomDecimal1;
              document.getElementById("randomDecimal2").innerText =
                randomDecimal2;
            }}
          >
            Générer des nombres aléatoires
          </button>
          <p>
            Nombre 1: <span id="randomDecimal1"></span>
            <br />
            Nombre 2: <span id="randomDecimal2"></span>
          </p>
          <button
            onClick$={() => {
              const randomDecimal1 = parseFloat(
                document.getElementById("randomDecimal1").innerText,
              );
              const randomDecimal2 = parseFloat(
                document.getElementById("randomDecimal2").innerText,
              );
              if (!isNaN(randomDecimal1) && !isNaN(randomDecimal2)) {
                const sum = randomDecimal1 + randomDecimal2;
                alert(
                  `La somme des deux nombres aléatoires est : ${sum.toFixed(2).replace(".", ",")}`,
                );
              } else {
                alert(
                  "Veuillez générer deux nombres décimaux aléatoires d'abord",
                );
              }
            }}
          >
            Afficher la somme
          </button>
        </div>
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
