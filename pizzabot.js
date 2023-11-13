const vegetarian = "Vegetarian";
const hawaiian = "Hawaiian";
const pepperoni = "Pepperoni";
const pizzaPrice = 80;

function checkOrderName(orderName) {
  return (
    orderName === vegetarian ||
    orderName === hawaiian ||
    orderName === pepperoni
  );
}

function totalCost(orderQuantity) {
  return orderQuantity * pizzaPrice;
}

function cookingTime(orderQuantity) {
  if (orderQuantity >= 1 && orderQuantity <= 2) {
    return 10;
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    return 15;
  } else {
    return 20;
  }
}

function handleOrder() {
  const message = `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian}, and ${pepperoni}`;
  alert(message);

  const orderName = prompt(
    "Enter the name of the pizza you want to order today."
  );

  if (checkOrderName(orderName)) {
    const orderQuantity = prompt(`How many of ${orderName} do you want today?`);
    const total = totalCost(orderQuantity);
    const time = cookingTime(orderQuantity);
    alert(
      `Great, I'll get started on your ${orderName} pizza(s) right away. It will cost ${total} kr. It will take ${time} minutes.`
    );
  } else {
    alert("Please enter a valid quantity.");
  }
}

handleOrder();
