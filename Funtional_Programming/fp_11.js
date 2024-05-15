// Remove Elements from an Array Using slice Instead of splice

function nonMutatingSplice(cities) {

    // return cities.splice(3);
    return cities.slice(0, 3);
  }
