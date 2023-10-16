const calculateEngravingPrice = function (message, pricePerWord) {
    // Розділімо рядок на слова за допомогою методу split та обчислимо кількість слів
    const words = message.split(' ');
    const wordCount = words.length;
  
    // Розраховуємо загальну вартість гравіювання
    const totalPrice = wordCount * pricePerWord;
  
    return totalPrice;
  };
  console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      10,
    ),
  ); 
  console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      20,
    ),
  ); 
  console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
  ); 
  console.log(
    calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
  );
  