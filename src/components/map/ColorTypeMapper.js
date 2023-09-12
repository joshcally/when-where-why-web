function getColorType(countries, id) {
  if (typeof(countries) !== 'undefined' && typeof(countries[id]) !== 'undefined' && JSON.stringify(countries) !== '[]') {
    switch (countries[id].temperature) {
      case 'HOT' :
        return 'hot'
      case 'WARM' :
        return 'warm'
      case 'MILD' :
        return 'mild'
      case 'COOL' :
        return 'cool'
      case 'COLD' :
        return 'cold'
      default:
        return 'no-data'
    }
  }
  else {
    return '';
  }
}

export default getColorType;