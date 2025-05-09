const amount = 1540;

const credentials = {
  login1: "password1",
  login2: "password2",
};

function askLogin() {
  let login;
  do {
    login = prompt("Введіть логін: ");
    if (login in credentials) {
      alert("Вітаємо, " + login + "!");
      return login;
    } else {
      alert("Неправильний логін або пароль. Спробуйте ще раз.");
    }
  } while (true);
}

function askPassword(correctPassword, login) {
  let password;
  do {
    password = prompt("Введіть пароль: ");
    if (password === correctPassword) {
      alert("Вхід успішний, " + login + "!");
      return;
    } else {
      alert("Неправильний логін або пароль. Спробуйте ще раз.");
    }
  } while (true);
}

function askValidSum(limit) {
  let sum;
  do {
    const input = prompt("Введіть суму: ");
    sum = parseInt(input);
    if (isNaN(sum)) {
      alert("Це не число. Спробуйте ще раз.");
      continue;
    }
    if (sum > limit) {
      alert("Сума перевищує ліміт. Спробуйте ще раз.");
    } else if (sum % 5 !== 0) {
      alert("Сума не ділиться на 5.");
    } else {
      return sum;
    }
  } while (true);
}

function calculateBills(sum) {
  const bills = [50, 20, 10, 5];
  const result = {};

  for (const bill of bills) {
    result[bill] = Math.floor(sum / bill);
    sum %= bill;
  }

  return result;
}

function showResult(originalAmount, bills) {
  alert(
    `Ваша сума: ${originalAmount}\n` +
      `Кількість 50: ${bills[50]}\n` +
      `Кількість 20: ${bills[20]}\n` +
      `Кількість 10: ${bills[10]}\n` +
      `Кількість 5: ${bills[5]}\n`
  );
}

// Виконання програми

while (amount > 0 )
{
const login = askLogin();
askPassword(credentials[login], login);
const requestedSum = askValidSum(amount);
const bills = calculateBills(requestedSum);
amount -= requestedSum;
showResult(requestedSum, bills);
}
