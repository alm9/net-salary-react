const formatterNumber = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  maximumFractionDigits: 2,
});

const formatterPercentage = Intl.NumberFormat('pt-BR', {
  // style: 'percent',
  currency: 'BRL',
  maximumFractionDigits: 2,
});

function formatNumber(value) {
  return formatterNumber.format(value);
}

function formatPercentage(value) {
  return formatterPercentage.format(value);
}

export { formatNumber, formatPercentage };
