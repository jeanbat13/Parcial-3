function mostrarResultado(tipo, id, mensaje) {
  const cont = document.getElementById(id);
  cont.className = "alert alert-" + tipo;
  cont.textContent = mensaje;
  cont.classList.remove("d-none");
}




    function calculoNota(id) {
      const n1 = parseFloat(document.getElementById('num1').value);
      const n2 = parseFloat(document.getElementById('num2').value);
      const n3 = parseFloat(document.getElementById('num3').value);

      if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        mostrarResultado('warning', id, 'Por favor, ingresa todas las notas correctamente.');
        return;
      }
        const promedio = ((n1 + n2 + n3)/3) *0.60;
        if (promedio >= 60) {
            mostrarResultado('success', id, `su promedio es de:  ${promedio.toFixed(2)}. necesitas sacar por lo menos 82.33 en el examen final para aprobar el curso Con A.`);
        } else {
            if (promedio >= 40) {
                mostrarResultado('info', id, `su promedio es de:  ${promedio.toFixed(2)}. necesitas sacar por lo menos 97.50 en el examen final para aprobar el curso Con B.`);
            } if (promedio >= 20) {
                mostrarResultado('danger', id, `su promedio es de:  ${promedio.toFixed(2)}. necesitas sacar por lo menos 100 en el examen final para aprobar el curso Con C.`);
            } else {
                mostrarResultado('danger', id, `su promedio es de:  ${promedio.toFixed(2)}. lamentablemente no puedes aprobar el curso, Sacaras menos de D o F sin importar la nota del examen final.`);
            }
        }
    }   


    function MatrizNxN() {
      const n1 = parseInt(document.getElementById('n1').value, 10);
      const n2 = parseInt(document.getElementById('n2').value, 10);
       if (isNaN(n1) || isNaN(n2) || n1 <= 0 || n2 <= 0)
         {
            mostrarResultado('warning', id, 'Por favor, ingrese valores válidos para filas y columnas.');
            return;
         }


      const matrix = Array.from({ length: n1 }, () => Array.from({ length: n2 }, () => 0));

      function randInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      let sum = 0;
      if (n === 1) {
        const v = randInt(1, 100);
        matrix[0][0] = v;
        sum = v;
      } else {
        const tl = randInt(1, 100);
        const tr = randInt(1, 100);
        const bl = randInt(1, 100);
        const br = randInt(1, 100);

        matrix[0][0] = tl;
        matrix[0][n2 - 1] = tr;
        matrix[n1 - 1][0] = bl;
        matrix[n1 - 1][n2 - 1] = br;

        sum = tl + tr + bl + br;
      }

      let html = '<table class="table table-bordered table-sm text-center align-middle mb-0"><tbody>';
      for (let i = 0; i < n1; i++) {
        html += '<tr>';
        for (let j = 0; j < n2; j++) {
          html += `<td style="width:${Math.max(40, 300 / n2)}px; padding:6px;">${matrix[i][j]}</td>`;
        }
        html += '</tr>';
      }
      html += '</tbody></table>';
      out.innerHTML = html;

      mostrarResultado('info', sumId, `Suma de esquinas: ${sum}`);
    }
