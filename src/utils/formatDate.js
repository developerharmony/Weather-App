export const formatDate = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleDateString('tr-TR', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  });
};
