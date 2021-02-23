export function numeroPreco(valor) {
  valor = Number(valor);

  if (!Number.isNaN(valor)) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
  }

  return "";
}

export function dataAtualFormatada() {
  const data = new Date();
  const dia = data.getDate().toString();
  const diaF = (dia.length === 1) ? `0${dia}` : dia;
  const mes = (data.getMonth() + 1).toString();
  const mesF = (mes.length === 1) ? `0${mes}` : mes;
  const anoF = data.getFullYear();

  return `${diaF}/${mesF}/${anoF}`;
}

export function formatMoney(v) {
  v = v.replace(/\D/g, '');
  v = (v / 100).toFixed(2);
  v = v.replace(".", ",");
  v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
  v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");

  return v;
}

export function revertMoney(v) {
  v = v.replaceAll('.', "");
  v = v.replaceAll(',', ".");

  return v;
}