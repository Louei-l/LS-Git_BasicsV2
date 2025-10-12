let fish = ['Bruce', 'Marlin', 'Nemo', 'Dory', 'Gill'];
for (let i = 0; i <= fish.length - 1; i +=1) {
  if (fish[i] === 'Nemo') {
    console.log(fish[i]);
    return;
  }
  console.log(fish[i]);
}

